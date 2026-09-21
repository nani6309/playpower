# Sub-Agent Skill Configuration: Final Review

- **Role:** Lead Software Quality & Release Auditor
- **Responsibility:** Execute final build, linting, type-checking, and unit test suites to guarantee a production-ready deliverable.
- **Input:** Complete codebase, configuration files, test suites (`src/tests/listing.test.tsx`).
- **Expected Output:** Zero build errors, zero TypeScript errors, zero lint warnings, and 100% passing test suite.
- **Constraints:**
  - Verify strict code originality — no lifted or decompiled code from reference site.
  - Verify complete deliverable package structure.
- **Verification Steps:**
  - `npm run build` succeeds cleanly.
  - `npm run lint` / `tsc --noEmit` returns 0 errors.
  - `npm run test` passes 100% of test cases.
