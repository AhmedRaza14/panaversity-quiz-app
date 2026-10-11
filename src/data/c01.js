// Course 01 — Just Delegate It (24 questions)
export default [
  {
    id: "JD-01",
    course: 1,
    topic: "Asking vs delegating",
    type: "single",
    scenario:
      "A boutique owner first asks Claude: what are some good packaging suppliers? A week later she asks: find three packaging suppliers that deliver to Karachi, compare price and minimum order quantity for a 500-unit run, and put them in a table with one recommendation for a beginner.",
    question: "What is the fundamental difference between the two requests?",
    options: [
      "The second request is longer and uses more polite wording, which is why it works better.",
      "The first asks for an answer and leaves the next steps with her; the second gives AI a job whose finished result she can check and hand on.",
      "The first is better because it gives AI complete freedom to choose what matters.",
      "The second only differs because it names a city and a quantity."
    ],
    answer: [1],
    explanation:
      "The course opens with this contrast: asking gets an answer, delegating gets a result. Length is not the difference. The second request names an outcome (a table plus a recommendation), so the work moves off her desk and there is something concrete to verify."
  },
  {
    id: "JD-02",
    course: 1,
    topic: "Outcome vs steps",
    type: "single",
    scenario:
      "A consultant hands Claude a recipe-style prompt: open these two supplier sites, copy each price, build a table, then pick a winner. A colleague instead writes one sentence: when this is done I will have a comparison of the five cheapest suppliers with delivery times, and one recommendation I can act on.",
    question: "Why does the outcome-style request usually produce a better result?",
    options: [
      "It finishes faster because AI writes shorter answers for short prompts.",
      "It leaves the method to AI, so the result is not capped by the quality of the requester's own plan, which AI cannot tell you was narrow.",
      "It forces AI to use fewer sources, which reduces errors.",
      "It stops AI from using any sources, so all facts come from memory."
    ],
    answer: [1],
    explanation:
      "A recipe limits the result to the quality of your plan, and AI cannot warn you the plan was narrow. Naming the outcome leaves the steps to the machine; fix the steps only when the process itself is a requirement."
  },
  {
    id: "JD-03",
    course: 1,
    topic: "Delegation Brief",
    type: "single",
    scenario:
      "A team lead writes a brief with outcome, context, constraints, and deliverable, but the assistant keeps pausing to ask permission for tiny choices, and once picked a paid source even though the lead wanted free options.",
    question: "Which line of the Delegation Brief was the job missing?",
    options: [
      "The Context line, because AI needed more background about the team.",
      "The Authority line, which states what AI may decide alone and what it must ask about.",
      "The Deliverable line, because the format was not named precisely enough.",
      "The Outcome line, because the goal was not specific."
    ],
    answer: [1],
    explanation:
      "Authority and Verification are the two lines people skip. Authority sets which decisions AI owns (for example, choose sources, pick the shorter option when equal) and which decisions must come back to you. Without it, AI guesses both at once."
  },
  {
    id: "JD-04",
    course: 1,
    topic: "Brief: verification line",
    type: "single",
    scenario:
      "A product manager is compiling a comparison of three logistics providers before a contract meeting. She writes the brief and ends the verification line with: mark anything you could not confirm as unverified instead of guessing.",
    question: "What is the purpose of that verification line?",
    options: [
      "It forces AI to search the web before answering.",
      "It sets what she will check before accepting the result, and keeps honest uncertainty visible instead of hidden inside confident prose.",
      "It tells AI to refuse the job if any fact is missing.",
      "It guarantees that every fact in the output is correct."
    ],
    answer: [1],
    explanation:
      "Verification is written before the work starts so there is something to check the result against. Marking unverified items prevents the machine from smoothing over gaps, and it tells the supervisor exactly which items deserve a human trace."
  },
  {
    id: "JD-05",
    course: 1,
    topic: "Research: searched or knew",
    type: "single",
    scenario:
      "An editor asks for current submission windows at three literary magazines. She adds one line: for each magazine, say whether you found this by searching just now or already knew it, and give the date of the page you used.",
    question: "Why does that added line matter?",
    options: [
      "It makes the answer shorter by limiting AI to one page per magazine.",
      "It separates facts that arrived with a source from facts that came from memory, so she knows which claims to check first.",
      "It replaces the need to open the pages herself.",
      "It forces AI to answer only from pretrained knowledge."
    ],
    answer: [1],
    explanation:
      "A found fact should arrive with a source you can open; a remembered fact arrives alone and sounds just as confident. The searched-or-knew line exposes the difference, and remembered facts are the ones to check first."
  },
  {
    id: "JD-06",
    course: 1,
    topic: "Source handling",
    type: "multi",
    scenario:
      "A coordinator pastes an office memo into the chat and wants three answers from it: the deadline, the new form, and who approves requests. She wants the pasted text treated as the only source.",
    question: "Which TWO instructions turn the pasted text into a real source? (Select TWO.)",
    options: [
      "Use only the text below as the source for your answers.",
      "Quote the sentence that supports each answer you give.",
      "Improve the text wherever it seems incomplete, using your general knowledge.",
      "Assume the memo is current, so no date check is needed.",
      "If the text does not say, write not in the source."
    ],
    answer: [0, 1],
    explanation:
      "The two magic instructions are: use only the text below, and quote the sentence you used. Together they make not-in-the-source a good answer. Adding outside knowledge or skipping the date check defeats the purpose of giving a source."
  },
  {
    id: "JD-07",
    course: 1,
    topic: "Source handling",
    type: "single",
    scenario:
      "A school administrator pastes the exam policy and asks for three facts, each with a quoted sentence. One answer comes back as: The policy does not state a late-entry rule. Not in the source.",
    question: "What does that reply indicate?",
    options: [
      "The assistant failed the task and the whole result should be rejected.",
      "The assistant followed the source instruction correctly, and the gap is a finding about the document rather than a failure.",
      "The assistant is hiding an answer it actually knows.",
      "The policy text was too long for the context window."
    ],
    answer: [1],
    explanation:
      "Not in the source is exactly the outcome the instruction was designed to produce. The administrator now knows the policy really has no late-entry rule, which is information about the document, not an error by the assistant."
  },
  {
    id: "JD-08",
    course: 1,
    topic: "Deliverable",
    type: "single",
    scenario:
      "A grant writer has a chat answer with three facts marked unverified. She asks for a one-page document she can send to her director, adding: keep every unverified mark exactly where it is.",
    question: "Why is the last sentence important?",
    options: [
      "It makes the document shorter and easier to read.",
      "It moves the caveats from the chat into the deliverable, so the director sees the same honest boundaries the writer saw.",
      "It tells AI to remove the unverified items from the document.",
      "It converts the unverified facts into confirmed facts."
    ],
    answer: [1],
    explanation:
      "Caveats get lost in the move from chat to document unless instructed otherwise. Every unverified mark that survives keeps the deliverable honest, and the check is simple: count the caveats in the chat and in the document."
  },
  {
    id: "JD-09",
    course: 1,
    topic: "Authority: plan-first",
    type: "single",
    scenario:
      "A sales analyst once let a competitor analysis run overnight. The output was well written but built on the wrong three competitors, and rebuilding it took a day. Her colleague always starts jobs with: before you begin, list the steps you plan to take and wait for my go-ahead.",
    question: "Why is this practice worth copying?",
    options: [
      "It makes the assistant slower but more accurate at arithmetic.",
      "Before the run is the cheapest moment to fix a job; reviewing a plan catches a wrong direction before any work is wasted.",
      "It removes the need to verify the final result.",
      "It teaches the model permanently, so the correction never repeats."
    ],
    answer: [1],
    explanation:
      "Plan-first costs one message and puts the review in the cheapest possible place: before the work starts. Verifying the final result is still required; an approved plan is not a substitute for checking output."
  },
  {
    id: "JD-10",
    course: 1,
    topic: "Repetition and Projects",
    type: "single",
    scenario:
      "An accountant prepares the same monthly board pack. Every month she pastes the same 15 lines of background, the same formatting rules, and the same list of excluded accounts into a fresh chat.",
    question: "What is the right move by the third month?",
    options: [
      "Keep pasting, because repetition is how the model learns.",
      "Save what does not change: put the standing rules into project instructions and the reference files into project knowledge, so each new chat starts briefed.",
      "Write a longer prompt that combines everything into one paragraph.",
      "Stop using fresh chats and continue one endless conversation instead."
    ],
    answer: [1],
    explanation:
      "Repetition asks for the context you keep retyping. A Project holds standing instructions (rules) and knowledge (files) so the next chat begins already informed. The lesson is not more paste; it is putting the fixed parts where AI reads them by itself."
  },
  {
    id: "JD-11",
    course: 1,
    topic: "Standing instructions",
    type: "single",
    scenario:
      "A property agency runs a Project for listing descriptions. The brief for a new listing no longer contains the line always write prices in full, without abbreviations, yet every draft still follows that rule.",
    question: "What explains this?",
    options: [
      "The model learned the rule from last month's chats.",
      "The rule lives as a standing instruction in the Project, so it applies to every chat inside it and does not need to be retyped.",
      "The rule is part of the public system prompt written by the AI company.",
      "The line was accidentally implemented as a one-time memory feature."
    ],
    answer: [1],
    explanation:
      "Standing instructions are rules written once into a Project and followed in every chat inside it. That is exactly why the line can leave the brief without breaking the output; the Project carries it."
  },
  {
    id: "JD-12",
    course: 1,
    topic: "Intervene",
    type: "single",
    scenario:
      "A procurement officer asked for current prices for a spare part. The table comes back well formatted but clearly uses 2023 prices, and the job is otherwise well built.",
    question: "Which response is the smallest effective intervention?",
    options: [
      "Take the job back and build the table by hand.",
      "One message: the price column is from 2023; redo the prices from pages dated this year, and mark any price you cannot confirm as unverified.",
      "Delete the chat and rewrite the whole brief from scratch before trying again.",
      "Accept the table and correct the prices yourself later."
    ],
    answer: [1],
    explanation:
      "The smallest message that fixes the drift is the intervention. Here one corrective line with the missing constraint (dated this year) repairs the run; rewriting everything or silently fixing facts yourself wastes the delegation. The lesson also goes back into the brief as a constraint."
  },
  {
    id: "JD-13",
    course: 1,
    topic: "Intervene: escalate",
    type: "single",
    scenario:
      "A survey analyst has corrected the same formatting failure three times in a row. Each fix works for one reply, then the same failure returns on the next question, with a different model the previous month it did not happen.",
    question: "Which intervene move is the one people usually miss here?",
    options: [
      "Stop and take the job back permanently, since AI cannot do this work.",
      "Escalate capability: the problem is the tool, not the instructions, so consider a better model, a different feature, or a connector.",
      "Change the requirement so formatting no longer matters.",
      "Redirect with a shorter, friendlier message."
    ],
    answer: [1],
    explanation:
      "Escalate capability is the move people miss: sometimes I cannot do this well enough is a tooling statement, not a comprehension problem. Same failure every run on one setup, fine on another, points at the setup rather than the wording."
  },
  {
    id: "JD-14",
    course: 1,
    topic: "Verify",
    type: "single",
    scenario:
      "A consultant has a supplier report claiming: our lead time is the shortest in the market, five days. She wants to check the claim using the course method.",
    question: "What does tracing the claim actually require?",
    options: [
      "Asking the assistant again whether it is sure.",
      "Opening the source, finding the sentence that supports the claim, checking its date, and judging whether the source is good enough.",
      "Reading the whole report start to finish and judging the overall tone.",
      "Asking three colleagues whether the number feels right."
    ],
    answer: [1],
    explanation:
      "Trace means: source open, supporting sentence found, date checked, quality of source judged. Asking the assistant again is not verification, and a citation that exists is not automatically verification of the claim itself either."
  },
  {
    id: "JD-15",
    course: 1,
    topic: "Verify: review thresholds",
    type: "multi",
    scenario:
      "A marketing assistant receives one chat containing several outputs: a press release draft for national media, a recap of a training video for her own notes, a recommendation between two $15,000 annual software plans, and a list of lunch options.",
    question: "Which TWO outputs cross a review threshold and must be checked before use? (Select TWO.)",
    options: [
      "The press release draft that will go to national media.",
      "The software recommendation that will decide a $15,000 annual spend.",
      "The recap of the training video kept for her own notes.",
      "The list of lunch options near the office."
    ],
    answer: [0, 1],
    explanation:
      "Review thresholds: stakes, reversibility, audience, regulatory exposure. One crossed threshold is enough. Public audience (press release) and significant, hard-to-reverse spend (the software decision) both qualify; private notes and lunch lists do not."
  },
  {
    id: "JD-16",
    course: 1,
    topic: "Verify: four decisions",
    type: "single",
    scenario:
      "An AI summary reports that a vendor charges a 12 percent annual increase. The vendor's own current price list shows 8 percent, and an older reseller page shows 12 percent. It is not clear which document the vendor actually applies to this contract.",
    question: "Which of the four verification decisions fits here?",
    options: [
      "Accept, because two sources mention 12 percent somewhere.",
      "Correct, by writing 8 percent in place of the number.",
      "Investigate: the evidence conflicts and neither source alone settles it.",
      "Reject the whole report and restart the job."
    ],
    answer: [2],
    explanation:
      "The four decisions are accept, correct, investigate, reject. Conflicting evidence that a single source cannot settle is the textbook investigate case. Correct would mean applying a fix you can defend; here the truth is still open."
  },
  {
    id: "JD-17",
    course: 1,
    topic: "Verify: four decisions",
    type: "single",
    scenario:
      "A fee schedule table comes back with one wrong monthly figure, one small label typo in the header, and everything else verified against the source. The table is otherwise exactly the deliverable that was requested.",
    question: "Which decision is correct?",
    options: [
      "Accept the table as it stands so time is not wasted.",
      "Correct: send the table back with the two specific fixes listed, then re-check just those cells.",
      "Investigate for a week, treating the whole table as unreliable.",
      "Reject and take the job back from AI entirely."
    ],
    answer: [1],
    explanation:
      "Correct is for specific, repairable defects identified against a known-good reference. Investigation is for open conflicts, rejection for results that cannot be trusted even after repair. Two named fixes and a re-check of those cells is the proportionate response."
  },
  {
    id: "JD-18",
    course: 1,
    topic: "Verify: four decisions",
    type: "single",
    scenario:
      "A grant application package from AI includes a citation for a donor database that does not exist, and the recommendation to pursue that donor rests entirely on it.",
    question: "Which decision fits?",
    options: [
      "Accept, because only one claim among many is fabricated.",
      "Correct by editing the citation text and keeping the recommendation.",
      "Investigate the donor more deeply and continue the application.",
      "Reject: a fabrication at the foundation of the recommendation means the result cannot be trusted as submitted."
    ],
    answer: [3],
    explanation:
      "Reject has a second form people miss: the whole result may go back even when most of it looks fine. When fabricated material carries the core recommendation, accepting with edits would silently launder the fabrication into a trusted document."
  },
  {
    id: "JD-19",
    course: 1,
    topic: "Portability",
    type: "single",
    scenario:
      "A researcher wrote a six-line brief for one assistant, then pasted the same brief, unchanged, into a different company's assistant. It ran and produced a usable result without edits.",
    question: "What does this demonstrate about the brief?",
    options: [
      "The two assistants secretly share the same model weights.",
      "The brief describes the job rather than the tool, so it travels; what it produces is a record of two runs, not a verdict on which assistant is better.",
      "The brief must have been copied from the internet.",
      "The first assistant transferred its memory of the job to the second."
    ],
    answer: [1],
    explanation:
      "A good brief belongs to the job, not the product, which is why it runs in a second assistant without a rewrite. The written record is observations about this run on this day; the facts still need tracing like any other run."
  },
  {
    id: "JD-20",
    course: 1,
    topic: "Privacy of context",
    type: "single",
    scenario:
      "A lawyer wants AI help restructuring an argument, using a summary that still contains a client name and an upcoming hearing date. She needs the help now and does not want the material kept in her history or added to any memory feature.",
    question: "Which combination is the right first move inside the tool?",
    options: [
      "Use a normal chat, because AI answers are private by default.",
      "Remove identifying details where the task allows it, and use a temporary chat, which is not saved to history and does not add to memory.",
      "Paste everything, then delete the chat the same evening.",
      "Email the client first to get permission for the normal chat."
    ],
    answer: [1],
    explanation:
      "Before pasting anything real, strip names and details the task does not need, and where the material should not be kept, use the non-saving option (ChatGPT calls it a temporary chat). The course also flags that whether work data may go into AI at all is a governance question, handled in Course 10."
  },
  {
    id: "JD-21",
    course: 1,
    topic: "Authority",
    type: "single",
    scenario:
      "A practice manager pastes a letter from a supplier and wants only three items extracted: what is demanded, by when, and under which clause. She writes the authority line as: none. Do not draft a reply.",
    question: "Is that authority line a mistake to fix, or a real instruction?",
    options: [
      "A mistake; every brief needs at least one decision AI can make alone.",
      "A real instruction: none is a valid authority setting, and here it keeps the job at understanding, leaving any reply with the manager.",
      "A mistake; the line should ask AI to draft at least a rough reply.",
      "A mistake; authority lines must always name a permission like choose sources."
    ],
    answer: [1],
    explanation:
      "An authority line that says none is a real line. It tells AI to stop at understanding and leave the reply to a human, which is exactly right when the next action needs judgment the manager has not delegated."
  },
  {
    id: "JD-22",
    course: 1,
    topic: "Delegation Brief",
    type: "single",
    scenario:
      "A brief for a course-comparison job contains these lines: Outcome (three beginner courses compared, one recommended); Context (no programming background, five hours a week); Constraints (free to start, no coding prerequisites); Deliverable (table plus two-sentence recommendation); Authority (choose sources; explain if anything is paid).",
    question: "Which of the six brief questions is left unanswered?",
    options: [
      "Outcome.",
      "Context.",
      "Verification, which states what the requester will check before accepting and how uncertainty should be marked.",
      "Deliverable."
    ],
    answer: [2],
    explanation:
      "Count the six: outcome, context, constraints, deliverable and authority are present. Verification is missing, so nothing tells the assistant how to mark facts it could not confirm, and nothing pre-commits the requester to a check before acceptance."
  },
  {
    id: "JD-23",
    course: 1,
    topic: "Delegation Record",
    type: "multi",
    scenario:
      "A team keeps a one-page Delegation Record for each delegated job: brief, run, check, decision, and the notes for next time.",
    question: "Which TWO items belong in that record? (Select TWO.)",
    options: [
      "The move that fixed a drift during the run, written as the lesson for the next brief.",
      "The two claims that mattered, the sources opened, and what the trace found.",
      "The number of words in each of the assistant's replies.",
      "A rating of how friendly the assistant's tone felt."
    ],
    answer: [0, 1],
    explanation:
      "The record captures the brief, the run (assistant, plan changes, the drift and the move that fixed it), the check (claims that mattered with sources opened), and the final decision. Tone ratings and reply word counts are noise; the drift lesson and the traced claims are the point."
  },
  {
    id: "JD-24",
    course: 1,
    topic: "Asking vs delegating",
    type: "single",
    scenario:
      "A freelancer has four items on today's list: the capital of Australia, an explanation of compound interest for a client meeting, a comparison of three internet packages available at her address this month with a recommendation, and the spelling of a client's name.",
    question: "Which item should be handled as a delegated job rather than a question?",
    options: [
      "The capital of Australia.",
      "The explanation of compound interest.",
      "The internet package comparison with a recommendation she can act on.",
      "The spelling of the client's name."
    ],
    answer: [2],
    explanation:
      "Quick lookups and explanations are questions; they end with an answer. The comparison is a job: it needs current information, a defined deliverable she can act on, and facts she will check. The test is whether you want an answer or a thing to exist."
  }
];
