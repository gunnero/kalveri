# Kalveri Governance Pilot

## Purpose and scope

This documentation-only record validates the approved `main` branch protection for `gunnero/kalveri`. The pilot did not change the website, production environment, repository visibility, secrets, workflow permissions, secret scanning, or push protection.

The pre-change `main` commit was `fb90378a25c7c3a7dd2b05e2582b66022ca3531c`. No ruleset or legacy branch protection existed before the pilot.

## Settings applied

Classic branch protection was applied to `main` with these controls:

- require a pull request before merging;
- require zero approving reviews;
- do not require CODEOWNER review;
- require `site`, `repository`, and `secrets`;
- require the branch to be up to date before merging;
- require all review conversations to be resolved;
- enforce the rules for administrators;
- block force pushes;
- block branch deletion;
- do not require signed commits;
- do not require linear history;
- do not enable a merge queue;
- do not lock the branch; and
- do not create bypass actors or path restrictions.

Merge commits and the previously supported squash method remain enabled. Rebase merging was disabled. Squash is reserved for isolated maintenance; normal merge commits remain available where distinct SEO history matters.

## Validation results

### Required checks and pre-check merge state

Test pull request #6 reported all three exact contexts:

- `site`;
- `repository`; and
- `secrets`.

While those checks were pending, GitHub reported the pull request as blocked. After all three passed, the pull request became cleanly mergeable.

### Direct push, force push, and deletion

Safe Git `--dry-run` proposals were made for a direct fast-forward to `main`, a forced update, and deletion of `main`. They produced no remote changes. Git client dry-run does not execute GitHub's server-side protection hooks, so these commands alone are not proof of rejection.

The authoritative GitHub protection response confirms that administrator enforcement is enabled and that force pushes and deletions are disabled. Because protection requires a pull request and applies to administrators, a direct push is prohibited. No real mutation was attempted: an actual push would have risked altering `main` if the configuration were wrong.

### Conversation resolution

With all required checks green, pull request #6 was initially cleanly mergeable. An inline governance-test review thread changed its merge state to blocked. Resolving that exact thread returned the pull request to cleanly mergeable. This demonstrates that conversation resolution is enforced.

### Branch freshness

GitHub reports strict required status checks for the protected branch, which requires a pull-request branch to be current with `main`. The pilot did not manufacture an extra change on `main` solely to create a stale branch. This avoids unnecessary history while retaining an authoritative configuration check.

### Merge behavior

Test pull request #6 uses the normal merge-commit method after required checks are green, conversations are resolved, and the branch is current. Its final merge commit is recorded by the pull request and the program completion report rather than embedded here, because this document is itself part of that merge.

No deployment is associated with the test change.

## UI and API notes

GitHub exposed every requested control through classic branch protection for this public repository. No plan limitation prevented the pilot. The API reported:

- strict required status checks enabled;
- administrator enforcement enabled;
- signed commits disabled;
- linear history disabled;
- force pushes disabled;
- deletion disabled;
- conversation resolution enabled; and
- branch locking disabled.

## Rollback

If the protection causes an unexpected lockout:

1. Record the active protection response and the failing pull-request state.
2. Correct an inaccurate required-check context first; do not weaken unrelated controls.
3. If access must be restored, remove or adjust only the newly introduced `main` protection through **Settings → Branches**.
4. Restore rebase merging only if a separately approved repository policy requires it.
5. Reapply the recorded protection after a test pull request reports the exact contexts successfully.
6. Verify Actions permissions, secret scanning, push protection, visibility, and default branch remain unchanged.

The documentation change can be removed only through a separate reviewed pull request. Do not rewrite history or push directly to `main`.

## Rollout recommendation

Apply the validated baseline sequentially:

1. **MediaHub** — require `frontend`, `backend`, `repository`, and `secrets`; use squash-only merging and linear history.
2. **Portfolio** — require `quality`; apply squash-only merging and linear history now that its governance files are present.
3. **BuildIQ** — require `backend`, `frontend`, `repository`, and `secrets`; retain both squash and normal merge commits, disable rebase, and do not require linear history when reviewed commit lineage must remain distinct.

For each repository, snapshot settings first, use zero approvals until another eligible reviewer exists, validate conversation resolution and exact checks on a harmless pull request, and confirm no deployment occurred.
