# KELBRIC Technologies — GitHub Transition Safeguard Log

**Transition:** `arjayb` → `kelbrictech`  
**Date:** 2026-08-29  
**Status:** Pre-rename protection phase

## Protection completed

A non-destructive snapshot branch named `pre-kelbric-transition-2026-08-29` was created from the current `main` branch in every repository owned by the account before the username transition.

This preserves the pre-transition repository state independently of later README, URL, branding, deployment, or configuration edits.

## Repository inventory protected

1. `todo-list-app`
2. `PDF-resizer`
3. `Rate-Board-Live-Currency-Converter`
4. `Orbit-a-GitHub-profile-explorer`
5. `arjayb` — current GitHub profile README repository
6. `Digital-Barangay-App`
7. `OrbitOrg`
8. `OrbitStats`
9. `OrbitConnect`
10. `RemitCompare`
11. `BudgetFX`
12. `RateAlert`
13. `digital-barangay-backend`
14. `Bakers-Diary`
15. `HEALTHNOTE-by-KELBRICTECH`
16. `STAYVIA` — private
17. `STELLAR`
18. `SHALA`

## Known migration-sensitive items

### GitHub profile README

The current profile repository is `arjayb/arjayb`. After the account username becomes `kelbrictech`, the profile README repository must also be renamed to `kelbrictech` so the special profile repository becomes `kelbrictech/kelbrictech`.

Until that repository rename is completed, the repository content remains preserved, but it will no longer function as the automatic profile README.

### Repository URLs

GitHub normally redirects existing repository URLs after a username change, but all canonical links and local Git remotes should still be migrated from:

`https://github.com/arjayb/...`

to:

`https://github.com/kelbrictech/...`

Old profile links such as `https://github.com/arjayb` do not receive the same profile redirect guarantee and must be updated wherever published.

### GitHub Pages

Project-site URLs use the account namespace. Existing links using:

`https://arjayb.github.io/...`

must be treated as migration-sensitive and replaced with the new namespace or, preferably, a verified KELBRIC custom domain.

### Digital Barangay backend CORS

The backend currently accepts a single origin from `CORS_ORIGIN`. The GitHub Pages origin will change when the username changes. Before final cutover, the production Render environment must be updated so the new GitHub Pages origin is accepted.

Expected post-rename origin:

`https://kelbrictech.github.io`

The frontend API base URL itself is independent of the GitHub username and currently points to the Render backend.

### GitHub-provided noreply email / signatures

Any commits or signatures tied specifically to a username-based GitHub `noreply` address should be reviewed after the rename. Normal commit attribution using a verified account email should remain associated with the account.

### CODEOWNERS / @mentions / gists

Any `CODEOWNERS` references or `@arjayb` mentions must be changed manually. Gist URLs containing the old username do not receive the same redirect protection as repository URLs.

## Cutover order

1. Preserve repository state — **DONE**.
2. Audit hard-coded `arjayb` and `arjayb.github.io` references.
3. Confirm `kelbrictech` is available in GitHub's username-change screen.
4. Change account username to `kelbrictech`.
5. Rename profile repository from `arjayb` to `kelbrictech`.
6. Update profile README and repository links to the new canonical namespace.
7. Update GitHub Pages URLs / custom-domain configuration.
8. Update Render CORS for Digital Barangay and verify login/API workflows.
9. Update local Git remotes and any external portfolio links.
10. Run a post-transition verification of every repository and live deployment.

## Rollback principle

Do not delete the `pre-kelbric-transition-2026-08-29` branches during the transition. They are the recovery points for the account's repository contents before the KELBRIC cutover.
