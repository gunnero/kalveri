# Kalveri main-promotion plan

At audit time, `origin/main` pointed to `851ae634ab0e307bc246c7ec4cb6433676d11689` and local `main` pointed to `4345db1d7715ae149ec20b21a7455ad44d9b7874`. Local `main` was two commits ahead and zero behind; the merge base was the remote-main commit.

The two unique local commits add the homepage SEO foundation and Search Console verification. They are valid parts of the strongest complete lineage and must not be discarded, overwritten, or blindly cherry-picked.

## Recommendation

Push `program/github-professionalization-005-kalveri` and open a normal reviewed pull request against `main`. Prefer a merge commit if retaining the two existing SEO commits as distinct history is important. A squash merge is acceptable only if reviewers explicitly approve collapsing the entire focused website-professionalization lineage into one commit.

Required gates:

- Exact branch head reviewed
- Hosted lint, build, tests, accessibility, dependency audit, links, metadata, assets, YAML, topology, and Gitleaks checks green
- Public diff confirms no operational topology or unsupported company claims
- No repository rename, visibility change, metadata setting, deployment, or license addition bundled into promotion

Rollback point: `851ae634ab0e307bc246c7ec4cb6433676d11689`, the current remote-main baseline. Promotion should occur only through GitHub review; do not force-push or overwrite `origin/main`.
