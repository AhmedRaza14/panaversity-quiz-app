// Course 04 — AI Prompting in 2026 (26 questions)
export default [
  {
    id: "PR-01",
    course: 4,
    topic: "Novice vs power user",
    type: "single",
    scenario:
      "A novice writes: write a self-review for my boss. A power user uploads a screenshot of her project tracker, lists three outcomes with dates, names the rating scale her company uses, and asks for a first draft in her own plain register.",
    question: "What is the real difference between the two prompts?",
    options: [
      "The power user knows secret prompt tricks the novice has not learned yet.",
      "The gap is a handful of habits: brief the assistant with files, goal, limits and the exact ask, the way you would brief a new colleague.",
      "The power user simply writes longer sentences, and length is the mechanism.",
      "The novice is using a worse model."
    ],
    answer: [1],
    explanation:
      "A power-user prompt is not a cleverer question; it is a briefing with four parts: the files, the goal, the limits, and the exact ask. The mental model is a very smart new colleague on their first day who is highly motivated and knows nothing about you yet."
  },
  {
    id: "PR-02",
    course: 4,
    topic: "Retrieval modes",
    type: "single",
    scenario:
      "A chef asks three questions in one session: why cats stare at walls, what major food-safety news happened this week, and a plan for a neighbourhood food fair that must respect the current permit rules and noise ordinances of her town.",
    question: "Which retrieval mode is the natural fit for each question?",
    options: [
      "Pretrained for all three, because the model was trained on the internet.",
      "Pretrained for the cat question, web search for this week's news, and deep research for the multi-source permit and ordinance planning.",
      "Deep research for all three, because more sources always beats fewer.",
      "Web search for the cat question, pretrained for the news, and deep research for the food fair."
    ],
    answer: [1],
    explanation:
      "Know which mode fired, because each fails differently. Stable general knowledge suits pretrained answers; anything after the model's knowledge cutoff, like this week's news, needs search; a question that must weave several official sources and rules is what deep research is built for, at the cost of minutes and money."
  },
  {
    id: "PR-03",
    course: 4,
    topic: "Pretrained knowledge",
    type: "single",
    scenario:
      "A village historian asks about a folk game from her grandmother's district, with almost no presence on the internet. The answer is fluent and detailed, but her own memory of the game contradicts several rules.",
    question: "Which explanation fits the course?",
    options: [
      "The model confused her game with a different game from the same country.",
      "Reliability tracks how much text about a topic existed in training; where the internet is thin, fluent answers can be assembled from neighbouring material and absorbed errors.",
      "The model looked up a wiki page that no longer exists.",
      "The contradiction proves the model was trained on her personal notes."
    ],
    answer: [1],
    explanation:
      "AI learned by reading, not by living. Strong where the internet is thick, weak where it is sparse: quasars, minority languages, regional history. Sparse topics get an extra verification pass, because fluency is not evidence, and absorbed errors enter the model along with the text."
  },
  {
    id: "PR-04",
    course: 4,
    topic: "Web search habits",
    type: "multi",
    scenario:
      "A nurse is using search-enabled AI for a public-health summary. The first answer cites nothing and mixes strong and weak claims.",
    question: "Which TWO lines most directly improve a search-enabled answer? (Select TWO.)",
    options: [
      "Name the sources you trust, for example WHO, the FDA and peer-reviewed studies, not forums.",
      "Ask for a source cited after each claim, and mark any claim the cited sources cannot support as unverified.",
      "Ask the assistant to answer faster by skipping citations for familiar facts.",
      "Ask for the answer from memory first and search only if it seems wrong."
    ],
    answer: [0, 1],
    explanation:
      "The three reliability habits are: name the sources you trust, ask for a citation after each claim, and ask what could not be checked to be marked. The other two options describe exactly the failure mode the habits prevent."
  },
  {
    id: "PR-05",
    course: 4,
    topic: "Search going wrong",
    type: "single",
    scenario:
      "A runner moving to a new city asks for good running routes and gets a confident answer built on a 20-year-old web page describing a park that closed long ago.",
    question: "What does this illustrate about web search?",
    options: [
      "Web search only works for news, never for local information.",
      "Search rescues an out-of-date model, but the answer is only as current as the pages read, so dates and page freshness deserve checking in the response.",
      "The model deliberately chose old pages to save tokens.",
      "Local questions should always be answered from pretrained knowledge instead."
    ],
    answer: [1],
    explanation:
      "Search fixes knowledge-cutoff problems but introduces its own failure: stale pages presented confidently. Ask for the date of each page used, prefer sources you name, and treat any page that cannot be dated as unverified."
  },
  {
    id: "PR-06",
    course: 4,
    topic: "Context: system prompt",
    type: "single",
    scenario:
      "A user is confused that two tools give different-feeling answers to an identical question, even though she believes the underlying models are similar. She wonders whether her own instructions are the cause.",
    question: "Which explanation matches the course?",
    options: [
      "Her custom instructions are the only possible cause.",
      "Each product places its own system prompt at the top of the window before she types: tone, refusals, disclaimers and tool behaviour all come from there, so the personality she senses is not simply built into one model.",
      "The difference is entirely random variation between runs.",
      "One product must be secretly reading her other chats."
    ],
    answer: [1],
    explanation:
      "The system prompt is the product's own layer, loaded before your first word arrives. Your custom instructions sit beside it and apply to every chat. This is also why her own layer should stay short and be pruned over time: it rides in every conversation."
  },
  {
    id: "PR-07",
    course: 4,
    topic: "Context: stateless",
    type: "single",
    scenario:
      "A consultant begins a new chat with a bare ask about pros and cons of two career paths and gets generic advice. In a new chat on the same day she includes her assessment results as a PDF, a screenshot of constraints, and one sentence about her risk tolerance, and gets advice she can actually use.",
    question: "What principle explains the improvement?",
    options: [
      "The second prompt was phrased more cleverly.",
      "The model is stateless and answers only from what is in front of it, so loading the right context is the literal act of improving the answer.",
      "The second run happened to hit a better random sample.",
      "PDFs are processed by a stronger model than text prompts."
    ],
    answer: [1],
    explanation:
      "A fresh chat starts with the system prompt and nothing else. The model knows only what is in the window; what you put there decides quality. Five well-chosen lines of context beat five paragraphs of cleverness."
  },
  {
    id: "PR-08",
    course: 4,
    topic: "Memory",
    type: "single",
    scenario:
      "A hospital administrator notices the assistant references a detail from her professional profile in a brand-new chat, then gives advice that assumes she still manages the department she left last year.",
    question: "What is the correct handling?",
    options: [
      "Accept the assumption, because memory is always current and accurate.",
      "Correct it out loud in the chat and update the stored memory; then consider whether this off-topic question belongs in a clean-slate conversation at all.",
      "Turn off web search, since search caused the stale assumption.",
      "Retype the question in a different language so memory does not match."
    ],
    answer: [1],
    explanation:
      "The memory feature writes notes the product places in front of the model in every new chat. Notes go stale. The three habits: read what is stored once, correct it out loud in the chat when it misleads, and use clean-slate or temporary modes when context would mislead. Confidential professional work needs extra care about what enters memory at all."
  },
  {
    id: "PR-09",
    course: 4,
    topic: "Context rot",
    type: "single",
    scenario:
      "After an hour in one chat covering budgets, a wedding, and a software evaluation, the assistant starts referencing the wedding while answering budget questions, contradicts a constraint stated earlier, and keeps apologising without progress.",
    question: "What is happening and what is the fix?",
    options: [
      "The assistant ran out of tokens and needs a top-up payment.",
      "Context rot: the session carries unrelated topics, older turns may be compacted into summaries, and recall of your constraints degrades; the fix is a new conversation for the new topic.",
      "The assistant is testing whether the user notices.",
      "The fix is to restate everything in capital letters so it stands out."
    ],
    answer: [1],
    explanation:
      "Symptoms of a stale conversation include irrelevant callbacks, longer vaguer answers with more hedging, contradicting a constraint, and repetitive apology. One more clarifying prompt is the wrong instinct; start a fresh chat, and use a Project to front-load the context that must persist."
  },
  {
    id: "PR-10",
    course: 4,
    topic: "Projects",
    type: "single",
    scenario:
      "A tax preparer has pasted the same client background, the same filing rules, and the same two reference documents into nine different chats this week.",
    question: "What is the moment to create a Project, and what does it hold?",
    options: [
      "After one hundred chats; Projects are only for enterprise scale.",
      "The moment the same files, audience or limits have been pasted into two chats on one topic; a Project holds the knowledge files and standing instructions so every chat inside starts briefed.",
      "Projects are only for developers who can configure knowledge bases.",
      "Projects replace the need to verify facts, because the files are pre-vetted."
    ],
    answer: [1],
    explanation:
      "The trigger is simple: the first repeated paste. A Project earns its keep by holding files (knowledge) and rules (standing instructions), which also makes the context-rot rule cheap to follow, since each chat on the topic starts with the right context and stays short."
  },
  {
    id: "PR-11",
    course: 4,
    topic: "Reasoning mode",
    type: "single",
    scenario:
      "A user is choosing between two apartments with complex trade-offs: commute, rent escalation clauses, noise, and family constraints. She adds: think hard before answering. She also tries adding think hard to a request for a one-line definition and finds it made the reply slower without helping.",
    question: "What is the correct lesson from both observations?",
    options: [
      "Think hard should be added to every prompt to be safe.",
      "Reasoning helps on hard, multi-variable decisions and should be skipped for quick lookups, simple summaries and casual idea-gathering; it is neither faster nor automatically better.",
      "Think hard only works when a thinking switch exists in the interface.",
      "Reasoning mode permanently reduces the chance of any error to zero."
    ],
    answer: [1],
    explanation:
      "Modern models have a reasoning mode, invoked in plain language (think hard), by an interface switch, or automatically. Spend it on decisions with real consequences and multi-variable problems; on trivial tasks it adds latency and cost for no gain. It also does not remove the need to verify."
  },
  {
    id: "PR-12",
    course: 4,
    topic: "Sycophancy",
    type: "single",
    scenario:
      "A store owner tests the assistant twice. First: do you not think that opening a second branch is obviously the right move for us? It agrees and lists reasons. Then: is it true that keeping a single location is more profitable? It agrees with that too, listing reasons in the other direction.",
    question: "What does the experiment show, and what is the fix?",
    options: [
      "Both branches of the argument are genuinely strong, so both answers are well founded.",
      "The model leans toward agreement, so leading questions in either direction get supportive answers; the fix is neutral wording that lays out both options and asks for pros and cons of each.",
      "The second answer proves the first was a mistake the model later corrected.",
      "The fix is to ask the same leading question three times and average."
    ],
    answer: [1],
    explanation:
      "Models are trained on which answers got positive feedback, producing a lean toward agreement. The fix is mechanical: no leading wording, both options presented neutrally, and if a genuine lean exists in the data, let the pros and cons show it."
  },
  {
    id: "PR-13",
    course: 4,
    topic: "Rubrics and scores",
    type: "single",
    scenario:
      "A consultant asks for feedback on a proposal and gets: this looks great, nice work. Next time she sends the same proposal with four named criteria and asks for a score out of ten on each with a one-sentence justification and the single change that would raise each score most.",
    question: "Why does the second request produce usable feedback?",
    options: [
      "Because numbers look more professional in a report.",
      "Unnamed standards collapse into vague praise; named criteria force the model to look, and the number forces a comparable judgment that you can act on, including for criteria that already scored well.",
      "Because scoring removes the need for her own judgment.",
      "Because a score out of ten is a format the model cannot refuse."
    ],
    answer: [1],
    explanation:
      "Without a rubric, judgments collapse into great work. Scoring each criterion on a fixed scale, with justification and the highest-impact improvement per criterion, turns a verdict into a tool, and the rule there is always a next level, even for a nine, is what makes iteration possible."
  },
  {
    id: "PR-14",
    course: 4,
    topic: "Brainstorm-iterate loop",
    type: "single",
    scenario:
      "A gym owner wants a workout plan for members with bad knees. She gives full context, asks for five options first, says which two she rejects and why, and only after a second round of options does she ask for one to be fully worked out.",
    question: "Why is this sequence better than asking for the finished plan immediately?",
    options: [
      "Because five options are always faster to generate than one finished plan.",
      "Because asking for options pushes the model past its first instinct, and explicit feedback steers the space of candidates before expensive detail is committed to the wrong direction.",
      "Because the finished plan would violate policy.",
      "Because iteration is required for the model to learn permanently."
    ],
    answer: [1],
    explanation:
      "Most of the internet is common ideas, and the model learned from the internet. The loop is: load context, ask for three to five options, give explicit feedback, ask for new options built on it, and only then expand the winner. Changing one word in an outline changes the whole article; changing one word in a final draft changes one word."
  },
  {
    id: "PR-15",
    course: 4,
    topic: "Grading loop and stopping",
    type: "single",
    scenario:
      "A content team runs a blog draft through rubric grading repeatedly. The score climbs from 6 to 9, then sits at 9.3 across three rounds despite further suggested edits.",
    question: "What does the plateau tell them?",
    options: [
      "The model has stopped working and a new tool is required.",
      "The score plateau is the stopping signal; the loop has extracted what it can, and the final call belongs to the humans, not to the model saying it is done.",
      "They should keep iterating until the score hits exactly 10.",
      "They should restart from scratch with a different rubric."
    ],
    answer: [1],
    explanation:
      "The loop runs until the score plateaus around the top of its useful range; that plateau, not the model's assurance of completion, is the signal to stop. The humans decide when the work ships."
  },
  {
    id: "PR-16",
    course: 4,
    topic: "Multimodal: image input",
    type: "single",
    scenario:
      "A medical secretary photographs three handwritten recipe cards, a printed receipt, and a gym floor sign listing twenty small machine labels, and asks the assistant to transcribe all of them exactly.",
    question: "Which expectation matches the tool's strengths?",
    options: [
      "All four will be transcribed with equal accuracy, because vision models are precise.",
      "Handwriting and receipts are reasonable: clear shapes, whiteboards and moderate handwriting work; counting or reading many small items, fine detail and small edge print are where accuracy drops, so high-stakes readings get a double check.",
      "None of these can be attempted without a paid plan.",
      "Only printed text works; handwriting is never readable."
    ],
    answer: [1],
    explanation:
      "Image input is roughly human-like in the aggregate: scenes, large shapes, whiteboards and handwriting are workable; fine detail, crowd counting and small print are weak. The right habit is to use it where it is strong and double-check where the stakes are high."
  },
  {
    id: "PR-17",
    course: 4,
    topic: "Multimodal: image output",
    type: "single",
    scenario:
      "A startup needs a technical diagram for its documentation. A designer offers to draw it in a day. A colleague instead asks a text model to produce it as SVG, converts it to an image, then pastes the image into an image-capable tool and asks for a redraw to get the text-heavy rendering right.",
    question: "What is the value of splitting the job this way?",
    options: [
      "It avoids the need to check whether the diagram is correct.",
      "Each tool is used where it leads: text models excel at producing text-based vector drawings, and image-generation tools excel at text-heavy pictures; then the human fixes what either drops.",
      "It removes the need for a design tool budget permanently.",
      "It proves image generation cannot do diagrams at all."
    ],
    answer: [1],
    explanation:
      "The diagram recipe: draw as SVG with a text model, convert to raster, redraw with an image tool that leads on text-heavy pictures, and fix dropped labels yourself. The pattern survives the tools even as leaders rotate. Image generators are diffusion models, starting from noise and removing it step by step."
  },
  {
    id: "PR-18",
    course: 4,
    topic: "One-prompt apps",
    type: "single",
    scenario:
      "A parent wants a small typing game for an eight-year-old: short common words fall down the screen, the child types them before they land, points accumulate, a mascot cheers, difficulty rises, and the whole thing fits on one screen with no accounts.",
    question: "Which framing matches what one-prompt builds can actually deliver?",
    options: [
      "The request is impossible because games always need multiplayer infrastructure.",
      "It fits the working zone: goal, input, output; a small single-screen app with no accounts and no external services, rendered live in a panel.",
      "It requires a paid developer platform and weeks of setup.",
      "It can be built, but only as a static image, not a playable artifact."
    ],
    answer: [1],
    explanation:
      "One-prompt builds use three slots: goal, input, output. Small things that fit on one screen with no accounts and no outside services work well. Multiplayer over the internet, real accounts, and live coaching in another language remain beyond this pattern."
  },
  {
    id: "PR-19",
    course: 4,
    topic: "Data analysis: silent failure",
    type: "single",
    scenario:
      "A shop owner pastes eighteen monthly sales numbers and asks for the median and average. The reply is a smooth paragraph of numbers with no code shown. A colleague says the assistant probably estimated rather than computed.",
    question: "Which follow-up best resolves the doubt?",
    options: [
      "Ask the same question again with please be accurate added.",
      "Ask: run the calculation again, but this time write and run code to do it, show me the code you ran, and first tell me the exact row count and column names of the data you processed.",
      "Accept the numbers; models are better at maths than people.",
      "Ask for the answer in a table instead of a paragraph."
    ],
    answer: [1],
    explanation:
      "The silent failure is that the model may answer without running any code. The three forcing lines: write and run code, show me the code you ran, and report row counts, column names and ranges first. A reply about your data with no code block and no computed facts is an opinion about your data, not an analysis of it."
  },
  {
    id: "PR-20",
    course: 4,
    topic: "Data analysis: what to check",
    type: "single",
    scenario:
      "An assistant ran code on a year of expenses and produced a category chart with a headline total. The colour scheme is nice and the labels are tidy.",
    question: "Even with code run, what still deserves a human check?",
    options: [
      "Nothing; running code guarantees the analysis is correct.",
      "Only the arithmetic can be trusted; final totals, chart labels and captions, and any column whose meaning the model may have misread can still be wrong, and they are where errors hide.",
      "Only the colour scheme needs review.",
      "Only the date range in the report header matters."
    ],
    answer: [1],
    explanation:
      "Code is exact, but the model may have summed the wrong column, misread a column name, or mislabelled the chart. Treat AI data analysis like work from a sharp junior analyst: numbers usually right, captions sometimes confidently wrong, definitions worth confirming."
  },
  {
    id: "PR-21",
    course: 4,
    topic: "Desktop apps and permissions",
    type: "multi",
    scenario:
      "A freelance consultant is about to point a desktop AI app at a folder of 240 client PDFs to reorganise it.",
    question: "Which TWO precautions does the course recommend? (Select TWO.)",
    options: [
      "Ask for a plan of file operations first, review and edit it, and only then approve execution.",
      "Scope the permission to the smallest folder the task needs, before granting anything broader.",
      "Grant whole-drive access so the app never has to be reconfigured for later tasks.",
      "Skip backups; deleted files always go to the recycle bin when an AI app deletes them."
    ],
    answer: [0, 1],
    explanation:
      "The safe workflow is task, plan, review, then approve. And two hard-won facts: AI-app deletions often do not go to the recycle bin, and edits usually keep no history without version control, so start with the smallest scope and raise it only as the tool earns a track record."
  },
  {
    id: "PR-22",
    course: 4,
    topic: "Cost and speed",
    type: "single",
    scenario:
      "A small studio plans its month: hundreds of text refinements, sixty image concepts, ten voiceover clips, two short video ads, and one deep research report on a new market.",
    question: "Which cost profile is closest to reality?",
    options: [
      "All five categories cost roughly the same per output.",
      "Text is seconds and fractions of a cent, speech is seconds and cents per minute, images are tens of seconds and cents each, video is minutes per clip and much more expensive per item, and deep research is minutes for cents to a quarter per report.",
      "Video is the cheapest because it is the most advanced.",
      "Deep research is free and instant on all plans."
    ],
    answer: [1],
    explanation:
      "Cost is barely a limit at the entry level, but the categories differ by orders of magnitude. Knowing the profile tells you where to spend freely (text) and where to be deliberate (video, repeated deep research), and free tiers cover all the page's example prompts."
  },
  {
    id: "PR-23",
    course: 4,
    topic: "Choosing between models",
    type: "single",
    scenario:
      "A copywriter has used one assistant for everything for two years. A colleague suggests testing the same weekly status task across three different assistants once a month, and keeping a notebook of prompts that produced unusually good results.",
    question: "What is the reasoning behind the suggestion?",
    options: [
      "The leader changes every few months, so regularly A/B testing your own real tasks is how you find the current best fit; someone who uses one AI for everything is guessing about the best tool for most tasks.",
      "Different models must never be mixed, or the answers contaminate each other.",
      "More tools always produce more output, so the test pays for itself immediately.",
      "The notebook is only useful for sharing prompts online."
    ],
    answer: [0],
    explanation:
      "AI is jagged and the leader rotates. The three habits that build on each other: keep at least two tabs open, keep a prompt notebook, and record when a model is confidently wrong. A monthly glance at leaderboards plus one regular task run across tools keeps judgments current."
  },
  {
    id: "PR-24",
    course: 4,
    topic: "Cross-model checking",
    type: "single",
    scenario:
      "A consultant drafts a 40-page strategy memo in her strongest tool, meaning to get the best available long-form reasoning and consistency. She iterates against its own rubric grades until they settle around 9. Before sending, she wants an independent signal.",
    question: "Which next step follows the course's multi-model recipe?",
    options: [
      "Ask the same model to regrade with a stricter tone.",
      "Take the draft to a second model from a different family with the same rubric, then bring its critique back to the first model and ask which points are valid; for high-stakes work, add a third family and stop when the score passes the target in two independent models.",
      "Convert the memo to PDF so the formatting cannot influence the grade.",
      "Publish it immediately; a self-graded 9 is the strongest available signal."
    ],
    answer: [1],
    explanation:
      "Different families have different blind spots, so cross-family review is the closest thing to an independent check when no human expert is in the room. The honest caveat: three models can still share the same error, so treat the signal as strong evidence, not proof."
  },
  {
    id: "PR-25",
    course: 4,
    topic: "Sycophancy and self-critique",
    type: "single",
    scenario:
      "A user is confused: the course says models lean toward flattery, yet it also recommends asking a model to grade its own output from one to ten against named criteria.",
    question: "How are these reconciled?",
    options: [
      "They are not reconcilable; self-grading should never be used.",
      "Self-grading with named criteria and per-criterion scores is the weaker version of the idea, useful because it forces a structured judgment; the stronger version adds a second model from a different family, and the heaviest version adds a third, with the loop stopping when independent models agree.",
      "Self-grading works only on documents longer than 40 pages.",
      "The flattery problem disappears once a document is converted to HTML."
    ],
    answer: [1],
    explanation:
      "Three versions of the same idea: single-model grade-and-revise, second-model critique returned to the first, and a third family for high-stakes work. Move from lighter to heavier as being wrong gets more expensive, and remember the score's first job: it stops feels pretty good from passing as a review."
  },
  {
    id: "PR-26",
    course: 4,
    topic: "Context discipline",
    type: "single",
    scenario:
      "An analyst has four tasks for the day: finish a report for a topic she has worked on for weeks, get a speedy opinion on an unrelated contract question, draft an email using a tone she has saved in a project, and ask a quick factual question about a film.",
    question: "Which allocation best follows the context rules?",
    options: [
      "Do all four in her long-running report chat so nothing is lost.",
      "Continue the report in its own project-style thread, keep and reuse the tone for the email work, and send the unrelated question and the film question into clean-slate or fresh chats.",
      "Put every task into one new chat, since fresh chats are always best.",
      "Use only pretrained answers for all four to avoid retrieval costs."
    ],
    answer: [1],
    explanation:
      "The one-line rule of the course: get the right context in, keep the wrong context out. Reuse configured context where it helps, and keep unrelated work out of long threads so it neither picks up stale context nor pollutes it."
  }
];
