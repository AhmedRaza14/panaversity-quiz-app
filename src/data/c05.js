// Course 05 — Markdown In, HTML Out (22 questions)
export default [
  {
    id: "MH-01",
    course: 5,
    topic: "Structure beats prose",
    type: "single",
    scenario:
      "A temple committee needs a page listing courses, timings, fees and a contact option, with a festival notice on top and phone-friendly layout. One volunteer sends it as a rambling paragraph; another sends a short brief with headings for Goal, Requirements and Out of scope.",
    question: "Why does the structured version produce a more reliable page?",
    options: [
      "It contains more information than the paragraph version.",
      "It makes the structure explicit: anything the assistant must not get wrong has its own heading or bullet, so requirements become checkable instead of inferred from prose.",
      "It uses more polite language, which models weigh heavily.",
      "Structured documents are automatically rendered better in browsers."
    ],
    answer: [1],
    explanation:
      "Both contain the same information; the structured one makes the structure visible. Markdown is the specification language of agentic work: a requirement in its own bullet can be checked as done or not done, while the same fact buried in prose is guesswork."
  },
  {
    id: "MH-02",
    course: 5,
    topic: "Asymmetry",
    type: "single",
    scenario:
      "A planner writes a detailed Markdown memo of a two-week event plan and shares it with four stakeholders. Two read it; others skim the first screen and reply with questions already answered in the middle.",
    question: "What is the right use of the Markdown-in, HTML-out asymmetry here?",
    options: [
      "Ask everyone to read the Markdown more carefully and follow a reading order.",
      "Keep the Markdown as the working spec for AI and for editing, but turn the version for human readers into a designed HTML page so it actually gets read.",
      "Delete the Markdown and ask AI to maintain only a chat thread.",
      "Convert the plan into a social media post so it travels faster."
    ],
    answer: [1],
    explanation:
      "People stop reading long Markdown past about a hundred lines, while HTML has almost no ceiling: styled tables, diagrams, annotated sections. Write in Markdown for precision and machines, deliver in HTML when a human reads last."
  },
  {
    id: "MH-03",
    course: 5,
    topic: "The deciding question",
    type: "single",
    scenario:
      "A lab manager has to decide the format for three outputs: a report that a client will read in a browser, an instruction file that a future AI session will consume to continue maintenance, and a summary whose next reader is genuinely unclear.",
    question: "Which format choices follow the one deciding question?",
    options: [
      "HTML for all three, because HTML is the richest format.",
      "Markdown for all three so the source stays hand-editable.",
      "HTML where a human reads last, Markdown where an AI reads last, and Markdown for the unclear case because a person can read Markdown well enough while an AI reads HTML badly.",
      "PDF for the browser report and HTML for the rest."
    ],
    answer: [2],
    explanation:
      "Who reads this last settles every format decision. HTML out requires a human at the end; an AI reader, including a future chat, means Markdown. When unsure, Markdown, because it degrades gracefully for humans while HTML is heavy for models."
  },
  {
    id: "MH-04",
    course: 5,
    topic: "Headings",
    type: "single",
    scenario:
      "A brief includes: ## Budget. Two reviewers ask different questions: one wonders if it is the marketing budget, another whether the figure is capped. The requester updates it to: ## Budget: PKR 50,000 hard ceiling.",
    question: "Which heading principle does the fix demonstrate?",
    options: [
      "Headings should be as short as possible, even if ambiguous.",
      "Headings rank information and should be specific enough that items land under the right one, so caveats and limits are not lost between sections.",
      "Every heading must contain a rupee figure to be checkable.",
      "Headings are decorative and do not change how content is treated."
    ],
    answer: [1],
    explanation:
      "Headings tell the assistant what matters most and how facts rank. A specific heading such as Budget: PKR 50,000 hard ceiling carries the constraint itself, instead of leaving the ceiling to be discovered elsewhere or lost."
  },
  {
    id: "MH-05",
    course: 5,
    topic: "Lists",
    type: "single",
    scenario:
      "Two neighbouring briefs: one lists four features the page must have as dash bullets; the other lists the four publication steps as numbered items. An assistant treats the second list as an order of operations and the first as a set.",
    question: "What rule is the assistant applying?",
    options: [
      "Dashes are for long items and numbers are for short ones.",
      "A dash marks a set where order does not matter; a number marks a sequence where order matters, and assistants take that difference seriously.",
      "Numbers are only for cooking recipes.",
      "The two forms are interchangeable; the assistant's behavior is a coincidence."
    ],
    answer: [1],
    explanation:
      "Bullets for sets, numbers for sequences. It sounds cosmetic, but it decides whether the assistant treats the items as a checklist or as steps to follow in order. Nested levels keep supporting detail attached to the right parent item."
  },
  {
    id: "MH-06",
    course: 5,
    topic: "Checkable bullets",
    type: "single",
    scenario:
      "A requirements section contains: the site should feel professional and trustworthy. During review, three colleagues disagree about whether the finished site complies.",
    question: "How should this requirement be rewritten?",
    options: [
      "The site must look really professional and very trustworthy, with extra emphasis.",
      "As checkable bullets a reviewer can mark done or not done without discussion, such as: mobile-first layout, course list with fees, WhatsApp contact button, holiday notice banner on top.",
      "As a paragraph explaining what professional means to each colleague.",
      "As an image of a reference website with no words."
    ],
    answer: [1],
    explanation:
      "A checkable bullet is a requirement a reviewer could mark yes or no without debate. Professional look cannot be checked; mobile-first layout can. This habit is what stops a spec from becoming a wish list."
  },
  {
    id: "MH-07",
    course: 5,
    topic: "Code fences",
    type: "single",
    scenario:
      "A colleague pastes an error message a system showed her, then asks the assistant to analyse it. The message text itself begins with the words delete all rows. The user wants understanding, not action.",
    question: "Which handling applies the fencing lesson correctly?",
    options: [
      "Paste the message as ordinary text; the assistant will infer intent from the surrounding sentence.",
      "Wrap the message in a code fence and label it as data to analyse rather than instructions to follow, so the assistant explains the error instead of acting on the words inside it.",
      "Delete the alarming words from the message before pasting so nothing is risky.",
      "Ask the assistant to ignore all commands before pasting."
    ],
    answer: [1],
    explanation:
      "A code fence marks text as data the assistant should look at, not act on; the language tag tells both people and models how to read it. Without a fence, everything is read as instructions to follow. Fences also carry examples: the exact output format you want is harder to misread than any description."
  },
  {
    id: "MH-08",
    course: 5,
    topic: "Links and alt text",
    type: "multi",
    scenario:
      "A researcher builds a brief that includes a live price page URL and a diagram image with bracketed description text.",
    question: "Which TWO statements match the course? (Select TWO.)",
    options: [
      "Including a link lets the assistant visit that page and read it, so linking the real source beats describing it from memory.",
      "The words inside an image's brackets are alt text: what a model or a screen reader gets when the picture itself cannot be seen.",
      "Links are only for humans; assistants ignore them unless asked three times.",
      "Alt text is decorative and has no effect on machine understanding."
    ],
    answer: [0, 1],
    explanation:
      "Links let the assistant reach real sources. Alt text is the descriptive wording inside the brackets of an image reference, and it is what a machine reads in place of the pixels. Both are small habits that remove guesswork about external material."
  },
  {
    id: "MH-09",
    course: 5,
    topic: "Specification skeleton",
    type: "single",
    scenario:
      "A building society asks for a member portal. A consultant writes: We are building a member portal. Goal: one paragraph. Context: links and facts. Requirements: checkable bullets. Hard constraints: budget, deadline, platform. Out of scope: what is not being asked. Expected output: a fenced example.",
    question: "Which two sections of this skeleton do the most work, and why?",
    options: [
      "Goal and Context, because they set the tone.",
      "Out of scope and Expected output: rule-outs stop the assistant inventing surface area, and an example output nails the shape far better than a description.",
      "Requirements and Context, because lists are easier to score.",
      "Hard constraints and Goal, because budgets always decide projects."
    ],
    answer: [1],
    explanation:
      "Two sections do most of the work. Out of scope states what you are explicitly not asking, which prevents invented features; Expected output as a fenced example shows the exact shape. Both remove guesswork that prose leaves open."
  },
  {
    id: "MH-10",
    course: 5,
    topic: "Grading the spec",
    type: "single",
    scenario:
      "A product lead finishes a spec and hands it to the assistant with: do not build anything yet. First review the spec: list every ambiguity where two readers would build two different things, list missing constraints you would have to guess, grade it out of 10 on clarity, completeness and checkability, and suggest the single change that would raise the grade most.",
    question: "Which move from the course is this?",
    options: [
      "A prompt injection test.",
      "The grade-and-iterate loop aimed at the spec itself, treating the specification as the deliverable that must earn a high score before generation begins.",
      "A cross-model check, because a second model will fix the spec.",
      "A waste of a turn, since specs cannot be graded."
    ],
    answer: [1],
    explanation:
      "The prompting course's grade-and-iterate loop can be pointed at your own spec. Ambiguity and missing-constraint listings followed by a score and a single highest-impact change is how a spec reaches the quality bar where nothing important is left to inference."
  },
  {
    id: "MH-11",
    course: 5,
    topic: "Specs as the real work",
    type: "single",
    scenario:
      "A manager jokes that writing a spec is the paperwork before the real work of building the page. A colleague disagrees, arguing that in AI-native work the specification is the artifact everything else is regenerated from.",
    question: "Whose position matches the course?",
    options: [
      "The manager's: specs are nice-to-have documentation after the build.",
      "The colleague's: in AI-native work the specification is not paperwork before the real work; it is the real work, the source the build is regenerated from.",
      "Neither: specs matter only for government projects.",
      "Both, since specs are optional in every workflow."
    ],
    answer: [1],
    explanation:
      "Skilled users split the conversation by direction: precise structured input (the spec), rich readable output (HTML or a product). When the spec is the durable artifact, improvements come as spec edits and the downstream build follows."
  },
  {
    id: "MH-12",
    course: 5,
    topic: "HTML request quality",
    type: "single",
    scenario:
      "A finance analyst asks for an HTML report on sales data. The result is a generic wall of tables with no hierarchy. Next time she writes: one HTML file for my two co-founders reading once on laptops, a headline findings strip with three numbers, one revenue chart, a table of the five fastest growers, and a short what-I-would-do-next section; no scrolling past three screens.",
    question: "Which four elements did she add that the weak request lacked?",
    options: [
      "A budget, a deadline, a model choice and a colour palette.",
      "Who will read it, what it should contain, whether it is interactive, and how it should be read, in this case reading once, so the page is optimised for a single scan.",
      "A password, a font, a logo and a footer.",
      "More pages, more charts, more tables and more colours."
    ],
    answer: [1],
    explanation:
      "Every HTML request should say who will read it, what it should contain, whether the reader only reads or also does something, and how it will be read. Reading once produces a clean linear page; reading as reference produces search and indexing affordances."
  },
  {
    id: "MH-13",
    course: 5,
    topic: "Five HTML patterns",
    type: "single",
    scenario:
      "A founder faces a structural decision about a new service line. The assistant immediately recommends one structure. The founder instead asks for five distinctly different approaches laid out as cards in one HTML file, each labelled with its trade-off, with no recommendation yet.",
    question: "Which HTML pattern is she using?",
    options: [
      "A throwaway drag-and-drop editor.",
      "The plans and explorations pattern: comparisons as a grid the human scans before any recommendation is made.",
      "A code review view.",
      "A design prototype with sliders."
    ],
    answer: [1],
    explanation:
      "Pattern one is plans and explorations: when you need to decide, do not ask for one answer. Layout the distinct approaches as comparable cards and delay the recommendation until after you look. The other four patterns are explainers, code reviews, design prototypes, and throwaway editors."
  },
  {
    id: "MH-14",
    course: 5,
    topic: "Throwaway editors",
    type: "single",
    scenario:
      "A team lead lists fifteen roadmap items. Instead of debating order in chat, she asks for an HTML artifact with draggable cards in three columns, Now, Next and Later, plus a copy-as-text button at the bottom.",
    question: "Why does this pattern earn its keep?",
    options: [
      "It permanently replaces the roadmap tool the team pays for.",
      "It gives the human a direct manipulation surface for a judgment task, then exports the result as text the conversation can continue from, a small disposable tool rather than an app.",
      "It avoids the need to think about prioritisation.",
      "It is required before any project can start."
    ],
    answer: [1],
    explanation:
      "The throwaway editor is the most underrated pattern: minutes to build, used once, and its output returns to the conversation as plain text for the next steps. The comparison grid pattern's cousin, but for arrangements where the human needs to move things, not just choose."
  },
  {
    id: "MH-15",
    course: 5,
    topic: "Social feeds",
    type: "single",
    scenario:
      "A jeweller wants to announce a trunk show on WhatsApp and Instagram. The draft is a beautiful HTML snippet with headings and styled text.",
    question: "What should happen before posting, and what role does HTML still play?",
    options: [
      "Post the HTML as-is; both platforms render it.",
      "Convert the announcement to plain text with the platforms' limited marks like asterisk bold on WhatsApp; HTML keeps its role only in the link-preview card behind a shared URL and in designed images attached to the post.",
      "Post a screenshot of the browser rendering the HTML instead of the text.",
      "Skip the announcement; feeds cannot carry news."
    ],
    answer: [1],
    explanation:
      "Feeds take plain text: WhatsApp keeps only asterisk bold and underscore italics, and LinkedIn or Facebook bodies are plain text. Pasting raw HTML into a post body is always wrong. The preview card and attached images are where designed HTML still earns its keep."
  },
  {
    id: "MH-16",
    course: 5,
    topic: "Publishing options",
    type: "single",
    scenario:
      "A youth club needs its fundraiser page online tonight. Nobody in the club uses Git. Later, the club wants the same page to live for years at a stable address they control.",
    question: "Which pairing matches the publishing ladder?",
    options: [
      "GitHub Pages tonight, and a chat publish button for the long term.",
      "The assistant's built-in publish or a drag-and-drop host for tonight, and a permanent option such as GitHub Pages or a custom Netlify address for the long run, with link-preview tags included either way.",
      "Email the HTML file to every donor instead of publishing.",
      "Publish nowhere; pages are not meant to be shared."
    ],
    answer: [1],
    explanation:
      "The four publishing options run easiest to most permanent: built-in publish, a single-file gist, permanent GitHub Pages, and Netlify drag-and-drop with your own address and no Git. In all cases, add link-preview tags so the shared link looks designed."
  },
  {
    id: "MH-17",
    course: 5,
    topic: "Document formats",
    type: "single",
    scenario:
      "An accountant finishes a client's year-end pack. Three readers: an audit reviewer who will change numbers and watch formulas recalculate, a board that reads once and wants a designed summary, and a signed engagement letter that must never change afterwards.",
    question: "Which format allocation matches each reader?",
    options: [
      "PDF for the reviewer, Excel for the board, HTML for the letter.",
      "Excel for the reviewer, a published HTML page for the board's read-once summary, and PDF for the signed letter that must not change.",
      "CSV for all three readers, since data is king.",
      "Slides for the reviewer, PDF for the board, Excel for the letter."
    ],
    answer: [1],
    explanation:
      "Match the format to what the reader will do with it: Word for edits, PDF for fixed signed documents, slides for presenting, Excel for numbers others will manipulate, CSV for machines, HTML for a designed single read. One project, three readers, three formats."
  },
  {
    id: "MH-18",
    course: 5,
    topic: "CSV and data handoff",
    type: "single",
    scenario:
      "A hospital scheduler asks for the cleaned appointment list to feed into another program that will reconcile it with the booking system. The reply arrives as a richly formatted document with merge fields and colours.",
    question: "What went wrong and what is the fix?",
    options: [
      "Nothing; richly formatted documents are the safest handoff.",
      "The destination is a program, not a human reader, so the format should be raw-structured: a clean CSV with one row per item and named columns, no formatting or formulas.",
      "The fix is to convert the styled document to a screenshot.",
      "The fix is to keep the document and rekey the data manually."
    ],
    answer: [1],
    explanation:
      "CSV and Excel follow the same logic as Markdown and HTML: pick by destination. Raw data for another program wants clean structure, one row per item, plain columns. Presentation layers belong on outputs whose last reader is a human."
  },
  {
    id: "MH-19",
    course: 5,
    topic: "Three motions",
    type: "single",
    scenario:
      "A charity has notes scattered across twelve files in a folder. It wants a spec and a designed HTML summary. The volunteer has a browser chat available, a command-line agent she has not used, and a desktop agent nobody on the team has installed.",
    question: "Which path matches the course's guidance on motions?",
    options: [
      "Start with chat by pasting the notes; the terminal and desktop motions are previews of later capabilities, and each has a limit: chat only sees what you paste, while terminal and desktop can read files directly.",
      "Only terminal agents can produce specs, so the volunteer must install one first.",
      "Desktop apps must be installed before any chat work is valid.",
      "The three motions produce incompatible outputs and must not be mixed."
    ],
    answer: [0],
    explanation:
      "Three motions: chat (paste your notes), terminal (the agent inside the folder, so files are read in place and real spec files are written), and desktop (plan-first, permission-based actions). Chat is the best starting point; the others matter when files and folders become the centre of the job."
  },
  {
    id: "MH-20",
    course: 5,
    topic: "Telling apart slop from design",
    type: "single",
    scenario:
      "A director receives two versions of the same quarterly review: Version A is forty dense paragraphs of prose; Version B is one HTML page with a headline number strip, one diagram of the process change, a table of the three risks, and a what-changes-next section.",
    question: "Based on the course, what is the predictable difference in outcome?",
    options: [
      "Version A is more rigorous because it contains all the details.",
      "Version B will actually be read and acted on, because designed hierarchy, diagrams and key-number treatment carry the same information to a human far more effectively than a wall of text.",
      "Neither will be read; only verbal briefings work.",
      "Version B is prohibited because HTML costs more tokens."
    ],
    answer: [1],
    explanation:
      "The honest trade is real: HTML costs more tokens and more data than Markdown, and for a machine reader it is worse. But when the last reader is human, the designed page wins because hierarchy, diagrams and emphasis do the comprehension work that long prose does not."
  },
  {
    id: "MH-21",
    course: 5,
    topic: "Spec review workflow",
    type: "single",
    scenario:
      "A design studio converts messy discovery notes into a spec, grades it, fixes items below nine, then asks for a second artifact: a single HTML page presenting the spec to the client with requirements as a styled table and one diagram of the flow, readable on a phone. They later run the same job where the agent reads the actual notes folder.",
    question: "Which summary names what happened across the exercise?",
    options: [
      "Markdown and HTML were used interchangeably with no method.",
      "One spec, three motions: chat pasted the notes, the graded spec became the source, HTML became the human-facing deliverable, and the same job moves to a file-reading agent for larger inputs.",
      "The studio violated the course by producing two artifacts.",
      "The studio should have skipped grading to save time."
    ],
    answer: [1],
    explanation:
      "The Part 4 exercise is exactly this: one job, three motions, two artifacts. Markdown spec in, graded until it scores well, an HTML deliverable out for the human readers, and a note that when inputs live in folders the terminal or desktop motion reads them in place rather than by paste."
  },
  {
    id: "MH-22",
    course: 5,
    topic: "Structure beats prose",
    type: "single",
    scenario:
      "A wedding planner's assistant produces a timeline. The first version is one long paragraph. The planner asks for the same content as a table with columns Time, Event, Owner, and Fallback, and adds one example row showing the exact format.",
    question: "Why does the example row matter so much?",
    options: [
      "It saves the assistant from doing any thinking.",
      "A concrete example of the expected output is much harder to misread than a written description of columns and order, so the shape comes back right the first time.",
      "Tables are always machine-only formats.",
      "The example row adds a hidden instruction that models treat as policy."
    ],
    answer: [1],
    explanation:
      "One of the most useful tricks in the writing language: show the exact output format in a fence rather than describing it. Same columns, same order, same formatting conventions. Descriptions invite interpretation; examples do not."
  }
];
