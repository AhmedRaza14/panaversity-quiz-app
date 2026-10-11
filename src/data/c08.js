// Course 08 — How to Think in the AI Era (22 questions)
export default [
  {
    id: "TH-01",
    course: 8,
    topic: "The rule",
    type: "single",
    scenario:
      "Two colleagues submit near-identical analyses. One attaches only the final answer. The other attaches the same answer plus a short section listing what she rejected and why, a diagram of second-order effects, and a sentence naming what evidence would change her mind.",
    question: "Which submission matches the course's core rule?",
    options: [
      "The first, because deliverables should be lean and free of process noise.",
      "The second, because the deliverable is not just the answer but documented evidence of thinking: the written record of how the answer was reached.",
      "Both are equivalent if the answers are identical.",
      "Neither, because process documents belong in a separate appendix nobody reads."
    ],
    answer: [1],
    explanation:
      "The deliverable is never just the answer; it is the documented evidence of thinking, usually living inside the deliverable as a footnote, a considered-and-rejected paragraph, a figure, or a what-would-change-my-mind sentence. What changed in the AI era is not the habit of writing things down but the cost of skipping it."
  },
  {
    id: "TH-02",
    course: 8,
    topic: "Prediction Lock: purpose",
    type: "single",
    scenario:
      "A manager asks her assistant whether the team should switch to a four-day week. The reply is energetic, well-structured, and supportive. She forwards it to leadership as her recommendation, though she cannot now say what she thought before reading it.",
    question: "Which failure does this illustrate, and what is the fix?",
    options: [
      "Anchoring: once a confident answer occupies the space where your own answer would sit, it becomes your reference point; the fix is committing your own written position before opening AI.",
      "Sycophancy: the assistant agreed with a position the manager never held.",
      "Context rot: the answer degraded over a long session.",
      "A retrieval failure: the question needed web search."
    ],
    answer: [0],
    explanation:
      "Once you read AI's answer you cannot un-read it, and you cannot tell what you would have thought without it. The Prediction Lock is a written position, confidence estimate, and flip condition committed before the answer arrives, so the comparison is possible at all."
  },
  {
    id: "TH-03",
    course: 8,
    topic: "Prediction Lock: four lines",
    type: "single",
    scenario:
      "A supervisor at a warehouse faces a decision about which shifts to consolidate. Before consulting AI she writes: what this is really about (whether the night shift's cost is offset by its throughput), the one fact that would settle it (the average throughput per shift over the last quarter), her decision and reasoning (keep the night shift), the specific finding that would flip it (night throughput below 70 percent of day throughput), and her confidence (65 percent).",
    question: "What role does each part of the lock play?",
    options: [
      "All four lines go into the prompt so the assistant can choose for her.",
      "Lines one and two surface the real decision and name the question whose answer would settle it; lines three and four commit her position and the reversal condition, and only lines one and two go into the prompt.",
      "Only line four matters; the others are ceremony.",
      "The lock is only valid for decisions involving money."
    ],
    answer: [1],
    explanation:
      "Line one strips the label to find the real question; line two names the fact that would settle it; line three commits a position before AI weighs in; line four sets the reversal condition and confidence. The prompt carries only lines one and two, with an instruction to answer the question and not make the decision."
  },
  {
    id: "TH-04",
    course: 8,
    topic: "Prediction Lock: outcome reading",
    type: "single",
    scenario:
      "A retailer locks 70 percent confidence that demand for her winter coats will fall if she raises prices by 8 percent, with a flip condition: if a survey shows fewer than 15 percent of customers aware of competitors' prices, the calculation changes. The AI answer says price sensitivity in her segment is low because most customers do not comparison-shop.",
    question: "How should she read this against the lock?",
    options: [
      "Ignore the lock; the AI answer is more detailed.",
      "The answer matches her recorded flip condition, so the decision changes, for the reason she set in advance, not because the assistant sounded convincing.",
      "The answer is opposite to the flip condition, so her original decision stands unchanged forever.",
      "She must relock before reading further, because any new information voids the lock."
    ],
    answer: [1],
    explanation:
      "The lock pre-decides the meaning of the answer: not what would flip you leaves the decision standing; exactly what would flip you changes it for the pre-set reason; somewhere in between sends you back to line three to see whether the reasoning weakens. This is what makes a decision defensible as hers."
  },
  {
    id: "TH-05",
    course: 8,
    topic: "Reasoning Receipt",
    type: "single",
    scenario:
      "In drafting a project plan, the assistant suggests rehearsing the demo in a noisy room to simulate conference conditions. The planner keeps the idea, but adjusts it: rehearse twice, once noisy and once silent, because the team needs both failure modes.",
    question: "What receipt entry matches this action?",
    options: [
      "ACCEPT, because the idea was kept.",
      "MODIFY: the idea was used with a change, and the why column records the reasoning about failure modes.",
      "REJECT, because the original suggestion was not followed exactly.",
      "SURFACED, because the suggestion came from the assistant."
    ],
    answer: [1],
    explanation:
      "The five labels: accept as-is, reject, modify, surfaced (the assistant raised something valuable you might otherwise have missed), missed (something you caught that the assistant did not). MODIFY is for adopted-with-changes, and the why column is what makes the row useful three months later."
  },
  {
    id: "TH-06",
    course: 8,
    topic: "Reasoning Receipt: warning signs",
    type: "single",
    scenario:
      "A reviewer flips through a colleague's receipt for a big presentation plan. Every row reads ACCEPT, and every why says sounds right or good idea.",
    question: "What should the reviewer conclude?",
    options: [
      "The assistant did excellent work that required no changes.",
      "The receipt is a warning sign: all-ACCEPT with low-information reasons usually means the plan's claims were never really examined.",
      "The colleague should switch to a different assistant.",
      "The receipt format was used incorrectly and should be abandoned."
    ],
    answer: [1],
    explanation:
      "A good receipt has a mix of labels over time. All-ACCEPT means the human processed suggestions as sounds right, moving on, which is exactly the passive acceptance the discipline exists to catch. Receipts are for the work, not for an audit that may never come."
  },
  {
    id: "TH-07",
    course: 8,
    topic: "Reasoning Receipt: no auditor",
    type: "multi",
    scenario:
      "A freelance consultant has stopped keeping reasoning receipts for her client reports, on the argument that no client or manager ever reads them: the only thing anyone sees is the finished deliverable, and the receipts just add fifteen minutes to every job.",
    question: "Which TWO reasons from the course apply? (Select TWO.)",
    options: [
      "Writing a label and a reason forces the brain to examine a suggestion instead of rubber-stamping it.",
      "The rows become part of the work itself: a rejection often turns into a considered-alternatives paragraph in the deliverable, and future-you benefits most.",
      "Receipts are legally required for all professional work.",
      "Receipts automatically improve the model's future answers."
    ],
    answer: [0, 1],
    explanation:
      "Three payoffs even with no auditor: the act of writing changes what you decide; the receipt becomes part of the work rather than a record of it; and future-you, three months on, is the person who actually checks. Models never see or learn from the receipt."
  },
  {
    id: "TH-08",
    course: 8,
    topic: "Error Taxonomy",
    type: "single",
    scenario:
      "An AI draft about a used-car purchase includes these lines: gets 47 mpg combined, per the CarReliability Index 2026 rankings, either car will run another decade without a major repair, and both qualify for a $2,000 state rebate.",
    question: "Which set of taxonomy types do these lines most plausibly trigger?",
    options: [
      "Only stale facts, since cars are a fast-changing topic.",
      "Possibly fabricated source on the index, false confidence on the decade claim, and a stale or unverified rebate figure: several types can hide in one paragraph that reads professionally.",
      "None; used-car details are not checkable.",
      "Only missing context, because repair costs are absent."
    ],
    answer: [1],
    explanation:
      "Six named types (factual error, logical gap, false confidence, missing context, fabricated source, stale fact) are scanned one type at a time. Fluent paragraphs can carry several at once, which is why scanning by name beats reading by feel. The five out of six in one short summary is exactly the cautionary example the course uses."
  },
  {
    id: "TH-09",
    course: 8,
    topic: "Error Taxonomy: scanning technique",
    type: "single",
    scenario:
      "A reviewer alters her process: instead of asking is this answer good, she runs the same draft six times, each pass hunting for one named mistake type only.",
    question: "Why does the one-type-at-a-time scan work better?",
    options: [
      "It makes the draft shorter each pass.",
      "A vague does-this-seem-right question is the wrong way to present the problem; named categories focus attention, and repeated passes catch what a single general reading misses.",
      "It allows the assistant to fix each type automatically.",
      "It guarantees that no mistakes remain after six passes."
    ],
    answer: [1],
    explanation:
      "Gigerenzer's point: how a problem is presented decides how well people reason about it. Named categories make the scan concrete, and one-at-a-time passes beat a general good-or-bad judgment, which is exactly the reading mode fluency biases."
  },
  {
    id: "TH-10",
    course: 8,
    topic: "Error Taxonomy: low expertise",
    type: "single",
    scenario:
      "A junior staffer is checking an AI summary about a specialised medical billing rule she knows little about. She has no domain intuition for the numbers.",
    question: "Which handling follows the course's advice for low-knowledge checks?",
    options: [
      "Accept the summary, since she cannot check it anyway.",
      "Ask for the exact source behind each claim, be suspicious of precise-looking numbers with no citation, and label anything she cannot verify in a couple of minutes as MODIFY rather than ACCEPT.",
      "Rewrite the summary in her own words so it becomes hers.",
      "Run the summary through a second chat and trust the more confident answer."
    ],
    answer: [1],
    explanation:
      "The six-type scan works best with topic knowledge. Without it: demand exact sources rather than studies show, treat unsourced precision with suspicion, and when unsure label MODIFY. Not-accepting is available even when verification is expensive."
  },
  {
    id: "TH-11",
    course: 8,
    topic: "Cascade Map: purpose",
    type: "single",
    scenario:
      "A university replaces half of its in-person tutoring hours with an AI chatbot to save money. Six months later the students who struggled most have stopped coming for help, grades in the bottom cohort have dropped, and some students have transferred.",
    question: "What did the decision's planners miss, and which discipline addresses it?",
    options: [
      "They missed a purely technical bug; an engineering fix will solve it.",
      "They stopped at the first effect: Thinking in Systems traces what a decision causes next across every group it touches, and the consequences that come back later are where the surprises live.",
      "They missed a data-tier problem; privacy rules would have prevented it.",
      "Nothing was missed; student behaviour could not have been predicted."
    ],
    answer: [1],
    explanation:
      "The failure mode of Discipline 4: stopping at the first effect. The Cascade Map traces effects three layers deep across affected groups and hunts loops, where a later effect circles back and changes the original decision. If the map looks clean and simple, you stopped too early."
  },
  {
    id: "TH-12",
    course: 8,
    topic: "Cascade Map: construction",
    type: "single",
    scenario:
      "A council president is mapping the effects of moving the annual sports day from a rented stadium to the university's own ground.",
    question: "Which construction procedure matches the course?",
    options: [
      "List every possible effect in a flat list, in one pass, and pick the top ten.",
      "Write the decision as one clear sentence, list five affected groups, ask and-then-what three times per group, find where effects loop back, and treat messiness as the feature rather than tidying it away.",
      "Draw only the effects on the primary stakeholders, keeping the rest out of scope.",
      "Delegate the whole map to the assistant and accept its diagram."
    ],
    answer: [1],
    explanation:
      "Twenty minutes the first time, ten once used to it: one-sentence decision, five groups (start with those doing the work and those using it), three layers of and-then-what, then hunt the loop. A neat map usually means only the obvious effects were written down."
  },
  {
    id: "TH-13",
    course: 8,
    topic: "Cascade Map: the loop",
    type: "single",
    scenario:
      "In an exam-proctoring plan, students with weak internet get flagged for suspected cheating, complaints surge, the administration must hire reviewers to handle them, the review cost exceeds the room-booking savings, and leadership reconsiders the original decision.",
    question: "What does this chain illustrate, and how should it be read?",
    options: [
      "A set of unrelated consequences that can be fixed one at a time.",
      "A loop: a later effect circles back and undermines the original decision, which is the strongest finding a cascade map can produce.",
      "Proof that the plan's arithmetic was wrong but the plan itself is sound.",
      "A reason to abandon cascade maps, since everything is unpredictable."
    ],
    answer: [1],
    explanation:
      "The loop is where a chain returns and changes the decision itself. Forrester's demand amplification, Sterman's feedback misperception, and Meadows' leverage points all point the same way: the return trip is where the strongest places to act hide, and people miss it unless forced to draw it."
  },
  {
    id: "TH-14",
    course: 8,
    topic: "First Principles: thresholds",
    type: "single",
    scenario:
      "A coding club president hears from everyone, including AI, that the club must charge fees to be taken seriously. Before adopting it, she tests the advice against her own case.",
    question: "Which output matches the First Principles move?",
    options: [
      "A general statement that fees are not always a good idea.",
      "Three named thresholds: concrete conditions where the advice fails for her club, each with a reason, such as where the goal is attracting first-year students who have never coded and most cannot afford any fee.",
      "A longer list of the advice's general pros and cons.",
      "A survey asking members whether they like the current policy."
    ],
    answer: [1],
    explanation:
      "The move is finding the exact condition where common advice stops working for you: a named threshold, not a shrug. Vague complaints are useless; specific conditions with reasons are checkable, and being unable to write a third row usually means the advice has been followed without being understood."
  },
  {
    id: "TH-15",
    course: 8,
    topic: "First Principles: falsifiability",
    type: "single",
    scenario:
      "A sales lead adopts the habit of writing what condition would prove a favourite strategy wrong before rolling it out to the region.",
    question: "Which research idea is she applying?",
    options: [
      "Recognition-primed decision making, because she is an expert in her market.",
      "Falsifiability: a claim only tells you something about the world if you can state what would prove it wrong, which is exactly what threshold-writing makes concrete.",
      "Processing fluency: simple wording feels truer.",
      "Demand amplification: effects come back distorted."
    ],
    answer: [1],
    explanation:
      "Popper's falsifiability is the sharp instrument behind named thresholds. Combined with Gigerenzer's heuristic-plus-environment fit and Klein's automatic acceptance of settled answers, the practice is: state the conditions where this advice stops being true for me, in numbers or clear situations."
  },
  {
    id: "TH-16",
    course: 8,
    topic: "Three-path comparison",
    type: "single",
    scenario:
      "For an email asking her professor for an extension, a student produces three versions: her unassisted attempt (apologetic, weak), the assistant's first answer accepted unchanged (polished but generic), and a hybrid where she kept her direct phrasing, moved the request to the top, and replaced the closing line with her own.",
    question: "Why must she keep all three versions, not just the hybrid?",
    options: [
      "Three versions are required by academic policy.",
      "The solo version shows which ideas are hers, the AI-only version reveals whether she merely accepted everything, and the comparison is what proves the hybrid is better rather than just feeling better.",
      "The three versions improve the model's learning.",
      "Keeping all three doubles the chance that one of them is correct."
    ],
    answer: [1],
    explanation:
      "Each version answers a different question about authorship and judgment. Without the solo draft you cannot tell which choices are yours; without the AI-only draft you cannot show you did not rubber-stamp; without the comparison, it-feels-better is the whole argument. The three versions side by side are themselves documented evidence of thinking."
  },
  {
    id: "TH-17",
    course: 8,
    topic: "Working WITH AI: evidence",
    type: "single",
    scenario:
      "In a field study, thousands of customer-support agents received AI assistance. Measured across the workforce, the least experienced agents gained the most, and across studies output quality moved toward a common middle when AI was used without management.",
    question: "What do these findings imply for how to work with AI?",
    options: [
      "AI should be reserved for experts only.",
      "AI lifts those who know least, and unmanaged use compresses everyone toward the same average, so the human's value is whatever the AI does not already hold, which is why the working-WITH discipline manages the machine rather than surrendering to it.",
      "The experiments prove AI assistance has no effect on quality.",
      "The findings are irrelevant for individual professionals."
    ],
    answer: [1],
    explanation:
      "Three strands: teaming beats solo only when the human manages the machine (Kasparov's centaurs); AI lifts the people who know least (Brynjolfsson, Li and Raymond); and unmanaged AI pulls everyone toward the same middle (Noy and Zhang). The discipline is to keep the judgment yours and use the tool for reach."
  },
  {
    id: "TH-18",
    course: 8,
    topic: "Working WITH AI: when to use",
    type: "single",
    scenario:
      "A marketing manager has a full calendar. She uses the three-path method for two tasks: rewriting a heartfelt internal announcement, and drafting a routine confirmation email. For the routine email the three versions came out nearly identical.",
    question: "What is the correct reading and adjustment?",
    options: [
      "Use the three-path method for everything, all day, regardless of output.",
      "The method pays where personal experience matters, like the heartfelt announcement where her overrides are visible; for routine work, the near-identical versions are a signal that less machinery is needed.",
      "Abandon the method entirely because one case showed no difference.",
      "Use the method only on tasks requiring web research."
    ],
    answer: [1],
    explanation:
      "The comparison is highest-value where your judgment and experience genuinely matter. It is not paperwork for every small task; on routine messages the versions converging is information, not failure, and the discipline can be scaled down."
  },
  {
    id: "TH-19",
    course: 8,
    topic: "Scope of the six disciplines",
    type: "single",
    scenario:
      "A new adopter is enthusiastic and builds a cascade map, a receipt, and a full three-path comparison for deciding where to eat on Friday.",
    question: "What does the course advise?",
    options: [
      "The full six-discipline process should be applied to every decision, including lunch.",
      "Match discipline to stakes: you do not need a cascade map to decide where to eat; the disciplines are for decisions that matter, not for every act of choosing.",
      "The disciplines should never be applied informally; they are formal audit instruments only.",
      "Receipts should be kept but maps never drawn without approval."
    ],
    answer: [1],
    explanation:
      "The six disciplines did not give the capstone its answer; they gave it a defensible trail. They are for decisions that carry consequences. Applying all six to lunch is theatre, and theatre is not evidence."
  },
  {
    id: "TH-20",
    course: 8,
    topic: "Action lines",
    type: "single",
    scenario:
      "A workshop asks participants to carry six one-line reminders on a card: write your position first; label every suggestion and say why; scan for the six named mistake types; trace what happens next three layers deep; name the threshold where advice fails; compare solo, AI-only and collaborative.",
    question: "What is the role of each line?",
    options: [
      "Each is a rule for how AI must behave.",
      "Each is the single action its discipline asks of the human, short enough for a sticky note: the disciplines are things you do, while failure modes are things AI does.",
      "Each is a prompt template for a specific tool.",
      "Each is a certification requirement rather than a working habit."
    ],
    answer: [1],
    explanation:
      "A discipline is a thinking habit you practise; a failure mode is a way AI misleads you. The action line is the one thing the discipline asks you to do, compressed to sticky-note size, which is how the disciplines survive contact with a busy week."
  },
  {
    id: "TH-21",
    course: 8,
    topic: "Evidence vs the answer",
    type: "single",
    scenario:
      "A student's essay is identical to a capable classmate's, word for word. When questioned, she has no receipts, no locked position, no record of what she rejected, only a chat link she no longer has.",
    question: "What does the course's rule say about this situation?",
    options: [
      "The chat link itself would have been sufficient as complete evidence.",
      "The deliverable should have carried documented evidence of the thinking: a locked position, labeled acceptances and rejections, and the reasoning behind each choice, which is what makes work stand as one's own.",
      "Writing things down is only necessary if an employer asks.",
      "Reading the answer again after the fact would restore the missing record."
    ],
    answer: [1],
    explanation:
      "The rule: the deliverable is documented evidence of thinking. The act of writing forces the thinking to happen, and the record is what allows the work to stand up when questioned, long after memory fades. A chat link can be part of it, but only if it exists and is coherent."
  },
  {
    id: "TH-22",
    course: 8,
    topic: "Cognitive capital",
    type: "single",
    scenario:
      "A company offers juniors AI tools that draft everything: analyses, arguments, and recommendations. Within a year, managers notice the juniors cannot evaluate arguments they did not draft and cannot spot structural problems in AI output.",
    question: "Which concept names the loss, and what is the corrective principle?",
    options: [
      "Context rot; the fix is a bigger window.",
      "Cognitive capital: the thinking muscle is built by doing hard thinking yourself; use AI to stretch a skill you already have, not to skip learning it.",
      "Automation bias; the fix is more disclosure.",
      "Sycophancy; the fix is neutral prompts."
    ],
    answer: [1],
    explanation:
      "AI gravity pulls you to hand more thinking to the machine, and cognitive capital is what you lose when you do too early. The rule: use AI to stretch a skill you already have, not to skip learning it. An expert with twenty years of judgment can delegate more, because they know what good looks like."
  }
];
