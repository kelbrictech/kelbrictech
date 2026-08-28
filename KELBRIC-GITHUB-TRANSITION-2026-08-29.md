# KELBRIC Technologies — GitHub Transition Safeguard Log

**Transition:** `arjayb` → `kelbrictech`  
**Date:** 2026-08-29  
**Status:** Reverse-prep / pre-rename protection phase

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

## Reverse-prep completed before GitHub rename

### Digital Barangay / Render CORS compatibility — DONE

The backend was changed to support a comma-separated allowlist in `CORS_ORIGIN` instead of a single origin.

The production Render service is now configured to accept both:

- `https://arjayb.github.io`
- `https://kelbrictech.github.io`

This preserves the current production frontend while pre-authorizing the future KELBRIC GitHub Pages origin.

Production Render deploy completed successfully after the compatibility change.

### Neon — NO MIGRATION REQUIRED

The DigitalBarangay Neon project and production branch are independent of the GitHub username. Database URLs, schema, data, and project identity are not being changed for this transition.

### Cloudinary — NO MIGRATION REQUIRED

Cloudinary account resources and delivery/API credentials are independent of the GitHub username. No asset migration or credential rotation is required for the handle change.

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

### Render repository sources

Current Render services reference GitHub repository URLs under `https://github.com/arjayb/...`. These cannot be switched to `kelbrictech` before the new namespace exists. After the GitHub username change, every Render auto-deploy source will be verified and canonicalized where the platform permits it.

### GitHub-provided noreply email / signatures

Any commits or signatures tied specifically to a username-based GitHub `noreply` address should be reviewed after the rename. Normal commit attribution using a verified account email should remain associated with the account.

### CODEOWNERS / @mentions / gists

Any `CODEOWNERS` references or `@arjayb` mentions must be changed manually. Gist URLs containing the old username do not receive the same redirect protection as repository URLs.

## Reverse-first cutover order

1. Preserve repository state — **DONE**.
2. Pre-authorize future GitHub Pages origin on Render — **DONE**.
3. Confirm Neon and Cloudinary do not require migration — **DONE**.
4. Audit hard-coded `arjayb` and `arjayb.github.io` references.
5. Confirm `kelbrictech` is available in GitHub's username-change screen.
6. Change account username to `kelbrictech`.
7. Rename profile repository from `arjayb` to `kelbrictech`.
8. Update profile README and repository links to the new canonical namespace.
9. Verify GitHub Pages under the new namespace.
10. Verify every Render repository source and auto-deploy after the rename.
11. Update local Git remotes and external portfolio links.
12. Remove the old `arjayb.github.io` CORS origin only after final verification.

## Rollback principle

Do not delete the `pre-kelbric-transition-2026-08-29` branches during the transition. They are the recovery points for the account's repository contents before the KELBRIC cutover.
