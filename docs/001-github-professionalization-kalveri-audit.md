# Kalveri GitHub professionalization audit

Audit date: July 13, 2026

Repository at audit: `gunnero/kalveri` (public)

Default branch: `main`

## Executive assessment

The repository clearly contained the Kalveri public company homepage, but its public presentation mixed a polished static site with a README that disclosed real deployment topology. It also lacked repository governance, CI, dependency validation, security reporting, a canonical changelog, architecture documentation, and evidence-bounded company positioning.

Recruiter/partner-readiness before changes: **30/100**.

## Repository state

- Remote `origin/main`: `851ae634ab0e307bc246c7ec4cb6433676d11689`
- Local `main` at audit: `4345db1d7715ae149ec20b21a7455ad44d9b7874`
- Divergence: local `main` was two commits ahead and zero behind.
- Unique local commits: homepage SEO foundation and Google Search Console verification.
- Worktree: clean.
- Stale branches: none; only local `main` existed before the program branch.
- Tag: `kalveri-homepage-v1` at the remote-main baseline.
- Formal GitHub releases: none.

The two local commits were valid, current website work and formed the strongest complete lineage. The program branch was therefore created from local `main`; neither commit was discarded or blindly cherry-picked.

## Operational disclosure findings

The original README exposed a server alias, Linux account, IPv4 and IPv6 addresses, absolute local and server paths, web-root ownership and permissions, web-server commands, certificate host inventory, mail hostnames, DNS lookup expectations, backup storage, and exact deploy and rollback commands. A tracked mail-policy file also exposed environment-specific mail configuration.

The current-tree cleanup removes those details and retains only generic public release principles: reviewed commit, validated static build, recovery point, atomic replacement, smoke testing, and rollback capability. Historical commits still contain the former documentation; no live credential was found, so history rewriting is neither necessary nor authorized.

## Security scan baseline

- Gitleaks current working tree: no leaks found.
- Gitleaks full Git history: six commits scanned, no leaks found.
- Private-key and common GitHub, AWS, OpenAI, and Slack token patterns: no findings.
- Tracked environment files, database dumps, private keys, and backup/archive files: none.
- Tracked source maps or generated build directories: none.
- Operational topology existed in historical documentation, not as an active secret.

## Branding and claim findings

The old homepage called Kalveri “The Operating System for Modern Companies,” described a shared intelligence layer, and presented speculative “Kalveri AI” and “AI newsroom” positioning. That language blurred the company website, product ecosystem, and an unverified shared platform.

The reviewed identity is **Kalveri company website**. It is not a product monorepo, shared platform, infrastructure repository, customer portal, or AI operating platform. Current public product references are BuildIQ, MediaHub, and Razbudise, each described as active work without implying launch, adoption, customers, revenue, funding, staffing, or commercial success.

## Asset findings

The repository contains authoritative wordmark and K-mark source PNGs, optimized runtime derivatives, SVG marks, favicons, an Apple touch icon, and a social-preview pair. The two source masters are approximately 2.2 MB each and should remain in Git until a reviewed vector or reproducible replacement becomes authoritative. Runtime derivatives are substantially smaller and intentionally separate.

No EXIF metadata was found in the reviewed public screenshot set. The social preview and screenshots require regeneration when public positioning changes; duplicate exports should not be added casually.

## Branch recommendation

Continue on `program/github-professionalization-005-kalveri`, preserving the two local commits in its ancestry. Push the branch for review and merge through a normal pull request only after all checks are green. Do not overwrite `origin/main`, rebase away the local commits, or rename the repository as part of this program.

## Readiness score

| Area | Before | Main concern |
| --- | ---: | --- |
| Public safety | 4/20 | Detailed live operational topology in current documentation |
| Identity and claims | 7/20 | Company, shared platform, and speculative AI identity blurred |
| Repository hygiene | 3/20 | No CI, security policy, templates, or canonical changelog |
| Engineering evidence | 7/20 | Good static implementation but no architecture or validation evidence |
| Visual evidence and assets | 9/20 | Strong brand assets but no screenshot or asset policy |
| **Total** | **30/100** | Not yet recruiter/partner ready |
