import { readFile } from "node:fs/promises";

const files = [
  "README.md",
  "SECURITY.md",
  "MAINTENANCE.md",
  "index.html",
  "docs/architecture.md",
  "docs/google-search-console.md"
];

const forbidden = [
  /\b(?:ssh|rsync|scp)\s+/i,
  /\bsudo\s+/i,
  /\/(?:home|root|srv|var\/www)\//i,
  /\bweb\d{2}\b/i,
  /\b(?:\d{1,3}\.){3}\d{1,3}\b/,
  /\b[0-9a-f]{0,4}:[0-9a-f:]{3,}\b/i,
  /codex-backups/i,
  /customer logos?/i,
  /\b(?:our customers|our employees|our revenue|our funding)\b/i
];

const findings = [];
for (const file of files) {
  const text = await readFile(file, "utf8");
  for (const pattern of forbidden) {
    if (pattern.test(text)) findings.push(`${file}: ${pattern}`);
  }
}

if (findings.length) {
  console.error(findings.join("\n"));
  process.exit(1);
}

console.log("Public-evidence scan passed.");
