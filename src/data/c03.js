// Course 03 — AI Fluency (20 questions)
export default [
  {
    id: "AF-01",
    course: 3,
    topic: "Fluency, not access",
    type: "single",
    scenario:
      "Two designers have the same paid plan and the same free morning. One finishes a full client campaign in three hours with AI; the other, on the same plan, produces scattered text she cannot use and stays late redoing it.",
    question: "What does the AI Fluency framework say explains the difference?",
    options: [
      "The slower designer has an older version of the model selected.",
      "Fluency is human: the effective use of an identical tool through delegation, description, discernment and diligence, rather than access to something better.",
      "The faster designer found secret magic prompts that only she has.",
      "The difference is luck, since outputs are random and cannot be steered."
    ],
    answer: [1],
    explanation:
      "AI fluency means working with AI effectively, efficiently, ethically and safely. Everyone has the same AI; the four human competencies are what separate results. Nothing in the foundation requires training a model or collecting magic prompts."
  },
  {
    id: "AF-02",
    course: 3,
    topic: "Three modes",
    type: "single",
    scenario:
      "A hotel manager uses AI in three ways today: it translates a fixed welcome notice; it brainstorms menu names with her over many back-and-forth messages; and it watches the booking inbox, replies to routine messages in her style, and flags anything unusual for her decision while she is off shift.",
    question: "Which sequence names the three modes correctly?",
    options: [
      "Augmentation, automation, agency.",
      "Automation (the fixed translation task), augmentation (brainstorming together), and agency (the inbox goal with boundaries, acting without her watching and partly for others).",
      "Agency, automation, augmentation.",
      "All three are automation, because all three involve the same tool."
    ],
    answer: [1],
    explanation:
      "Automation runs a task you specify, augmentation works on the task with you as a thinking partner, and agency works toward a goal on your behalf, including future tasks and for other people. The modes differ in how much freedom AI has to decide what to do next."
  },
  {
    id: "AF-03",
    course: 3,
    topic: "Agency definition",
    type: "multi",
    scenario:
      "A clinic asks whether to give an AI appointment assistant more independence. The framework defines agency with two specific features.",
    question: "Which TWO features define agency? (Select TWO.)",
    options: [
      "The AI performs future tasks when the configuring human is not in the room.",
      "The AI serves people other than the person who configured it.",
      "The AI always asks for confirmation on every single action it takes.",
      "The AI operates only inside one existing chat conversation."
    ],
    answer: [0, 1],
    explanation:
      "Future means you are not watching, and for others means the person served may not be you. Automation and augmentation keep you in the chair; agency changes both conditions. Requiring confirmation on every action would remove the independence that defines agency."
  },
  {
    id: "AF-04",
    course: 3,
    topic: "Delegation: problem awareness",
    type: "single",
    scenario:
      "An accountant asks an assistant to build an invoice-chasing agent. Before any prompt, she answers: which customers count as overdue, how many days late triggers contact, the tone, the amount above which a human approves, what happens in a dispute, and which system it may read.",
    question: "Which part of Delegation is this?",
    options: [
      "Platform awareness, because she chose the tool.",
      "Problem awareness: knowing the goal, the work, the risks, and what success means before any prompting begins.",
      "Task delegation, because she split the work between human and AI.",
      "Performance description, because some answers sound like behaviour rules."
    ],
    answer: [1],
    explanation:
      "Delegation has three parts: problem awareness, platform awareness, and task delegation. These questions define the goal and the work; they are not prompting questions and no model can supply them. Task delegation, deciding who does each part, comes next."
  },
  {
    id: "AF-05",
    course: 3,
    topic: "Delegation: platform awareness",
    type: "single",
    scenario:
      "A law office has four needs this week: untangle a knotty multi-step argument, confirm the current version of a regulation, restructure a large folder of case files, and run a weekly multi-step client-update routine with tools.",
    question: "Which mapping matches the platform-awareness guidance?",
    options: [
      "Use the same chat model for all four, because it is the most convenient option.",
      "Reasoning model for the multi-step argument, search-enabled assistant for the current rule, coding agent for the folder work, and an agent-capable system for the multi-step routine.",
      "Buy four new subscriptions, because platform awareness means one tool per task forever.",
      "Platform awareness is only for engineers, so the office should skip it."
    ],
    answer: [1],
    explanation:
      "Platform awareness means judging which kind of AI fits the job: reasoning models for hard multi-step problems, search-enabled tools for current information, coding agents for files in a project, and agent-capable systems for work with several steps. Model names change, so keep notes about what worked rather than memorising brands."
  },
  {
    id: "AF-06",
    course: 3,
    topic: "Description: three kinds",
    type: "single",
    scenario:
      "A grant writer gives three separate things to the assistant: the format and audience for the final proposal, the order of review steps for checking eligibility first, and the instruction to challenge weak assumptions rather than agree politely.",
    question: "Which three description types do these represent?",
    options: [
      "Product, process, and performance description.",
      "Product, performance, and platform description.",
      "Process, discernment, and diligence description.",
      "Audience, steps, and tone description."
    ],
    answer: [0],
    explanation:
      "Description covers what you want (product), how the work should be approached (process), and how the AI should behave with you and on its own (performance). The memory aid is what, how, and how to work with me."
  },
  {
    id: "AF-07",
    course: 3,
    topic: "Product description",
    type: "single",
    scenario:
      "One request says simply: summarise this report. The other says: summarise this quarterly financial report for senior executives who have ten minutes, focusing on revenue trends, risks and recommended actions, as short bullets, one page, highlighting any assumption the figures rest on.",
    question: "What is the main lesson?",
    options: [
      "Tone and length fields are the only parts of a brief that matter.",
      "Completeness beats clever wording: naming output type, audience, format, length and what to emphasise removes guesswork.",
      "Longer prompts are always better, regardless of content.",
      "The second request works because it sounds more intelligent."
    ],
    answer: [1],
    explanation:
      "Product description answers what the result must be: type, audience, format, length, tone, topics to include, and things to leave out. The second request is not more intelligent, just more complete, and completeness is what removes guesswork."
  },
  {
    id: "AF-08",
    course: 3,
    topic: "Process description",
    type: "single",
    scenario:
      "A code reviewer writes: review for correctness first, security second, style last; do not touch naming issues until you have confirmed whether the code actually works.",
    question: "Which description type is this, and why does it matter here?",
    options: [
      "Performance description, because it shapes the reviewer's manner.",
      "Process description: it defines the order of work and the method, which matters most when a job has several stages.",
      "Product description, because review output is the product.",
      "Platform description, because it selects the review model."
    ],
    answer: [1],
    explanation:
      "Process description defines the approach: steps, order, method, examples and checks before finishing. Multi-stage jobs are where it pays off most, as in the vendor-comparison pattern where extraction runs first because everything later depends on it."
  },
  {
    id: "AF-09",
    course: 3,
    topic: "Performance description",
    type: "single",
    scenario:
      "At the start of a strategy session a manager writes: challenge my assumptions where they are weak, flag uncertainty on facts, do not agree just to be polite, and if your case is stronger, hold your position and explain why.",
    question: "What does this instruction do?",
    options: [
      "It turns the assistant into a polite answer machine that always defers to the manager.",
      "It is a performance description: it turns the assistant from a polite answer machine into a thinking partner by defining how it behaves.",
      "It is a compliance requirement that all businesses must use.",
      "It is a prompt technique that only works for medical topics."
    ],
    answer: [1],
    explanation:
      "Performance description defines how AI behaves: concise or detailed, supportive or challenging, asking first or assuming, flagging uncertainty or answering flatly. Used deliberately it changes the working relationship; forgotten in a new chat, the behaviour fades unless it lives in configuration."
  },
  {
    id: "AF-10",
    course: 3,
    topic: "Context engineering",
    type: "single",
    scenario:
      "A support team rewrites and rewrites its prompt phrasing. Replies improve slightly, but agents still give wrong resolutions because they hold stale product data, lack the escalation rules, and cannot open the ticket system.",
    question: "What shift does the course recommend?",
    options: [
      "Keep polishing prompt wording; phrase-level prompting is the whole game.",
      "Move from prompt engineering to context engineering: fix the data, rules, examples and tool access the system needs, because a well-written prompt cannot rescue wrong data or missing tools.",
      "Accept that the system will never work and return to manual handling.",
      "Switch to a model with a bigger context window and change nothing else."
    ],
    answer: [1],
    explanation:
      "Prompt engineering asks how to phrase a message; context engineering designs everything the AI needs: instructions, documents, tools, memory and policies. When a system has wrong data, missing rules or no tool access, wording cannot save it. System prompts make performance descriptions permanent."
  },
  {
    id: "AF-11",
    course: 3,
    topic: "Discernment: automation bias",
    type: "single",
    scenario:
      "An analyst receives a polished, professional-looking vendor summary with specific figures and a confident recommendation. She forwards it straight to her manager without checking anything, because it reads like expert work.",
    question: "Which fluency failure is this?",
    options: [
      "Delegation failure: she built the system as agency rather than automation.",
      "Automation bias: the human tendency to trust automated, confident-looking output too easily, in place of product discernment.",
      "Description failure: her prompt was too short.",
      "Diligence failure: she should have disclosed the AI use in the email."
    ],
    answer: [1],
    explanation:
      "Automation bias is trusting automated output too easily, especially when it looks confident and professional. The polish of the summary is not evidence of correctness; product discernment asks the six questions, including would I put my name on this?"
  },
  {
    id: "AF-12",
    course: 3,
    topic: "Discernment: failure that looks like success",
    type: "multi",
    scenario:
      "A due-diligence pack written with AI is going to a client. The associate is scanning it for the failure patterns the course warns about.",
    question: "Which TWO patterns should she treat as warning signs? (Select TWO.)",
    options: [
      "A precise figure and citation that appeared from nowhere in the conversation.",
      "A flatly confident answer to a question a specialist would answer with it depends.",
      "A short executive summary that repeats the same figure three times.",
      "A recommendation that includes a list of its assumptions."
    ],
    answer: [0, 1],
    explanation:
      "Vague questions answered with flat confidence, and exact specifics that came from nowhere, are classic patterns of failure that looks like success. Merely repeating a figure is style; listing assumptions is a good practice, not a warning."
  },
  {
    id: "AF-13",
    course: 3,
    topic: "Discernment: product",
    type: "single",
    scenario:
      "A proofreader has an AI-assisted press release in front of her. She likes the tone. Before signing off she wants to check the result against the right references.",
    question: "Which set of references matches product discernment?",
    options: [
      "Only its own internal consistency; if the document does not contradict itself it is fine.",
      "What was asked for, the source material, and the field's professional standards, covering correctness, requirements followed, gaps, consistency, expert credibility, and whether she would sign her name to it.",
      "Whether the model that wrote it is the newest available.",
      "The length of time the model spent generating it."
    ],
    answer: [1],
    explanation:
      "Product discernment judges the result against three references: the ask, the sources, and professional standards. The six questions end with the practical test: would I confidently put my name on this?"
  },
  {
    id: "AF-14",
    course: 3,
    topic: "Discernment: process",
    type: "single",
    scenario:
      "A communications officer notices her drafting sessions have changed: each chat becomes a series of repairs for the same formatting failure, the assistant has drifted back to a tone she corrected twice, and she is editing its drafts more heavily than she would write them herself.",
    question: "Which discernment is she missing, and what are her moves?",
    options: [
      "Product discernment; she should reject every draft and start over every morning.",
      "Process discernment: ask whether working this way is paying off, then escalate the moves: re-describe, change the platform or configuration, or move the job.",
      "Performance discernment; she should watch what the assistant does when she is offline.",
      "Diligence; she should disclose to management that AI is involved."
    ],
    answer: [1],
    explanation:
      "Process discernment asks whether the way of working with AI is paying off: is it repeating corrected mistakes, drifting, becoming uselessly agreeable, costing you more turns than it saves. When the process is not working, three moves escalate, up to moving the job."
  },
  {
    id: "AF-15",
    course: 3,
    topic: "Discernment: performance",
    type: "single",
    scenario:
      "A math-tutoring AI is accurate and polite in every conversation. Six months later teachers report that students have stopped trying before asking and simply copy the steps the tutor gives without hesitation.",
    question: "Which discernment question does this raise, and what is the practical path?",
    options: [
      "Product discernment; the maths answers must be wrong sometimes.",
      "Performance discernment: an AI can answer accurately and still serve its users badly; because no one can read a thousand conversations by hand, checking turns into monitoring infrastructure and sampled review.",
      "Process discernment; the designers should use a different chat interface.",
      "Diligence; the AI should have hidden its identity from students."
    ],
    answer: [1],
    explanation:
      "Performance discernment exists once you have used agency: is the AI's independent behaviour good for the people it serves? Accuracy is not enough. This kind of judgment cannot be made from inside a single chat, so at scale it becomes sampled review and monitoring, which in the build path becomes eval suites."
  },
  {
    id: "AF-16",
    course: 3,
    topic: "The D-D loop",
    type: "single",
    scenario:
      "A teaching assistant gets a lesson plan back from AI. The plan is aimed at the wrong grade level. She writes: the activities assume prior algebra that our class does not have, so students will stall in minute five; rewrite the activity section for a class with no algebra background, keeping the same learning goal.",
    question: "Which feedback pattern is this, and why does it work?",
    options: [
      "Problem and direction only; why it matters is optional and should be dropped for speed.",
      "The course pattern Problem, why it matters, direction; it gives the assistant the reader, the consequence, and the specific repair, so the next draft can actually improve.",
      "A rejection notice; the correct move was to start a brand-new lesson plan from scratch.",
      "An authority message; the correct move was to forbid the assistant from using algebra."
    ],
    answer: [1],
    explanation:
      "Describe and discern form a loop: produce, inspect, explain what must change, try again. Useful feedback names the problem, why it matters here, and the direction, unlike wrong, try again, which gives nothing to act on."
  },
  {
    id: "AF-17",
    course: 3,
    topic: "Diligence: creation",
    type: "single",
    scenario:
      "A claims assessor wants AI help detecting patterns in a folder of accident reports that include names, addresses, medical notes and policy numbers. She wants to proceed quickly and is not sure the tool is approved for this data.",
    question: "What does creation diligence require her to do first?",
    options: [
      "Proceed; the volume of data makes the question impractical.",
      "Answer the pre-flight questions: is this personal or confidential data, am I allowed to put it in this tool, who can access or keep it, is the service approved, and do legal or contractual rules apply.",
      "Ask the AI itself whether the data is allowed in the tool and follow its answer.",
      "Redact the client names only and consider the problem solved."
    ],
    answer: [1],
    explanation:
      "Creation diligence is choosing tools and data responsibly before and during the work. The easiest path is not always the responsible one. Redaction can help, but it is not magic and does not answer whether the tool itself is approved or what the contractual position is."
  },
  {
    id: "AF-18",
    course: 3,
    topic: "Diligence: transparency",
    type: "single",
    scenario:
      "A hiring coordinator uses AI to draft candidate rejection emails. The drafts are then personalised and sent to real applicants.",
    question: "Which statement matches the transparency guidance?",
    options: [
      "No disclosure is ever needed for internal processing by HR.",
      "The stronger the effect of an AI-assisted result on other people, the stronger the case for transparency; hiring communications are among the high-consideration cases.",
      "Disclosure is needed only when a journalist asks.",
      "Transparency requires publishing the full internal workflow and every prompt used."
    ],
    answer: [1],
    explanation:
      "Transparency diligence means being honest about AI's role where it affects people: academic work, hiring decisions, customer communications, medical or financial advice, professional reports and anything presented as original human work. The exact requirement depends on law, policy and professional standards, and disclosure does not mean publishing your whole workflow."
  },
  {
    id: "AF-19",
    course: 3,
    topic: "Diligence: deployment",
    type: "single",
    scenario:
      "A finance team has an AI-assisted management report ready to circulate. Every number is plausible; sources look right; the draft has been read once. Tomorrow it goes to the board.",
    question: "What does deployment diligence require before it goes out?",
    options: [
      "Nothing further, because the board expects fast updates these days.",
      "Verify facts, confirm sources exist, check calculations, review bias, confirm rights, follow policy, and ensure any numbers a decision rests on were computed rather than generated, with human approval for high-impact items.",
      "Only a spell check, since AI output is grammatically reliable.",
      "Re-run the prompt once more and compare the two drafts."
    ],
    answer: [1],
    explanation:
      "Deployment diligence is checking before the work is used or sent, and the number rule is strict: any number a decision rests on must be computed, never generated. The final test remains: would I confidently put my name on this?"
  },
  {
    id: "AF-20",
    course: 3,
    topic: "Mistakes",
    type: "single",
    scenario:
      "A junior marketer sends a polite but generic audience greeting produced by AI in ten seconds, without checking two claims in it, and without knowing which customer database was used to target the campaign.",
    question: "Which mistakes are present, in the course's language?",
    options: [
      "Only a Description mistake; the prompt was not detailed enough.",
      "Possibly all three of the classic mistakes at once: treating the first answer as final (Discernment), trusting polished output for accuracy (Discernment again on facts), and neglecting privacy or accountability questions (Diligence).",
      "No mistakes; speed is the goal of automation.",
      "Only a Delegation mistake; AI should not write greetings."
    ],
    answer: [1],
    explanation:
      "The four classic mistakes are: prompting before defining the problem, treating the first answer as final, trusting polish for accuracy, and thinking about privacy or accountability only after something goes wrong. A brief review against each D is the everyday defence."
  }
];
