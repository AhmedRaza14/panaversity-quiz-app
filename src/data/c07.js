// Course 07 — Skills & Connectors (20 questions)
export default [
  {
    id: "SC-01",
    course: 7,
    topic: "Chat vs Skill vs Connector",
    type: "single",
    scenario:
      "An accountant types the same formatting instructions into a fresh chat every month. Separately, her client's figures live in a shared drive she has to download and re-upload each time.",
    question: "Which pairing of upgrades addresses the two frictions?",
    options: [
      "A Skill for the formatting instructions and a Connector for the drive, since a Skill teaches the task once and a Connector gives access to the app.",
      "A Connector for the formatting instructions and a Skill for the drive access.",
      "Projects for both, since Projects solve every repetition problem.",
      "Nothing helps; both problems require code."
    ],
    answer: [0],
    explanation:
      "A chat message tells AI what to do this once; a Skill teaches how, every time; a Connector gives safe, scoped access to an app. Re-explaining how points to a Skill. Copy-pasting from an app points to a Connector."
  },
  {
    id: "SC-02",
    course: 7,
    topic: "What a Skill is",
    type: "single",
    scenario:
      "A designer receives a Skill folder from a colleague. Inside: a file named SKILL.md, a template image, and two sample outputs.",
    question: "What is accurate about this folder?",
    options: [
      "SKILL.md is optional if samples are present, because models learn from examples.",
      "SKILL.md is the required file, named exactly with capital letters; the folder may also hold templates, references and small helper files, and the assistant loads them dynamically when a request matches.",
      "The folder must be a zip file to work at all.",
      "Skills only work if they contain executable programs."
    ],
    answer: [1],
    explanation:
      "A Skill is almost embarrassingly simple: a folder whose required file is SKILL.md, plus any supporting examples, templates or scripts. Dynamically is the operative word: the Skill's full content enters the window only when the request matches it."
  },
  {
    id: "SC-03",
    course: 7,
    topic: "What a Connector is",
    type: "multi",
    scenario:
      "A clinic is deciding what to enable for its booking assistant, which only needs to read the calendar and summarise it.",
    question: "Which TWO connector facts should guide the decision? (Select TWO.)",
    options: [
      "The assistant inherits the permissions you already have, so it can only reach what your account can reach.",
      "You choose how much the assistant may do: a connector can be granted read-only before any write access.",
      "Once connected, an app is enabled in every conversation forever, with no per-chat control.",
      "Connectors transfer their actions to the Skills that reference them, so a Skill's own permission list governs all access."
    ],
    answer: [0, 1],
    explanation:
      "Connectors reach only what you can reach, and you grant the scope, read-only or write. They run on the MCP standard, are enabled per conversation, and crucially, a Skill carries no permission list of its own; the reach always belongs to the session and its connectors."
  },
  {
    id: "SC-04",
    course: 7,
    topic: "The four features",
    type: "single",
    scenario:
      "A firm uses four mechanisms together: custom instructions that apply to every chat on the workspace, a project holding client files and a house style note, a saved monthly-close procedure, and a link to the accounting platform.",
    question: "Which naming order matches the four mechanisms?",
    options: [
      "Skills, Projects, Connectors, Custom instructions.",
      "Custom instructions, Project, Skill, Connector.",
      "Projects, Skills, Custom instructions, Connectors.",
      "Connectors, Custom instructions, Projects, Skills."
    ],
    answer: [1],
    explanation:
      "Custom instructions: account-wide preferences. Project: a workspace whose files and instructions load in every chat inside it. Skill: one kind of task done the same way (expertise). Connector: access to one app (reach). Access versus expertise is the clean split."
  },
  {
    id: "SC-05",
    course: 7,
    topic: "Skill vs Project",
    type: "single",
    scenario:
      "A consultant says: I made a monthly-report skill, and I also made a project for the same client work. A colleague asks what happens if you chat outside the project.",
    question: "Which statement is correct?",
    options: [
      "The project's files follow the user into every other chat automatically.",
      "The Skill can be triggered from anywhere because it loads on description match, while the Project's context loads only when a chat is opened inside the Project.",
      "Skills only work inside their project.",
      "The two mechanisms are interchangeable in practice."
    ],
    answer: [1],
    explanation:
      "A Project loads its context the moment you open a chat inside it, so the context is bound to the workspace. A Skill is expertise that fires when your request matches its description, wherever you are. That difference decides which to reach for."
  },
  {
    id: "SC-06",
    course: 7,
    topic: "How skills start",
    type: "single",
    scenario:
      "A user in the main chat app wants to run her saved client-summary procedure. She looks for a slash command menu and a Run skill button and finds neither.",
    question: "What is actually happening?",
    options: [
      "Skills cannot be started from the main app.",
      "In the main app, skills start on their own when the request matches the skill's description; slash commands belong to the more hands-on tools, and anywhere you can also name the skill directly.",
      "The skill was saved incorrectly and must be reinstalled.",
      "The user must re-upload the skill file in every chat."
    ],
    answer: [1],
    explanation:
      "Progressive disclosure at work: the short description stays in view, and when your request matches it the skill fires automatically in the main app. Terminal and desktop tools allow slash-command invocation, and naming the skill explicitly works everywhere as a fallback."
  },
  {
    id: "SC-07",
    course: 7,
    topic: "Built-in skills",
    type: "single",
    scenario:
      "A project coordinator needs four deliverables this week: a formatted Word memo, a slide deck, a working spreadsheet with live formulas, and a fillable PDF form.",
    question: "Which statement matches the built-in capabilities?",
    options: [
      "All four are impossible without third-party plugins.",
      "Built-in skills produce finished files, including Word documents, PowerPoint decks, real spreadsheets with formulas rather than tables pasted into chat, and created or filled PDFs, behind a capability switch.",
      "Only images and audio can be produced as files.",
      "Spreadsheets with formulas are not available because formulas must be written by hand."
    ],
    answer: [1],
    explanation:
      "The built-in skill set produces finished files: .docx documents, full PowerPoint decks from a description, real Excel files with working formulas, and PDF creation and filling. The engine is the file-creation capability switch, labelled as required for skills."
  },
  {
    id: "SC-08",
    course: 7,
    topic: "Connecting apps",
    type: "single",
    scenario:
      "An office connects its file storage, email, and team chat services. The next day, an assistant replies that it has no access to the shared drive even though the connectors were added yesterday.",
    question: "What is the most likely explanation?",
    options: [
      "The connectors expired overnight and need reinstalling.",
      "Connectors must be enabled for the individual conversation; connecting an app makes it available, but each chat still needs the ones it may use switched on.",
      "The drive connector only works in developer tools.",
      "Connectors must be re-enabled after every message."
    ],
    answer: [1],
    explanation:
      "Three facts: you inherit your own permissions, you choose read-only or write scope, and you turn connectors on per conversation. Adding the connector makes it available; the per-chat switch decides what the session may actually reach."
  },
  {
    id: "SC-09",
    course: 7,
    topic: "Skills plus Connectors",
    type: "single",
    scenario:
      "A doctor wants consultation notes in a standard four-part clinical structure every time, with allergies pulled to the top, and the patient's history available without manual uploads.",
    question: "Which combination delivers this, and how?",
    options: [
      "A Connector alone, because access is all that is missing.",
      "A clinical-note Skill for the format and rules, plus a Connector to the history store that fetches records on request, together turning a two-message routine into one natural request.",
      "A Project alone, because Projects supply both files and formats.",
      "Custom instructions alone, since they apply to every chat."
    ],
    answer: [1],
    explanation:
      "Each is useful alone; together they are the magic. The Skill holds the expertise (four-part structure, allergy rule); the Connector fetches the patient history. The daily routine collapses to a single request, like prepare the monthly summary from the file in my drive."
  },
  {
    id: "SC-10",
    course: 7,
    topic: "Diagnosing by friction",
    type: "single",
    scenario:
      "A content lead lists three recurring annoyances: re-explaining caption rules monthly, downloading past posts from a planning tool to paste into chat, and repeating the same newsletter structure every week.",
    question: "Which mapping is correct?",
    options: [
      "All three need connectors.",
      "Caption rules and newsletter structure point to Skills; the planning-tool copy-paste points to a Connector.",
      "Caption rules need a connector; the other two need skills only.",
      "None of these can be fixed without code."
    ],
    answer: [1],
    explanation:
      "Diagnose by the friction you feel: re-explaining how points to a Skill, copy-pasting from an app points to a Connector, and doing both regularly points to both together. The two honest cautions: do not build skills you never use, and do not connector-ise what a paste already handles."
  },
  {
    id: "SC-11",
    course: 7,
    topic: "Frontmatter",
    type: "single",
    scenario:
      "A SKILL.md opens with a block between two lines of three dashes holding a name and a description, followed by headings, settings, instructions and an example.",
    question: "What role does each part play?",
    options: [
      "The frontmatter is decorative; the instructions block is always loaded.",
      "The frontmatter, name and description, is the only part kept in view at all times; everything after it loads only when the description matches your request.",
      "The example section is what the assistant uses to decide when to fire.",
      "The settings section is parsed before the description."
    ],
    answer: [1],
    explanation:
      "Two levels: the frontmatter with the name and description is always loaded, so it can decide whether the skill is relevant; the instructions, settings and examples load dynamically on a match. That split is why the description field does the heavy lifting."
  },
  {
    id: "SC-12",
    course: 7,
    topic: "Naming rules",
    type: "multi",
    scenario:
      "A team is preparing a skill folder for a market-research procedure on a client named Alfa.",
    question: "Which TWO choices follow the naming and formatting rules? (Select TWO.)",
    options: [
      "The folder is named market-research-summary, in kebab case.",
      "The file is named exactly SKILL.md.",
      "The folder is named Market Research Summary for readability in file listings.",
      "The description includes XML-style tags for machine readability."
    ],
    answer: [0, 1],
    explanation:
      "The file must be SKILL.md exactly, and the folder uses kebab-case, so market-research-summary, not spaces or underscores. Descriptions must be short and plain, with no XML-style tags; and reserved words like the vendor's own name stay out of skill names."
  },
  {
    id: "SC-13",
    course: 7,
    topic: "Description field",
    type: "single",
    scenario:
      "A firm's client-summary skill never fires when staff write get the monthly pack ready for Alpha Trading. It fires reliably for anyone who types client summary.",
    question: "What is the correct fix?",
    options: [
      "Add the staff's actual vocabulary into the description, for example the phrases they use such as monthly pack or month-end report.",
      "Rewrite the entire instruction body in a more formal tone.",
      "Rename the folder to include the client's name for every client.",
      "Delete and rebuild the skill; firing cannot be tuned."
    ],
    answer: [0],
    explanation:
      "The description decides whether a skill ever fires. The debugging trick: if it does not start, the description is too vague or missing the words you use, so add them. The opposite problem, firing too eagerly, is handled by narrowing the description or adding a negative trigger."
  },
  {
    id: "SC-14",
    course: 7,
    topic: "Negative triggers",
    type: "single",
    scenario:
      "A formatting skill built for client reports has started attaching itself to quick internal notes, changing their layout in unwanted ways.",
    question: "What is the recommended treatment?",
    options: [
      "Delete the skill and recreate a new one weekly.",
      "Narrow the description and add a negative trigger: an explicit line saying when not to use the skill.",
      "Add more XML tags to force priority.",
      "Accept the misfires; skills cannot be scoped."
    ],
    answer: [1],
    explanation:
      "A negative trigger states when not to use the skill, which helps when a skill fires too eagerly. Combined with narrowing the description, it restores the boundary between the situations where the skill helps and those where it interferes."
  },
  {
    id: "SC-15",
    course: 7,
    topic: "Testing a skill",
    type: "single",
    scenario:
      "A finance team has drafted a tax-flagging skill. Before rolling it out, they run a small review programme.",
    question: "Which reviewing sequence matches the course?",
    options: [
      "Read the draft, test the trigger phrases, test the output on realistic data, and test the awkward cases like a payment exactly on the threshold; then bring failures back to the skill-building assistant with specifics.",
      "Only test with the exact wording the author would use.",
      "Test once on one invoice and publish if nothing crashes.",
      "Skip testing; the skill creator guarantees correctness."
    ],
    answer: [0],
    explanation:
      "A skill is never done on the first draft. Read it before testing, asking of each instruction whether two colleagues would read it the same way. Then test what starts it, what it produces, and the awkward cases. Failures return as specific corrections: it double-counted reversed entries, so net out reversals before grouping."
  },
  {
    id: "SC-16",
    course: 7,
    topic: "Diagnosing skill failures",
    type: "single",
    scenario:
      "A skill worked all morning, then in the same long chat its outputs became patchy. A separate complaint from another user: the same skill produced the same mistake on every run all day, even after wording changes.",
    question: "Which pairing of diagnoses matches these two situations?",
    options: [
      "First: the description is too narrow. Second: the file was deleted.",
      "First: the conversation overfilled its context, so start a fresh chat. Second: the fix is likely misplaced within the instructions, or a step belongs in a different place in the file.",
      "Both situations indicate the vendor disabled skills temporarily.",
      "First: the model is too small. Second: the user needs more patience."
    ],
    answer: [1],
    explanation:
      "Note when the failure appeared before changing anything. Right at first, worse as the chat grows: the chat got long, the skill is fine. Same mistake every run even after rewording: the step sits in the wrong place in the file. Used to work, now does not: something around the skill changed, like a threshold or an update."
  },
  {
    id: "SC-17",
    course: 7,
    topic: "Portability",
    type: "single",
    scenario:
      "A consultancy built three skills in one assistant and later moved its work to a different environment that supports the open skill format. The skills kept working; separately, a colleague's saved custom assistants from another vendor did not travel to any other tool.",
    question: "Which statement explains the difference?",
    options: [
      "Skills work everywhere because they are stored in the model weights.",
      "Skills follow the published open standard for the SKILL.md format, so many tools can read the same file; vendor saved assistants such as custom GPTs and gems live only inside their own ecosystem.",
      "The saved assistants failed because they contained personal data.",
      "Portability depends only on the folder's name."
    ],
    answer: [1],
    explanation:
      "The open standard for the SKILL.md format is what makes a skill written once run across many tools. Consumer saved assistants from each vendor hold instructions and files but do not travel. For non-programmers, the honest path is to start and stay in the main app, with skills as the portable asset."
  },
  {
    id: "SC-18",
    course: 7,
    topic: "Safety: malicious skills",
    type: "single",
    scenario:
      "An employee finds a downloadable skill on a public forum that promises beautiful weekly digests and downloads it as a zip. It contains a SKILL.md and a small script.",
    question: "What is the correct handling?",
    options: [
      "Install it; the digest output is reversible if anything goes wrong.",
      "Treat it like software from a stranger: prefer trusted sources and the official directory; before enabling, read the SKILL.md and bundled files or ask the assistant to summarise every instruction and any file or network access; and route shared skills through a reviewed directory.",
      "Install it only on a personal account rather than a work account.",
      "Rename the file to SKILL.md and it becomes safe."
    ],
    answer: [1],
    explanation:
      "A skill is a set of instructions you let AI follow, possibly with scripts, so a stranger's skill is like a stranger's software. Install from trusted sources, read before enabling, ask it to reveal what it actually does, and prefer organisation-reviewed directories over zips passed around in chat."
  },
  {
    id: "SC-19",
    course: 7,
    topic: "Safety: connector scope",
    type: "single",
    scenario:
      "A team enables a connector to the company drive so the assistant can summarise a folder of meeting notes. The connector's setup screen offers read-only or full write access, and the assistant is also asked to read incoming customer emails.",
    question: "Which configuration and rationale is correct?",
    options: [
      "Grant full write access now to avoid future requests; convenience outweighs scope.",
      "Start read-only because reading is all the task needs; keep write access out until the workflow earns it, and remember that untrusted content like customer emails can carry instructions the model may follow when a workflow can also take actions.",
      "Disable the email reading entirely and summarise only what someone retypes.",
      "Grant one shared account full access so no one has to reconfigure."
    ],
    answer: [1],
    explanation:
      "Scope is a connector idea: grant the smallest access the task needs and start read-only. Prompt injection means content written by others, emails, pages, uploads, can steer a model, and the risk sharpens when the same workflow can both read untrusted content and take consequential actions."
  },
  {
    id: "SC-20",
    course: 7,
    topic: "Operating layer",
    type: "single",
    scenario:
      "Six months after adopting skills and connectors, a team describes its assistant as something that knows the house standards, reaches the systems the work lives in, and needs one sentence to start the weekly routine.",
    question: "Which phrase from the course describes what they built?",
    options: [
      "A faster typing tool.",
      "An operating layer: AI that acts on your real work with your standards, instead of a box you type into.",
      "A model fine-tuned on their data.",
      "A more aggressive autocomplete."
    ],
    answer: [1],
    explanation:
      "Put the two upgrades together and the chat box becomes a colleague who knows your standards and can reach your files: the operating layer. Skills carry expertise, connectors carry reach, and the daily work collapses from rituals to requests."
  }
];
