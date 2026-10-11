// Course 06 — Code You Never Write (20 questions)
export default [
  {
    id: "CN-01",
    course: 6,
    topic: "The new deal",
    type: "single",
    scenario:
      "For years a school office compared fee collections by hand: an evening of hunting through two files. This month a staff member described the job in plain language, and the assistant wrote a program, ran it, produced the report, and fixed a formatting glitch by itself.",
    question: "What is the correct description of what changed?",
    options: [
      "Staff learned to program during the month.",
      "AI writes working code for small, well-described problems, runs it in its own sandbox and repairs it from error messages; the client supplies the problem, not the syntax.",
      "The school bought spreadsheet software that solves this automatically.",
      "The task was automated because the files happened to be identical."
    ],
    answer: [1],
    explanation:
      "The new deal: AI is the developer, you are the client, and the developer works in seconds, for free, and never tires of revisions. The updated question is not do I know how to do this, but can I describe what done looks like."
  },
  {
    id: "CN-02",
    course: 6,
    topic: "VPRF signals",
    type: "single",
    scenario:
      "A registrar has four tasks: draft a rejection letter to a supplier, add up 2,000 rows of sales and break the total down by month, decide whether a business idea is sound, and rename 300 photos using the date inside each one.",
    question: "Which tasks are code problems, and which signals fire?",
    options: [
      "All four are code problems.",
      "The sales total is Volume and Precision, and the rename is Repetition and Files; the letter and the idea judgment are answer problems where code would waste the tool.",
      "Only the business idea is a code problem, since it involves risk.",
      "The rejection letter is a code problem because it mentions money."
    ],
    answer: [1],
    explanation:
      "Four signals, any one of which marks a code problem: Volume, Precision, Repetition, Files. The sales rollup fires Volume and Precision; the rename fires Repetition and Files. Drafting and judgment are answer problems and code there just burns the tool."
  },
  {
    id: "CN-03",
    course: 6,
    topic: "The trap",
    type: "single",
    scenario:
      "A financial aid officer asks the assistant: look at this fee spreadsheet and tell me which families are behind on payments. The reply confidently lists eight families and their amounts, with no code shown and no row counts.",
    question: "What should the officer conclude?",
    options: [
      "The list is reliable because the amounts look specific.",
      "Precision fired: the answer is an opinion about the data rather than an analysis of it, and the correct move is to demand computation, code shown, and row counts before trusting any name on the list.",
      "The task was an answer problem all along.",
      "The assistant must be malfunctioning and support should be contacted."
    ],
    answer: [1],
    explanation:
      "Problems that look like answer problems can fire Precision. A reply about your data with no code block, no row counts, and no here-is-what-I-computed is an opinion about the data. Never leave the compute-or-estimate decision to the assistant on anything precision-critical."
  },
  {
    id: "CN-04",
    course: 6,
    topic: "Forcing computation",
    type: "multi",
    scenario:
      "A campaign analyst is about to ask for exact open and click rates across two years of exports.",
    question: "Which TWO lines should be in the first message? (Select TWO.)",
    options: [
      "Write and run code to answer this, and show me the code you ran.",
      "Before analysing anything, tell me the exact row count, the column names, and the date range of the file.",
      "Estimate the rates first, then verify with code if the numbers seem off.",
      "Round all figures to whole numbers so results are easier to read."
    ],
    answer: [0, 1],
    explanation:
      "The three pin-above-your-desk lines: write and run code, show me the code you ran, and give me row count, column names and date range before anything else. Line one forces computation, line three verifies the assistant is actually looking at the right data."
  },
  {
    id: "CN-05",
    course: 6,
    topic: "Code brief",
    type: "single",
    scenario:
      "A teacher's brief contains: Goal (find who has not submitted), Input (two CSV files, about 180 students), Output (list plus count plus a one-line summary), Rules (match names with variant spacing and capitalisation; duplicate submissions count once), Edge cases (submissions with names matching nobody; unreadable rows listed at the end).",
    question: "Why is this a strong code brief?",
    options: [
      "It names the programming language and libraries to use.",
      "It answers the five questions in plain language with no technical terms, putting her professional knowledge into Rules and pre-deciding imperfect data in Edge cases.",
      "It is long, and length is what makes briefs work.",
      "It avoids mentioning the input files so the assistant must search for them."
    ],
    answer: [1],
    explanation:
      "The best code briefs contain no technical language. Rules is where professional knowledge lives, the constraints a stranger would never know. Edge cases is where you decide, in advance, what imperfect data should do. The assistant picks the language; the client supplies the problem."
  },
  {
    id: "CN-06",
    course: 6,
    topic: "Edge cases",
    type: "single",
    scenario:
      "An analyst does not know whether a delivery file contains duplicate rows, currency symbols, blank dates, or inconsistent capitalisation, and so writes no edge-case section at all.",
    question: "What is the recommended move?",
    options: [
      "Skip edge cases; the assistant will infer sensible handling silently.",
      "Ask the assistant to inspect and report the actual irregularities in the data first, then decide the rules together and write them into the brief.",
      "Copy the edge cases from a public spreadsheet template.",
      "Delete any irregular rows before sending the file."
    ],
    answer: [1],
    explanation:
      "You often will not know what is hiding in your data. The move is an inspection pass that surfaces the irregularities, followed by explicit decisions: skip and list, count once, treat as plain number. The decisions belong in the brief so every subsequent run is consistent."
  },
  {
    id: "CN-07",
    course: 6,
    topic: "Verification order",
    type: "single",
    scenario:
      "A reconciliation script will run every month on amounts where errors are costly. Before trusting it, the owner wants the strongest practical check and plans to spend effort in the right order.",
    question: "Which order matches the course's five checks?",
    options: [
      "Cross-model check first, then known-answer, then everything else.",
      "Known-answer test first, then reality questions, a plain-English replay, an adversarial pass, and finally a cross-model check for the highest-stakes work.",
      "Adversarial pass first so problems are found early, other checks optional.",
      "All five checks are equal and can be run in any order."
    ],
    answer: [1],
    explanation:
      "Checks rise in effort: known-answer test (run on a month you already closed by hand), reality questions (rows in versus rows out), plain-English replay (the assistant describes its own procedure in words), adversarial pass (attack your own analysis), cross-model check (same brief in a second company's tool). The known-answer test is the everyday one that is never skipped."
  },
  {
    id: "CN-08",
    course: 6,
    topic: "The one check never skipped",
    type: "single",
    scenario:
      "A clinic manager has a new script computing insurance write-offs. She has used it on real data successfully twice, and its totals look plausible. She is on a deadline and considers skipping the test on a closed month because the script has always worked.",
    question: "What is the rule here, and why?",
    options: [
      "Deadlines justify skipping tests once a script has a track record.",
      "Never act on a precision-critical number you have not tested against one answer you independently know; code is exact, including exactly wrong.",
      "Plausibility is a stronger check than a known answer.",
      "Only medical scripts need the test; financial ones are exempt."
    ],
    answer: [1],
    explanation:
      "Any check may be skipped except one: the known-answer test against an independently known result. A month you closed by hand is the reference. Exact code can be exactly wrong, and plausibility is exactly what hides the failure."
  },
  {
    id: "CN-09",
    course: 6,
    topic: "Reality questions",
    type: "single",
    scenario:
      "A report claims to cover all 2025 transactions, but the source export contained 1,400 rows and the report's appendix shows 1,381 rows processed, with 19 unlisted.",
    question: "Which check is this, and what is the right action?",
    options: [
      "A cosmetic issue; 19 rows rarely matter.",
      "Reality questions: 1,400 went in and 1,381 were processed, so the missing 19 must be explained and listed before the numbers are used.",
      "A known-answer test on a single month would substitute for this gap.",
      "The appendix should be removed so the discrepancy is not distracting."
    ],
    answer: [1],
    explanation:
      "Reality questions are questions you put to the output using what you already know: rows in versus rows out, totals against business sense, date ranges against the intended period. An unexplained gap is where silent data loss hides."
  },
  {
    id: "CN-10",
    course: 6,
    topic: "Plain-English replay",
    type: "single",
    scenario:
      "The auditor cannot read Python, but wants to know whether a script's matching logic is right. She asks: explain step by step in plain English what this code does, as if to a colleague who will check the logic but cannot read code, including what it does with blank rows and duplicates.",
    question: "What does this check enable?",
    options: [
      "It converts the code into a legal document.",
      "It lets a domain expert audit the procedure, the rules actually applied, in language they can judge, even while the syntax stays unreadable.",
      "It replaces the need for a known-answer test.",
      "It reveals the model's hidden chain of thought as a certified transcript."
    ],
    answer: [1],
    explanation:
      "You cannot check syntax you do not know, but you can check a procedure: matched on what, treated how, skipped which rows and why. If the procedure is wrong, the code is wrong no matter how tidy it looks. Treat the explanation as a reviewable account, not a record of hidden internal reasoning."
  },
  {
    id: "CN-11",
    course: 6,
    topic: "Adversarial pass and cross-checks",
    type: "single",
    scenario:
      "Before a redundancy analysis goes to HR, the analyst adds: find any way this analysis could be wrong or misleading, then run the same brief and data in a different company's assistant and compare the numbers.",
    question: "Which two checks are being combined here?",
    options: [
      "A rubric grade and a form feed.",
      "An adversarial pass, asking the assistant to attack its own work, and a cross-model check, comparing independent toolling on the same brief.",
      "A known-answer test and a reality question.",
      "A style review and a spell check."
    ],
    answer: [1],
    explanation:
      "The adversarial pass descends directly from the prompting course's rubric habit: force the model to hunt for how the result could be wrong. The cross-model check uses a second family as an independent instrument. Together they are the top of the verification ladder, appropriate for consequential work."
  },
  {
    id: "CN-12",
    course: 6,
    topic: "Errors as dialogue",
    type: "single",
    scenario:
      "A script crashes and produces a page of red error text mentioning a codec. The office manager understands none of it.",
    question: "What is the entire skill for red-text errors?",
    options: [
      "Retype the data and hope the error disappears.",
      "Paste the full error text and ask: it stopped and showed this error, diagnose it, fix the code and run it again; you do not need to interpret the message.",
      "Search the error text in a general search engine and edit the script by hand.",
      "Conclude that this class of task is beyond AI and revert to manual work."
    ],
    answer: [1],
    explanation:
      "Errors are dialogue, not failure. The whole skill: paste the red text, all of it, and let the assistant diagnose and repair. Non-interpretation is a feature; professionals routinely paste errors they cannot decode."
  },
  {
    id: "CN-13",
    course: 6,
    topic: "Wrong but running",
    type: "single",
    scenario:
      "A monthly report ran with no error, but total sales show 4.2 million while the business knows the year was around 12 million.",
    question: "Why is this harder than a crash, and what is the right message?",
    options: [
      "It is easier, because there is no error text to handle.",
      "Nothing failed visibly, so you must report the symptom with the expected value and ask for inspection before repair: show the row count processed, the date range found, and the first five rows as the code sees them.",
      "The correct response is to rerun the same request; the second run usually corrects itself.",
      "The business knowledge is probably wrong; keep the 4.2 million figure."
    ],
    answer: [1],
    explanation:
      "Wrong-but-running is the harder case: no red text, just a number that contradicts what you know. The message pattern is symptom, expected value, inspect before fixing. Three breakdown patterns cover nearly every case: parse or mismatch, silently wrong filters or shape, and a misread meaning of the data."
  },
  {
    id: "CN-14",
    course: 6,
    topic: "Keep the script",
    type: "single",
    scenario:
      "A teacher built a submission-checking brief in March and now the same job returns monthly. She wants the effort to compound.",
    question: "Which set of habits turns the one-time solution into a reusable tool?",
    options: [
      "Delete the chat each month and rebuild the prompt from memory.",
      "Ask for the script as a downloadable file, keep the brief next to it, and give the pair a home in one folder with a known-answer sample, so each month is a rerun rather than a rebuild.",
      "Save only the final report and let the assistant re-invent the method monthly.",
      "Convert the script into a screenshot so it cannot be misused."
    ],
    answer: [1],
    explanation:
      "Repetition's payoff: a script written once is something you own forever. The folder holds brief (what and why), script (the how for machines), and a known-answer sample input. Reruns become a sentence: run this on this month's files."
  },
  {
    id: "CN-15",
    course: 6,
    topic: "Five surfaces",
    type: "single",
    scenario:
      "A lab's monthly reconciliation now involves twelve exported CSVs sitting on a shared office drive. The analyst keeps uploading them one by one into a chat window each month, which is becoming the most annoying part of her week.",
    question: "Which surface does this signal point to, and why?",
    options: [
      "Stay in the browser chat forever; browsers are always the safest option and annoyance is irrelevant.",
      "The annoyance is the graduation signal: a terminal agent inside the folder reads the files in place, with no uploads, and can save a reusable script that stays in the folder.",
      "Move to a desktop app so files never need to be seen again by anyone.",
      "Switch to image generation, which avoids file handling."
    ],
    answer: [1],
    explanation:
      "The chat sandbox is a workshop you visit, not where your files live. When the problem becomes about your computer, its folders and its routines, the terminal motion fits: the agent sits inside the folder, reads files directly, and saves durable scripts."
  },
  {
    id: "CN-16",
    course: 6,
    topic: "Blast radius",
    type: "single",
    scenario:
      "A manager is about to have an agent clean and rename 400 files in a folder, including some that will be overwritten if the run goes wrong.",
    question: "Which sentence set implements the four blast-radius rules?",
    options: [
      "Run quickly and tell me afterwards what changed.",
      "First copy the folder to a backup, show me your plan of operations before changing anything and wait for approval, write all output to new files, and never modify the originals; point the agent at the smallest folder that contains the problem.",
      "Give the agent whole-drive access so it never gets stuck on permissions.",
      "Let the agent decide which files are duplicates and delete them immediately."
    ],
    answer: [1],
    explanation:
      "Four rules shrink the blast radius: work on copies until a script earns trust, see changes before they happen as a dry run, point the agent at the smallest folder, and write output to new files. Three sentences per brief and about ninety seconds per run removes nearly all file-based risk."
  },
  {
    id: "CN-17",
    course: 6,
    topic: "Dry runs",
    type: "single",
    scenario:
      "A photographer asks an agent to rename a set of report PDFs into numbered files in date order. Before doing anything, the agent shows a list pairing every old name with its new name, then stops and waits.",
    question: "Which practice is this, and what does the waiting accomplish?",
    options: [
      "A known-answer test; the list proves the arithmetic.",
      "A dry run: every change is listed before any change is made, so the human approves or edits the operations while nothing has been touched.",
      "A cross-model check performed internally.",
      "A sanity check that is optional once trust exists."
    ],
    answer: [1],
    explanation:
      "A dry run lists every change the code would make before it makes any. The waiting is the safety mechanism: the rename you do not want gets caught at plan time, not discovered afterwards in a folder with no undo."
  },
  {
    id: "CN-18",
    course: 6,
    topic: "Edge of the map",
    type: "multi",
    scenario:
      "A startup wants AI to build three things: a monthly internal reconciliation, a customer-facing portal where hundreds of users log in and pay, and an automatic weekly email that goes to clients with no one watching.",
    question: "Which TWO are beyond one-prompt code and need the rest of the engineering path? (Select TWO.)",
    options: [
      "The customer-facing portal with accounts, payments, and many users at once.",
      "The always-on weekly client email running unattended with real consequences.",
      "The monthly internal reconciliation.",
      "None of them; every task is inside the one-prompt map."
    ],
    answer: [0, 1],
    explanation:
      "Inside the territory: every reconciliation, rollup, rename, merge, clean, cross-check, chart and report that fires the four signals. Across the edge: multi-user software other people log into, always-on automation with real consequences, no-undo actions like mass sends or filings, and judgment wearing a computation costume."
  },
  {
    id: "CN-19",
    course: 6,
    topic: "Judgment vs computation",
    type: "single",
    scenario:
      "A request arrives: compute which employees to promote this quarter. The arithmetic parts are trivial; the interesting part is the promotion criteria and the fairness of any ranking.",
    question: "How should this be treated?",
    options: [
      "As pure code work, because it involves counting.",
      "As judgment wearing a computation costume: the code can handle data work, but the criteria and the fairness of ranking are the whole decision, and they stay with accountable humans.",
      "As an answer problem suitable for a casual chat reply.",
      "As a template task that any model can settle from training data."
    ],
    answer: [1],
    explanation:
      "The arithmetic is easy; the criteria are the whole decision. Promotion criteria are judgment, fairness and accountability territory. Computation can inform the decision; it cannot own it. This is one of the explicit edge cases across the map's border."
  },
  {
    id: "CN-20",
    course: 6,
    topic: "Client mindset",
    type: "single",
    scenario:
      "A legal office hires a contractor to build a small reconciliation tool. The lawyer never reads the contractor's source code; she checks results against a closed month, samples the categories, and asks the contractor to explain the procedure in plain words.",
    question: "Which lesson from the course does this workplace behaviour mirror?",
    options: [
      "That lawyers should always learn to program before delegating.",
      "That verifying work you cannot read is normal professional practice: check an expert whose craft you cannot follow by checking their results against what you already know.",
      "That explaining a procedure is a replacement for testing outputs.",
      "That only in-house staff can be trusted with data work."
    ],
    answer: [1],
    explanation:
      "The client identity: you are the client, not the contractor. Trust for work you cannot see comes from testing results against things you independently know, asking for plain-language procedure accounts, and building a track record. You may look at the code; you are never required to."
  }
];
