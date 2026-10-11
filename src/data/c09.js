// Course 09 — Workflow Design & Diagnosis (22 questions)
export default [
  {
    id: "WD-01",
    course: 9,
    topic: "Unit of value",
    type: "single",
    scenario:
      "Two teams adopt the same assistant for contract review. Team A maps the work: AI extracts clauses, flags departures from the playbook, and drafts the redline. Team B points the assistant at the whole process and asks it to handle contract review.",
    question: "Which statement explains the different outcomes?",
    options: [
      "Team B used a worse model.",
      "The unit of value is the step, not the session: Team A designed the work step by step with owners, while Team B left the middle undefined.",
      "Team A had more staff available.",
      "Contract review cannot be delegated at all."
    ],
    answer: [1],
    explanation:
      "I use AI is a personal habit; our workflow uses AI grows in value. A step is one named piece of the workflow with one owner. The redesigned workflow that fails almost always fails because the middle was never designed, not because the tool was weak."
  },
  {
    id: "WD-02",
    course: 9,
    topic: "Task definition",
    type: "single",
    scenario:
      "A marketing director gives a colleague the brief as it arrived: the new site needs to tell our story better, faster. The colleague turns it into five settled answers: a monthly content report for the executive team, from the CMS and campaign exports, as a two-page brief with a trend chart.",
    question: "What did the colleague produce?",
    options: [
      "A scope creep warning.",
      "A task definition: the business need translated into what is produced, for whom, how often, from what data, and in what format.",
      "An out-of-scope list.",
      "A delegation map with owners."
    ],
    answer: [1],
    explanation:
      "A task definition settles five slots. Asked to define a task, a model will define one, and the slots you never specify close at likely-looking defaults, which is why the human does this translation first, and why ambiguous requirements get attacked before any work starts."
  },
  {
    id: "WD-03",
    course: 9,
    topic: "Requirements attack",
    type: "single",
    scenario:
      "An assistant returns a requirements list extracted from a large tender document. Each item carries a short label, the exact section it came from, and whether it is answered or open.",
    question: "Which follow-up matches the course's next move?",
    options: [
      "Approve the list and begin drafting immediately.",
      "Attack the list: which requirements are ambiguous as written, which could two team members read differently, and which imply requirements the document states only indirectly; the source column is what lets someone who was not in the room check the work.",
      "Rewrite the list in prose so it reads smoothly.",
      "Ask a second model to write its own tender from scratch."
    ],
    answer: [1],
    explanation:
      "Checking moves forward, from output review to requirements review, where it is far cheaper. The source column makes the list checkable by others. An ambiguous requirement does not look ambiguous; the test is whether you can write a check for it."
  },
  {
    id: "WD-04",
    course: 9,
    topic: "Compute, never write",
    type: "single",
    scenario:
      "An operations lead asks for the headcount needed next quarter to hold current resolution times. The first reply writes the recommendation directly, with growth percentages scattered in the prose.",
    question: "How should the request be restructured?",
    options: [
      "Ask for the same answer in bullet points.",
      "Have the numbers produced by computation on the attached ticket data first, with growth rates computed and shown, then have the recommendation built from those figures: if a result matters, compute it, never write it.",
      "Ask for two versions and pick the more confident one.",
      "Remove the percentages so nothing can be wrong."
    ],
    answer: [1],
    explanation:
      "Planning mixes synthesis and calculation, and they behave differently. The rule is about consequence, not ability: numbers a decision rests on are produced by running code, then the recommendation is layered on top of computed figures in that order."
  },
  {
    id: "WD-05",
    course: 9,
    topic: "Window test",
    type: "single",
    scenario:
      "A team asks AI to write a condolence note to a long-standing client, and separately to draft a capacity plan. For the note, the key input is a ten-year relationship and the family's recent history; for the plan, all the relevant data is in the attached spreadsheets.",
    question: "Which step is human-retained by the window test, and why?",
    options: [
      "The capacity plan, because spreadsheets are risky.",
      "The condolence note: the window test asks whether everything the step needs can be put in front of the model, and this step runs on information you cannot or should not supply.",
      "Both should be delegated to save time.",
      "Neither can be done without a connector."
    ],
    answer: [1],
    explanation:
      "The window test: could I put everything this step needs into the context? If not, the step is mine. This also catches work people call needing a human touch. In the capacity plan, everything fits, so it is a synthesis step; it still has to pass the ownership criteria next."
  },
  {
    id: "WD-06",
    course: 9,
    topic: "Research split",
    type: "single",
    scenario:
      "A team asks for a research report covering both the historical development of a fuel standard, which documents explain fully, and the standard's current enforcement status, which changes monthly.",
    question: "How should this be split, and with what instruction?",
    options: [
      "One request for both; the assistant will choose sensibly.",
      "Split it: the historical part from documents already held, and the current part through search with a source that can be opened, never a confident answer, for anything current.",
      "Skip the current part; enforcement status is not research.",
      "Do both parts from pretrained knowledge for consistency."
    ],
    answer: [1],
    explanation:
      "A model's knowledge stops at a date, so research questions are split: what documents settle, versus what needs current sources. The research rule mirrors the whole course: for anything current, ask for a source you can open, never a confident answer."
  },
  {
    id: "WD-07",
    course: 9,
    topic: "Three criteria",
    type: "single",
    scenario:
      "A team is classifying each step of a payroll-adjustment workflow. For one step, the assistant proposes handing it to AI because in a test run the assistant performed the step well.",
    question: "Is that a valid reason for ownership?",
    options: [
      "Yes; excellent test performance is the main criterion for AI ownership.",
      "No: ownership is decided by exactly three criteria, reversibility, stakes and accountability; how well AI performed in a test is not one of them.",
      "Yes, provided the step is not too long.",
      "No, because test runs are always unreliable."
    ],
    answer: [1],
    explanation:
      "Three questions decide ownership. Usually one criterion decides the step and the others agree; where they disagree, the strictest wins. Performance in a trial is not a criterion, and these are questions, not a score you add up."
  },
  {
    id: "WD-08",
    course: 9,
    topic: "Ownership: reversibility",
    type: "single",
    scenario:
      "A workflow step posts a payment to a supplier account. Undoing it requires bank calls and costs trust. Every other part of the step is mechanical and well described.",
    question: "Which criterion decides this step, and what ownership follows?",
    options: [
      "Stakes, because money is involved; the step goes to AI with review.",
      "Reversibility: the payment cannot be undone cheaply, so the step cannot be handed to AI on the strength of being well described; it is human-retained or gated before execution.",
      "Accountability, because banks are accountable.",
      "Eligibility passes because the step is arithmetic."
    ],
    answer: [1],
    explanation:
      "Reversibility asks whether the step can be undone if AI gets it wrong. A hard-to-undo money movement is the canonical step that cannot be repaired by review after the fact, so it stays under a human gate no matter how mechanical it looks."
  },
  {
    id: "WD-09",
    course: 9,
    topic: "Ownership: stakes vs arithmetic",
    type: "single",
    scenario:
      "In contract review, one row computes penalty exposure. The arithmetic is simple: days late times daily rate. A mistake here can cost six figures at renewal.",
    question: "What is the correct classification logic?",
    options: [
      "Being arithmetic makes the step low-stakes, so AI owns it outright.",
      "Compute the number with code for accuracy, but keep the step gated: stakes, not the arithmetic difficulty, decides ownership, and high stakes push toward a collaborative or human-retained step.",
      "The step should be skipped because it is risky.",
      "A second model should own the step instead of a person."
    ],
    answer: [1],
    explanation:
      "The penalty-exposure row is the one people get wrong: being arithmetic does not make a step low-stakes. Computation can make the figure exact; stakes and accountability still decide who owns the step, which is why the strictest criterion wins where they disagree."
  },
  {
    id: "WD-10",
    course: 9,
    topic: "Collaborative steps",
    type: "single",
    scenario:
      "A study classifies a step as collaborative: AI produces the flagged departures, and a named reviewer judges them before anything moves onward. The next step consumes the reviewed flags and turns them into the client redline.",
    question: "Why is the collaborative classification sound here?",
    options: [
      "Because AI outperformed humans on the step in testing.",
      "Because the output is judged by a named person at the very next step, so a wrong flag surfaces as a wrong redline before it leaves; the review is real and timely.",
      "Because the step is too easy for a person to bother doing.",
      "Because collaborative steps never need verification."
    ],
    answer: [1],
    explanation:
      "Flagging departures from a written policy is AI-appropriate exactly because somebody reads the flags at the next row, where a wrong flag shows up as a wrong redline. AI can be doing real work, including the real legal writing of a redline draft, when the review gate is staffed and timely."
  },
  {
    id: "WD-11",
    course: 9,
    topic: "Over-delegation",
    type: "single",
    scenario:
      "A support workflow routes low-severity complaints straight to the send button with no review. Severity itself was assigned by the same automated system, which has been accurate so far. A disputed tone issue reaches a customer.",
    question: "What error does this design contain?",
    options: [
      "Halo delegation: the step was handed over because an earlier step went well.",
      "Over-delegation: AI was given more than the risk allows, and low severity sounds like a control while severity was set by the same system that skips review.",
      "An unstaffed gate: a reviewer was assigned but stopped reviewing.",
      "Mapping the tool instead of the work."
    ],
    answer: [1],
    explanation:
      "Over-delegation means giving AI more than the risk of the step permits. The stated reason, low severity only, is a control that is not one, because the same system set the severity. Drafting quality is evidence about the draft; it is not evidence about the decision."
  },
  {
    id: "WD-12",
    course: 9,
    topic: "Halo delegation",
    type: "single",
    scenario:
      "A complaint workflow hands AI the task of composing refund offers, with the justification: the summaries from the previous step have been accurate for months, so the assistant has earned the next step.",
    question: "Which mapping error is this?",
    options: [
      "Over-delegation, because refunds involve money.",
      "Halo delegation: the step was handed over because the previous step went well, not because this step's own reversibility, stakes and accountability were examined.",
      "An unstaffed gate, because the reviewer stopped reviewing.",
      "Expectation mismatch, because AI cannot write refund offers."
    ],
    answer: [1],
    explanation:
      "Halo delegation looks reasonable at the moment it happens: the neighbouring step is performing well. But ownership criteria apply per step. The check order matters: map the work with no tools in mind, classify each step on its own, then ask who reviews each collaborative step and when."
  },
  {
    id: "WD-13",
    course: 9,
    topic: "Unstaffed gate",
    type: "single",
    scenario:
      "A workflow says a team lead reviews every AI-drafted weekly summary before it goes out. In practice, the summaries look fine, and the lead approves them in single clicks between meetings, often without reading.",
    question: "What is this, and what is the correct treatment?",
    options: [
      "A well-running gate that has earned trust through performance.",
      "An unstaffed gate: the review still exists on paper but is no longer really done, which is dangerous because it produces no signal; the fix is to staff it, simplify it, or move the step to AI-appropriate with different controls.",
      "Over-delegation, because the lead still technically approves.",
      "A private habit of one employee, outside governance."
    ],
    answer: [1],
    explanation:
      "An unstaffed gate is a collaborative step whose review is no longer really done. It fails silently because nothing reports that the gate is decorative. The map review question two finds it: for every collaborative step, who reviewed it last week, and how long did they spend?"
  },
  {
    id: "WD-14",
    course: 9,
    topic: "Map ownership",
    type: "single",
    scenario:
      "A year-old workflow map has no listed owner. The team changed two steps, a threshold moved, and the review cadence for a collaborative step quietly halved. Nobody updates the map because everyone assumes someone else does.",
    question: "What do the two missing controls cost, and what restores them?",
    options: [
      "Nothing; maps are documentation, not controls.",
      "Accuracy: a map with no owner and no review date describes the workflow for about a quarter; restore a single named map owner and a scheduled read, quarterly as a default.",
      "Only the formatting of the map suffers.",
      "The team should stop using maps and rely on memory."
    ],
    answer: [1],
    explanation:
      "The map needs two things most maps lack: one named owner, not a team, and a review date. The review is four questions in about twenty minutes, and question two, who reviewed each collaborative step and for how long, finds the real problems."
  },
  {
    id: "WD-15",
    course: 9,
    topic: "Build loop",
    type: "single",
    scenario:
      "A team builds an internal dashboard with AI. Cycle 1 produces the working artifact. In cycle 2 they ask for a date-range filter and totals row and write a friendly prompt beginning please make sure the filters are accurate, and they do not verify the result closely. Cycle 3 adds colours and a print layout.",
    question: "Which cycle is the interesting failure, and why?",
    options: [
      "Cycle 1, because first attempts always fail.",
      "Cycle 2: it passed review because the output was smooth, formatted and confident, failing silently; the realistic failure in a build loop is the one that gets approved.",
      "Cycle 3, because polish changes break functions.",
      "None; iteration success rates are random."
    ],
    answer: [1],
    explanation:
      "The failing cycle in the middle fails with no noise, which is the point. Telling apart the cycle that is genuinely fine from the one that merely looks fine is the core skill, and part four of the course supplies the diagnostic procedure for exactly that."
  },
  {
    id: "WD-16",
    course: 9,
    topic: "Escalation signal",
    type: "single",
    scenario:
      "A prototype dashboard built with AI in a chat now feeds a leadership meeting every week; two other teams have started relying on it, and its author is afraid to change anything in case it breaks without warning.",
    question: "What does this signal require?",
    options: [
      "Nothing new; keep iterating the same artifact forever.",
      "Escalation: dependency is the signal that a tool has outgrown prompt-and-iterate, and moving it to a proper engineered build is a correct answer, not an admission of failure.",
      "Immediate removal of the dashboard until it is replaced.",
      "Doubling the prompt engineering effort to stabilise it in place."
    ],
    answer: [1],
    explanation:
      "Escalation signals: other people depending on the tool, output leaving the team, maintenance becoming invisible. A tool that people outside the loop now rely on should be re-homed into a maintainable build with a named owner, rather than carrying the whole dependency on one fragile chat artifact."
  },
  {
    id: "WD-17",
    course: 9,
    topic: "Diagnosis: timing",
    type: "single",
    scenario:
      "An analyst reports three bad outputs: one that was wrong from the very first message of a fresh session; one that got progressively vaguer over a two-hour session; and one that began failing three weeks after the setup had worked fine, with no code changes anywhere.",
    question: "Which causes do these timings suggest?",
    options: [
      "Wrong feature or model for all three.",
      "Under-specification first, context overload second, and stale configuration third: the timing of first appearance narrows the cause.",
      "Expectation mismatch first, stale configuration second, under-specification third.",
      "Timing is not informative; all causes look the same."
    ],
    answer: [1],
    explanation:
      "Timing tells you where to look first: wrong on the first response suggests the prompt never carried what the step needed; degrading as the session grows suggests context overload; it used to work and now does not points at stale configuration, where a saved instruction, file, or threshold has aged."
  },
  {
    id: "WD-18",
    course: 9,
    topic: "Diagnosis: repeatable error",
    type: "single",
    scenario:
      "A step keeps producing the same wrong kind of output: it keeps treating a percentage column as whole numbers, no matter how the prompt is rewritten. The step mixes exact percentage calculations with narrative text.",
    question: "Which cause class fits, and what does the confirmation look like?",
    options: [
      "Stale configuration; confirm by checking last quarter's thresholds.",
      "Wrong feature or model: the error is one repeatable kind, and the confirmation is checking whether the step needs computation run as code, or a different model tier for the task.",
      "Context overload; confirm by counting messages.",
      "Expectation mismatch; the tool cannot handle percentages at all."
    ],
    answer: [1],
    explanation:
      "A repeatable, same-kind error points at the wrong feature or model: perhaps a calculation that should run as code, or a task mismatched to the model tier. Each confirmation takes under a minute, and the diagnostic sequence then proceeds cheapest-first: prompt, session length, feature and model, configuration, then task fit."
  },
  {
    id: "WD-19",
    course: 9,
    topic: "Diagnostic sequence",
    type: "single",
    scenario:
      "Output quality drops on a recurring report. A junior colleague's instinct is to conclude the task is beyond AI and go back to manual work. Before doing that, the team's lead wants to run the standard sequence.",
    question: "Which order is correct?",
    options: [
      "Check configuration, then prompt, then the model, then session length.",
      "Re-read the prompt against its five parts, check the conversation length, check the feature and model, check that the configuration is current, and only then question whether the task is a fit at all; the expectation-mismatch step exists and is sometimes the right answer.",
      "Start by declaring an expectation mismatch; it saves time.",
      "Run all five checks simultaneously to save turns."
    ],
    answer: [1],
    explanation:
      "The diagnostic sequence runs cheapest first. The prompt re-read costs seconds and resolves the most common cause. Step five exists precisely because some tasks genuinely cannot do what was asked, like predicting next quarter's exact sales figure, and naming a real mismatch stops you tuning a prompt toward an output that was never available."
  },
  {
    id: "WD-20",
    course: 9,
    topic: "Fix placement",
    type: "single",
    scenario:
      "A team learns three lessons: figures must exclude cancelled orders (a recurring correction typed by hand monthly); a greeting must never use first names without checking seniority (a behavioural rule); and client edits must always be listed in a fixed order (a step sequence).",
    question: "Where does each fix belong?",
    options: [
      "All three belong in the chat, retyped as needed.",
      "The exclusion rule is a reference for the knowledge base, the greeting rule is a standing instruction for behaviour, and the fixed order is a procedure for a Skill; putting a fix in the wrong home is why improvements do not stick.",
      "All three belong in memory, since memory is automatic.",
      "All three belong in a spreadsheet on the share drive."
    ],
    answer: [1],
    explanation:
      "The test is short: rule, reference, or procedure? Rules go to standing instructions, changing behaviour inside the project. References go to the knowledge base, changing what is known. Procedures go to skills, changing how the work is done. Memory is per-user and best-effort; configuration is the shared home you can open and read."
  },
  {
    id: "WD-21",
    course: 9,
    topic: "Measure and verify",
    type: "single",
    scenario:
      "A team streamlines its weekly reporting and claims it now takes about 25 minutes instead of 45. Leadership asks how they know the change is an improvement and not just a change.",
    question: "Which practices answer the question?",
    options: [
      "One enthusiastic team member's testimony is sufficient.",
      "Take a baseline measurement before changing anything, name the metric that matters beyond time saved, and run the old and new workflows in parallel for a few cycles to prove the improvement before relying on it.",
      "Compare only average output counts across the two months.",
      "Skip measurement; parallel runs cost double effort and are never worth it."
    ],
    answer: [1],
    explanation:
      "An improvement you cannot measure is hard to justify and harder to keep. Baseline first, the right metric, and a parallel run of two or three cycles costs real duplicated effort but is how you prove the change. Not every change is an improvement, and being able to answer what it costs is what survives a budget review."
  },
  {
    id: "WD-22",
    course: 9,
    topic: "Explaining the workflow",
    type: "single",
    scenario:
      "A project lead must present an AI-assisted workflow three times: to the legal lead who wants mechanism and failure modes, to the practice executive who wants outcome and oversight, and to a client's risk function who wants the control.",
    question: "Which formulation matches the course's advice for all three audiences?",
    options: [
      "Use fully automated in all three presentations, since it communicates efficiency.",
      "State what the tool does, then name the human checkpoint, adding what it refuses when the audience is judging trust: the legal lead hears the failure mode to watch, the executive hears turnaround plus sign-off, and the risk function hears that a qualified lawyer approves every term before anything is sent.",
      "Avoid mentioning AI at all costs so nobody worries.",
      "Say the AI is basically as good as a person at the task."
    ],
    answer: [1],
    explanation:
      "Three phrases overstate and all are common: fully automated (almost never true), AI handles X (drops the human gate out of the sentence), and basically as good as a person (sets a standard that will eventually be missed). Stakeholders trust the workflow more, not less, when human checkpoints are explicit."
  }
];
