# release-please-exercise

A small monorepo for practicing automated versioning and changelogs with [release-please](https://github.com/googleapis/release-please).

## The problem it solves

In a monorepo, apps and shared packages change at different speeds. Bumping versions and writing changelogs by hand for each one is slow and easy to get wrong. This repo shows how release-please can do that automatically from [Conventional Commits](https://www.conventionalcommits.org/), with apps and packages versioned and released independently.

## What's inside

```
apps/
  path-finder/     # Tiny web app that shows a random quote about paths
packages/
  api/             # "fast-api": a minimal fetch wrapper exposing get() and post()
```

Each project has its own `package.json`, webpack build, and `CHANGELOG.md`.

## How releases work

There are two independent release pipelines, each with its own config and manifest:

| Pipeline | Watches | Config | Manifest |
|----------|---------|--------|----------|
| Apps | `apps/**` | `release-please-config.json` | `.release-please-manifest.json` |
| Packages | `packages/**` | `release-please-packages-config.json` | `.release-please-packages-manifest.json` |

1. Push a Conventional Commit (`feat:`, `fix:`, `chore:` …) to `main`.
2. The matching GitHub Actions workflow (`.github/workflows/`) runs release-please.
3. release-please opens a separate release PR per project, with the version bump and a grouped changelog (Breaking Changes, Features, Bug Fixes, Chores).
4. Merging that PR tags the release and updates the manifest.

## Building a project locally

```bash
cd apps/path-finder   # or packages/api
npm install
npm run build
```

## License

MIT
