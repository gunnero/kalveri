# Kalveri dependency review

Review date: July 13, 2026

The runtime website remains dependency-free static HTML, CSS, and assets. Node packages are development-only validation tools and are not shipped in `dist/`.

## Tooling

- `html-validate` validates semantic HTML and accessibility-related markup rules.
- `stylelint` checks CSS validity and duplicate/unknown declarations.
- `@playwright/test` runs the browser smoke suite.
- `@axe-core/playwright` performs automated accessibility analysis.

`npm ci` installs the reviewed lockfile. `npm audit --audit-level=high` reports zero vulnerabilities at review time, and `npm outdated --json` reports no outdated direct dependency. No high or critical advisory blocks promotion.

Monthly Dependabot checks cover npm and GitHub Actions. Updates must pass lint, tests, build, accessibility, link, asset, metadata, and secret checks before merge.
