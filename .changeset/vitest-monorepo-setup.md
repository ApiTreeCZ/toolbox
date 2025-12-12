---
'@apitree.cz/eslint-config': patch
'@apitree.cz/testing-library': patch
'@apitree.cz/vitest-config': patch
---

feat: implement Vitest monorepo setup with project-based configuration

- Added root vitest.config.ts with Vitest Projects support
- Converted package-level vitest.config.ts to vitest.config.js using defineProject
- Updated ESLint config to recognize vitest.config.js (previously .ts)
- Moved vitest dependencies to root (vitest, @vitest/coverage-v8, @vitest/ui)
- Made @vitest/coverage-v8 an optional peer dependency in vitest-config
- Removed internal test suite from eslint-config package
- Updated root lint and format scripts to include .ts files
- Added test:ui script for interactive Vitest UI
