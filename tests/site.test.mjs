import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const html = await readFile("index.html", "utf8");

test("canonical metadata and JSON-LD are valid", () => {
  assert.match(html, /<link rel="canonical" href="https:\/\/kalveri\.com\/">/);
  assert.match(html, /<meta name="description" content="[^"]+">/);
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/g)];
  assert.equal(blocks.length, 2);
  for (const block of blocks) JSON.parse(block[1]);
});

test("internal navigation targets exist", () => {
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
  const targets = [...html.matchAll(/href="#([^"]+)"/g)].map((match) => match[1]);
  for (const target of targets) assert.ok(ids.has(target), `Missing #${target}`);
});

test("referenced local assets exist", async () => {
  const refs = [...html.matchAll(/(?:src|href)="((?:assets\/|favicon\.ico|site\.webmanifest)[^"?]*)/g)].map((match) => match[1]);
  for (const ref of refs) await access(ref);
});

test("public product language stays bounded", () => {
  assert.doesNotMatch(html, /Operating System for Modern Companies|Kalveri AI|AI newsroom|customers|revenue|funding|employees/i);
  for (const product of ["BuildIQ", "MediaHub", "Razbudise"]) assert.match(html, new RegExp(product));
});

test("robots and sitemap use the canonical public URL", async () => {
  assert.match(await readFile("robots.txt", "utf8"), /https:\/\/kalveri\.com\/sitemap\.xml/);
  assert.match(await readFile("sitemap.xml", "utf8"), /<loc>https:\/\/kalveri\.com\/<\/loc>/);
});

test("approved screenshots have exact dimensions and no text or EXIF chunks", async () => {
  const expected = new Map([
    ["docs/assets/screenshots/kalveri-homepage.png", [1440, 1000]],
    ["docs/assets/screenshots/kalveri-approach.png", [1440, 1000]],
    ["docs/assets/screenshots/kalveri-products.png", [1440, 1000]],
    ["docs/assets/screenshots/kalveri-mobile.png", [390, 844]]
  ]);

  for (const [file, [width, height]] of expected) {
    const png = await readFile(file);
    assert.equal(png.subarray(1, 4).toString(), "PNG");
    assert.equal(png.readUInt32BE(16), width);
    assert.equal(png.readUInt32BE(20), height);
    const chunks = [];
    for (let offset = 8; offset + 12 <= png.length; ) {
      const length = png.readUInt32BE(offset);
      chunks.push(png.subarray(offset + 4, offset + 8).toString("ascii"));
      offset += 12 + length;
    }
    for (const metadataChunk of ["eXIf", "tEXt", "iTXt", "zTXt"]) {
      assert.ok(!chunks.includes(metadataChunk), `${file} contains ${metadataChunk}`);
    }
  }
});
