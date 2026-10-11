# Panaversity Foundations — Scenario Question Bank (React app)

224 exam-style scenario questions (4 analysed sample questions + 220 new ones) built from the ten
AI Agent Factory **Foundations** crash courses. Every question carries a worked reason for the
answer, written against the course content.

## What is inside

| Section | Course | Questions | ID prefix |
|---|---|---|---|
| Sample set | the four uploaded exam questions (worked reasoning added) | 4 | SS-* |
| 1 | Just Delegate It | 24 | JD-* |
| 2 | What AI Actually Is | 22 | WA-* |
| 3 | AI Fluency | 20 | AF-* |
| 4 | AI Prompting in 2026 | 26 | PR-* |
| 5 | Markdown In, HTML Out | 22 | MH-* |
| 6 | Code You Never Write | 20 | CN-* |
| 7 | Skills & Connectors | 20 | SC-* |
| 8 | How to Think in the AI Era | 22 | TH-* |
| 9 | Workflow Design & Diagnosis | 22 | WD-* |
| 10 | Governance, Risk & Responsible Use | 22 | GV-* |
| | **Total** | **224** | |

Format mix: 207 single-answer ("Which one…") + 17 "Select TWO" multi-answer. Every question has
exactly four options, one memo-style business scenario, and an explanation that names the course
concept the answer rests on.

## Run it

```bash
cd quiz-app
npm install
npm run dev      # http://localhost:5173  (dev server, hot reload)
npm run build    # writes a single self-contained file: dist/index.html
```

`npm run build` uses `vite-plugin-singlefile`, so `dist/index.html` is one file with the whole
app (React, styles, all 224 questions) inlined. It runs offline by double-clicking it — no server,
no network. A ready copy sits at the workspace root as `Foundations-200-Questions.html`.

## App features

- **Graded exam** — random mix, 10 / 25 / 50 / all; live score; progress bar; results page with a
  pass-style percentage, per-section breakdown, and a "review the misses" list.
- **Practice by section** — drill one course at a time (chip per course, with counts).
- **Answer key** — browse every question with the correct options highlighted and the reason shown,
  filtered by section or all at once.
- After each submit: correct/incorrect marking, the correct answer(s) spelled out, and a
  **Why:** paragraph grounded in the course material.

## Files

| Path | Purpose |
|---|---|
| `src/data/samples.js` | the 4 uploaded exam questions, with worked reasoning |
| `src/data/c01.js` … `c10.js` | the question bank, one file per course |
| `src/data/index.js` | aggregates the arrays, exports course metadata for the filters |
| `src/App.jsx`, `src/styles.css` | the whole UI (English) |
| `make_csv.mjs` | regenerates `../Foundations-Question-Bank.csv` (print/offline review) |

Question schema:

```js
{
  id: "GV-07",
  course: 10,
  topic: "Approval gate: who, what, when",
  type: "single" | "multi",
  scenario: "The business situation, memo style.",
  question: "Which one ... ? (multi questions end with '(Select TWO.)')",
  options: ["...", "...", "...", "..."],
  answer: [1],            // indices into options (two indices for multi)
  explanation: "Why the keyed answer is right and the others are wrong, per the course content."
}
```
