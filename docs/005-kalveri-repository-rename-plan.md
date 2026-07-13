# Optional Kalveri repository rename plan

Current name: `gunnero/kalveri`

Candidate: `gunnero/kalveri-website`

Recommendation: useful for clarity, but not urgent and not authorized by this program.

## Benefits and drawbacks

`kalveri-website` makes the repository boundary explicit and avoids suggesting a company-wide monorepo. The current short name is established, readable, and already linked publicly; renaming introduces integration review and link-maintenance work without changing product quality.

GitHub normally redirects old web and Git transport URLs after a rename, but canonical references should still be updated. Before approval, inventory Actions environments and secrets, Dependabot secrets, Apps, webhooks, deploy keys, rulesets, badges, local and private remotes, release tooling, portfolio links, package metadata, and external documentation without publishing private values.

## Exact sequence if later approved

1. Freeze changes and record repository visibility, default branch, branches, tags, releases, PRs, issues, workflows, rules, and integration names.
2. Confirm the working tree and `main` are clean, synchronized, and green.
3. Create a private timestamped integration checklist; preserve secret values and operational references outside public output.
4. Rename `gunnero/kalveri` to `gunnero/kalveri-website` in GitHub settings without changing visibility or default branch.
5. Verify the new repository page, old-URL redirect, branches, tags, releases, PRs, issues, Actions, Dependabot, Apps, webhooks, deploy keys, and rules.
6. Update the local origin to `https://github.com/gunnero/kalveri-website.git`, fetch with prune, and verify `git ls-remote`.
7. Update approved README badges, portfolio links, package metadata, public documentation, and any required private integrations.
8. Re-run hosted CI and verify clone, screenshots, links, metadata, sitemap, robots, and public branding.

If a critical integration fails, rename back before creating another repository under either slug, restore canonical references, and verify the prior state. Do not combine a rename with deployment, visibility, licensing, DNS, or mail changes.
