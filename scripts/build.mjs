import { cp, mkdir, rm } from "node:fs/promises";

const files = [
  "index.html",
  "styles.css",
  "favicon.ico",
  "google3b04fc27581f6e07.html",
  "robots.txt",
  "site.webmanifest",
  "sitemap.xml"
];

await rm("dist", { force: true, recursive: true });
await mkdir("dist/assets", { recursive: true });

for (const file of files) {
  await cp(file, `dist/${file}`);
}

for (const asset of [
  "apple-touch-icon.png",
  "favicon.svg",
  "kalveri-k.png",
  "kalveri-mark.svg",
  "kalveri-social-preview.png",
  "kalveri-wordmark.png"
]) {
  await cp(`assets/${asset}`, `dist/assets/${asset}`);
}

console.log("Static site built in dist/.");
