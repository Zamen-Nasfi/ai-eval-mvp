# AI Evidence Auditor — MVP

Evidence-first claim-by-claim analyzer. The current MVP intentionally does **not** pretend to perform web verification. It extracts claims locally, classifies them heuristically, accepts user-supplied evidence, and returns `Unverified` when evidence is insufficient.

## Current boundary
- No LLM output is treated as ground truth.
- No sources or URLs are invented.
- Original answer is preserved.
- Evidence-Limited Mode is explicit.
- The demo contradiction test is intentionally deterministic and limited; it is not a general fact-checker.

## Run
`npm install` then `npm run dev`.

The dependency install could not be completed in the current sandbox because npm remained network-bound beyond the available execution window; therefore a live Next.js browser run was not claimed.
