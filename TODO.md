# TODO – Sintra Project Enhancements

## 🎯 Short‑Term (quick wins)
- [ ] **S1 – Add a proper `.gitignore`** (exclude `node_modules/`, `.env`, `.pi/`, `.sintracode/`, OS junk, etc.)
- [ ] **S2 – Document required environment variables** (OpenAI, NVIDIA keys) in README under a new *🔑 API Keys* section.
- [ ] **S3 – Provide an `.env.example`** file with placeholder keys.
- [ ] **S4 – Add npm scripts** (`start`, `print`, `lint`, `test`, `prepublish`) to `package.json`.
- [ ] **S5 – Add a minimal test suite** (Jest/Mocha) that checks the wrapper exits with code 0 and prints the banner.
- [ ] **S6 – Add a `pre‑commit` hook** (via `husky` or `lefthook`) to run lint and tests before committing.
- [ ] **S7 – Add a GitHub Actions CI workflow** (`.github/workflows/ci.yml`) that runs lint, tests, and a secret‑leak check.
- [ ] **S8 – Add a short “Getting Started” demo GIF/video** linked from the README.
- [ ] **S9 – Make the banner configurable** (read from `banner.json`); add fallback default.
- [ ] **S10 – Add a `CHANGELOG.md`** following Keep a Changelog format.

## 🛠️ Medium‑Term (robustness & ergonomics)
- [ ] **M1 – Typed config validation** (using `zod` or `ajv`) for `.pi/settings.json`.
- [ ] **M2 – Add a `--alias` flag** to let users set a custom command name at runtime.
- [ ] **M3 – Add a `--no-banner` flag** (or `PI_NO_BANNER` env var) for CI pipelines.
- [ ] **M4 – Implement automated version bump & release** (`semantic-release` or `standard-version`).
- [ ] **M5 – Add an `examples/` folder** with small demo scripts and its own README.
- [ ] **M6 – Support optional `--context-dir <path>`** to enable context files when desired.
- [ ] **M7 – Add automated security scanning** (`npm audit`, Dependabot alerts).
- [ ] **M8 – Add a `CONTRIBUTING.md`** with style guides, commit message format, and PR process.
- [ ] **M9 – Add ESLint + Prettier config** for consistent code style across the project.
- [ ] **M10 – Add cross‑platform wrapper** (`run-sintracode.js`) for Windows without WSL.

## 🚀 Long‑Term (strategic / community building)
- [ ] **L1 – Publish the wrapper as an npm package** (`sintracode-cli`) with a bin entry.
- [ ] **L2 – Create a “Skill Marketplace”** – script to install community‑contributed skills from a remote repo.
- [ ] **L3 – Build a web‑based demo** (GitHub Pages) that runs the Pi UI in the browser.
- [ ] **L4 – Implement “profile snapshots”** – command to export/import memory + settings for reproducible sessions.
- [ ] **L5 – Add multi‑model routing** based on cost/latency via a `models.yaml` file.
- [ ] **L6 – Develop a VS Code extension** that communicates with the local Sintra instance for in‑line suggestions.
- [ ] **L7 – Add optional telemetry (opt‑in)** for anonymous usage stats.
- [ ] **L8 – Create a starter‑kit repo template** that includes a typical project layout with Sintra pre‑wired.

---
*Feel free to reorder, combine, or remove items based on your priorities. Each checkbox can be linked to a GitHub issue later for tracking.*
