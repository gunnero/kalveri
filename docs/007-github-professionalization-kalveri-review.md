# Kalveri GitHub professionalization review

Review date: July 13, 2026

Branch: `program/github-professionalization-005-kalveri`

Repository: `gunnero/kalveri`

## Executive assessment

The repository is ready for pull-request review as a professional public company-website repository. It now explains what Kalveri is, what this repository is not, which products are active work, how the static site is built and validated, and where public evidence stops. The current tree no longer publishes environment-specific deployment, certificate, DNS, mail, backup, or rollback mechanics.

Readiness improved from **30/100** to **92/100**. Remaining work is external to the reviewed tree: hosted CI, pull-request review, reconciliation into remote `main`, optional GitHub metadata, legal license wording, and any later separately approved rename.

## Current-state risks and security cleanup

The original README exposed real operational topology and the homepage used speculative shared-platform and AI language. Those details were removed or generalized. The tracked environment-specific mail-policy file was removed; search-indexing notes now describe only public behavior. Historical commits retain former documentation, but Gitleaks found no secret and history rewriting is neither required nor authorized.

Security evidence:

- Gitleaks current tree: no leaks found
- Gitleaks full review-branch history: eight commits scanned, no leaks found
- Private-key and common GitHub, AWS, OpenAI, and Slack token patterns: no findings
- Environment files, dumps, private keys, archives, tracked build output, and source maps: none
- Public-evidence topology scan: passed

## README and identity review

The README is concise and recruiter/partner-oriented. It identifies the repository as the **Kalveri company website**, explicitly excludes platform/monorepo/infrastructure/customer-portal interpretations, distinguishes active products from commercial launch, documents the actual static stack, and states the proprietary source-visible posture.

Homepage title, description, Open Graph, Twitter, JSON-LD, manifest, social card, navigation, headings, and product summaries now use the same evidence-bounded identity. BuildIQ, MediaHub, and Razbudise are the only active product references. No customer, revenue, funding, employee, team-size, traction, or commercial-success claim is made.

## Screenshots and assets

Four reviewed screenshots cover the desktop hero, engineering approach, product ecosystem, and 390×844 mobile homepage. They contain no browser chrome or private content. Automated tests enforce exact dimensions and reject EXIF and textual PNG metadata chunks.

Authoritative raster source artwork remains in Git because it is the current brand source. Optimized runtime derivatives, SVG marks, platform icons, the editable social-preview SVG, and its regenerated PNG have explicit roles. Git LFS is unnecessary at current scale. Legal confirmation of source-art ownership remains required before granting reuse rights.

## Architecture and CI

`docs/architecture.md`, its Mermaid source, and reviewed SVG document the static frontend, public content and asset boundaries, SEO metadata, accessibility approach, contact behavior, allowlist build, and generic release path without private topology.

The new least-privilege GitHub Actions workflow provides:

- locked dependency installation
- HTML and CSS linting
- metadata, JSON-LD, internal-link, asset, branding, robots, sitemap, and screenshot tests
- explicit static build
- Playwright and axe-core accessibility smoke tests
- npm audit
- Markdown link validation
- GitHub YAML and XML validation
- `git diff --check`
- full-history Gitleaks

Local workflow-equivalent validation is green: six Node tests and two browser accessibility tests passed; lint, build, public-evidence, Markdown links, YAML, SVG, sitemap, npm audit, Gitleaks, and diff checks passed. Hosted CI remains a required pull-request gate.

## Dependency and license status

The deployed website has no runtime package dependency. All Node packages are development-only validation tools. `npm audit --audit-level=high` reports zero vulnerabilities, and direct dependencies are current at review time.

No `LICENSE` file was added. Package metadata uses `UNLICENSED`; README and asset documentation state **proprietary source-visible pending approved legal wording**. Public visibility does not imply reuse rights.

## Rename, promotion, and metadata recommendations

Renaming `gunnero/kalveri` to `gunnero/kalveri-website` would clarify scope but is not urgent. Do not rename until a separate approval and private integration inventory are complete.

The feature branch is based on local `main`, which was two valid commits ahead and zero behind `origin/main`. Open a normal PR against remote `main`; prefer a merge commit to preserve the two SEO commits as distinct history unless reviewers explicitly approve a squash. Do not force-push, overwrite remote `main`, or cherry-pick the documentation onto an older lineage.

Recommended GitHub metadata, not applied:

- Description: `Public website for Kalveri, a software company and product ecosystem focused on practical business software, SaaS, publishing, and accountable AI-assisted engineering.`
- Homepage: use the verified live Kalveri website URL only after explicit approval
- Topics: `company-website`, `software-products`, `saas`, `product-engineering`, `html`, `css`, `accessibility`, `kalveri`
- Status: active company website
- Pin priority: 4

## Readiness score

| Area | Before | After |
| --- | ---: | ---: |
| Public safety | 4/20 | 19/20 |
| Identity and claims | 7/20 | 19/20 |
| Repository hygiene | 3/20 | 18/20 |
| Engineering evidence | 7/20 | 18/20 |
| Visual evidence and assets | 9/20 | 18/20 |
| **Total** | **30/100** | **92/100** |

## Remaining blockers and exact next steps

1. Commit and push the review branch without changing remote `main`.
2. Open a PR titled `chore: professionalize Kalveri website repository`.
3. Require hosted site, repository, and secrets jobs to pass on the exact head commit.
4. Review the public diff, screenshots, historical-topology caveat, and two unique local SEO commits.
5. Merge through the approved method and synchronize local `main` only after review.
6. Decide legal wording and GitHub description, homepage, and topics separately.
7. Consider the optional rename only through the documented private inventory and verification sequence.
8. Deploy only under a separate explicit release authorization.

## Recommended pull-request body

```text
## Summary

- establish the repository as the public Kalveri company website
- remove current-tree operational topology and speculative product positioning
- add professional README, security, maintenance, changelog, templates, Dependabot, CI, architecture, asset, screenshot, dependency, rename, and promotion evidence
- preserve the two valid local SEO commits without overwriting origin/main

## Validation

- HTML and CSS lint passed
- 6 Node tests passed
- 2 Playwright/axe accessibility tests passed
- static build passed
- npm audit: 0 vulnerabilities
- Gitleaks current tree and full history: no leaks
- Markdown links, YAML, SVG, sitemap, screenshots, metadata, assets, public-evidence scan, and git diff check passed

## Boundaries

- no repository rename, visibility change, metadata setting, deployment, history rewrite, main merge, or LICENSE addition
- no customers, revenue, funding, staffing, traction, or commercial-success claims
- private infrastructure and release operations remain outside the public repository
```
