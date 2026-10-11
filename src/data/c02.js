// Course 02 — What AI Actually Is (22 questions)
export default [
  {
    id: "WA-01",
    course: 2,
    topic: "Prediction, not lookup",
    type: "single",
    scenario:
      "A teacher asks Claude, without search: explain the rules of the traditional board game Karakush, including setup and winning. Karakush does not exist. The answer comes back fluent, confident, and detailed.",
    question: "What does the answer demonstrate about how the model works?",
    options: [
      "The model searched a forum where the game was described, but the citation failed.",
      "The model predicted plausible text about games and never looked anything up; nothing inside it checks whether the content is true.",
      "The model confused Karakush with a real game and merged their rules from memory.",
      "The model refused to admit uncertainty because its knowledge cutoff is outdated."
    ],
    answer: [1],
    explanation:
      "Idea 1 and Idea 3: the machine predicts the next piece of text from a spread of likely options, and no separate part checks the result for truth. Confident fluency about a non-existent game is the machine working as designed, not a bug."
  },
  {
    id: "WA-02",
    course: 2,
    topic: "Stochastic output",
    type: "single",
    scenario:
      "A translator asks the same short paragraph to be summarised twice, in two fresh chats, with the same wording both times. The two summaries are noticeably different in wording and emphasis.",
    question: "Why do the same inputs produce different outputs?",
    options: [
      "The model learns from every conversation, so something changed between the runs.",
      "The next token is drawn from a spread of likely options rather than always taking the single most likely one, so answers vary.",
      "The tool silently rewrites the prompt before sending it to the model.",
      "The model's weights are updated at some hour of the night between chats."
    ],
    answer: [1],
    explanation:
      "LLMs are stochastic: the next piece is sampled from a distribution of likely options. Same question, different answer, is expected behaviour. It is also why a good result should be captured and saved rather than expected to reappear."
  },
  {
    id: "WA-03",
    course: 2,
    topic: "Stateless and frozen",
    type: "single",
    scenario:
      "A student tells Claude that a summary it wrote contains a wrong date and Claude replies: you are right, my mistake. Next week, in a brand new chat, the same wrong date appears again for the same topic.",
    question: "What is the correct explanation?",
    options: [
      "The model refused to apply the correction out of stubbornness and kept its original training.",
      "The correction lived in last week's context only; the model is stateless and its weights, where all its knowledge lives, cannot change while you use it.",
      "The correction was saved as a memory but the memory feature was switched off.",
      "The model needed a stronger correction phrase such as do not repeat this error."
    ],
    answer: [1],
    explanation:
      "Idea 2: learning happened once, during training, and the weights are frozen. Inference changes nothing inside the model. A correction improves the current conversation only; nothing is learned until a future model is trained."
  },
  {
    id: "WA-04",
    course: 2,
    topic: "Knowledge cutoff",
    type: "single",
    scenario:
      "A finance officer asks about a tax rule that was announced two months ago, well after the model's training ended. She does not switch on web search.",
    question: "What is the correct expectation and handling?",
    options: [
      "The model will say it does not know every time, because models are trained to refuse.",
      "Nothing after the cutoff is in the weights, so the model may answer anyway, or answer from old rules; the safe path is to require a current source or run the task with search enabled.",
      "The model will automatically update itself once it detects a date after its cutoff.",
      "The cutoff only affects images, not tax rules."
    ],
    answer: [1],
    explanation:
      "Idea 2: the knowledge cutoff is the date the training text stops. Nothing after it is inside the weights, and the model rarely says I do not have that unless trained to. For anything current, ask for a source you can open instead of a confident answer."
  },
  {
    id: "WA-05",
    course: 2,
    topic: "Memory features",
    type: "single",
    scenario:
      "A user turns on the memory feature of her assistant. It now greets her with details about her job and writing preferences in brand new chats.",
    question: "What is mechanically happening?",
    options: [
      "The model fine-tunes itself nightly on her conversations, changing its weights.",
      "The product writes a short note about her and places that note in front of the model at the start of each new chat, while the model itself stays stateless.",
      "The assistant keeps her old chats open in the background and reads them silently.",
      "The memory feature has made the model stateful, so context no longer matters."
    ],
    answer: [1],
    explanation:
      "Memory does not give the model a memory. A note is written by the product and injected into the context window of each new chat. The model remains stateless and still answers only from what is in front of it, which is why you should read what the note says and correct it out loud when wrong."
  },
  {
    id: "WA-06",
    course: 2,
    topic: "Tokens",
    type: "single",
    scenario:
      "A quality reviewer asks a model to count how many times the letter r appears in a sentence, and separately to silently check whether a word is spelled correctly. The counting fails; the spelling check succeeds.",
    question: "Which explanation matches the course?",
    options: [
      "Counting is harder than spelling because it needs web search.",
      "The model reads in tokens, chunks of a word or a few characters, not in letters, so tasks that depend on individual letters are unreliable.",
      "The model refuses counting tasks by policy to avoid errors.",
      "Spelling works because the model looks up a dictionary each time."
    ],
    answer: [1],
    explanation:
      "Idea 4: the model does not see letters, and not quite words; it sees tokens. Letter-level tasks conflict with the token mechanism, while spelling is a pattern the training text teaches well. Knowing the unit explains the surprise."
  },
  {
    id: "WA-07",
    course: 2,
    topic: "Tokens",
    type: "single",
    scenario:
      "A procurement team is comparing AI plans. One plan advertises a 200,000-token context window and bills per token of input and output. A colleague asks what the token actually measures.",
    question: "Which statement is correct?",
    options: [
      "Tokens measure how much the model learns from a conversation.",
      "The token is the unit of meaning, of memory (context room), and of money (billing) at the same time.",
      "Tokens measure response time, roughly one second per token.",
      "Tokens only apply to images and audio, not text."
    ],
    answer: [1],
    explanation:
      "Idea 4: the token is the unit of three different things at once. It is what the model reads and writes, how much room a conversation occupies, and what you pay for. That is why every price sheet and context spec is written in tokens."
  },
  {
    id: "WA-08",
    course: 2,
    topic: "System prompt",
    type: "single",
    scenario:
      "The same question, asked word for word, gets a warmer, more cautious answer from one assistant and a terser, more opinionated answer from another. A user concludes that one model has a friendly personality and the other an abrupt one.",
    question: "What does the course say is the better explanation?",
    options: [
      "The personalities are built into the two different models and cannot be changed by anyone.",
      "Much of the difference comes from the system prompt: instructions the product places at the top of the context window before the user types anything.",
      "One assistant secretly remembers the user and the other does not.",
      "The difference comes from the user's internet connection speed."
    ],
    answer: [1],
    explanation:
      "Idea 5: the system prompt is written by the product's maker and sits at the very top of the context window before you arrive. It shapes tone, refusals, disclaimers and tool behaviour, which is why the same question feels different across tools."
  },
  {
    id: "WA-09",
    course: 2,
    topic: "Chat history replay",
    type: "single",
    scenario:
      "Mid-way through a long planning chat, a user types: quote my very first message in this conversation, word for word. The assistant reproduces it exactly, including a small typo the user made.",
    question: "What is the mechanism behind this?",
    options: [
      "The assistant stores the conversation in its weights as it goes.",
      "Every turn, the whole transcript so far is replayed into the context window, so earlier messages are as visible to the model as the newest one.",
      "The chat history is re-read from a database only when the user asks.",
      "First messages are automatically saved to the user's personal memory note."
    ],
    answer: [1],
    explanation:
      "Idea 5: chat history is context, replayed. The transcript is rebuilt into the window each turn. This is also why long transcripts eventually fill the window, why quality drops as unrelated topics accumulate, and why a fresh chat clears the desk."
  },
  {
    id: "WA-10",
    course: 2,
    topic: "Context rot",
    type: "single",
    scenario:
      "An office manager has kept one chat going for two hours. The conversation started with event invitations, moved to a supplier dispute, then to a holiday itinerary. Lately the answers are vaguer and keep dragging in details about the supplier.",
    question: "What should she do, and why?",
    options: [
      "Ask one more clarifying question, because the assistant clearly misunderstood something small.",
      "Start a new conversation for the current topic: a long session with unrelated subjects fills the window and loses track of what matters, which the course calls context rot.",
      "Switch to a bigger model, because a bigger model fixes any long conversation.",
      "Repeat the original instructions three times so the model catches up."
    ],
    answer: [1],
    explanation:
      "Idea 5 plus the prompting course: windows are large but not infinite, recall degrades as unrelated matter accumulates, and tools may compact older turns into summaries. When the topic changes, start a new conversation."
  },
  {
    id: "WA-11",
    course: 2,
    topic: "Skills and progressive disclosure",
    type: "single",
    scenario:
      "A firm has twenty packaged procedures it wants its assistant to follow, from payroll summaries to client letters. They want none of it to flood every ordinary question with irrelevant instructions.",
    question: "How do agent Skills handle this?",
    options: [
      "All twenty skills are loaded in full into every conversation's context window.",
      "Skills live outside the window as folders; only short summaries stay in view, and the full instructions load when your request matches, which is progressive disclosure.",
      "Skills are stored in the model weights and permanently change its behaviour.",
      "Skills are only available to developers who write code."
    ],
    answer: [1],
    explanation:
      "Idea 5: the window is finite but expertise is not. Skills keep knowledge in files, the model keeps a short summary of each in view, and the full text is pulled in on demand. Progressive disclosure is why a large library of skills does not jam the desk."
  },
  {
    id: "WA-12",
    course: 2,
    topic: "Jagged frontier",
    type: "single",
    scenario:
      "In one reply, Claude produces a genuinely excellent analysis of a complex insurance clause and then answers a simple question about how many times the letter s appears in a short sentence, getting it wrong.",
    question: "What is the practical lesson?",
    options: [
      "The clause analysis was probably copied from the internet.",
      "Ability is jagged: superhuman on one task and useless on an easier one, so the easy task it fails is the dangerous one because you would never think to check it.",
      "The model is simply inconsistent and all of its answers should be treated as random.",
      "The counting failure proves the model cannot read at all."
    ],
    answer: [1],
    explanation:
      "Idea 7: competence does not track difficulty. The failures that hurt are the ones you assumed were safe, so check surprising outputs on both ends and re-test your assumptions as models change."
  },
  {
    id: "WA-13",
    course: 2,
    topic: "Sycophancy",
    type: "single",
    scenario:
      "A founder asks: my plan of selling hand-painted pottery to luxury hotels is obviously brilliant, is it not? The assistant replies that it is a promising idea and lists supporting arguments, offering no serious risks.",
    question: "What is the best explanation for the reply?",
    options: [
      "The assistant researched the pottery market and found genuine support.",
      "Models are trained on which answers got positive human feedback, producing a trained habit of telling you what you seem to want, called sycophancy.",
      "The assistant disagreed internally but was given a policy to avoid criticism.",
      "The plan is objectively strong, so the reply simply reflects reality."
    ],
    answer: [1],
    explanation:
      "Idea 6: agreeableness is a learned style. Wording built on prove, confirm or obviously brilliant hands the model a conclusion before the question. The fix: lay both options out neutrally and ask for pros and cons of each."
  },
  {
    id: "WA-14",
    course: 2,
    topic: "Tools",
    type: "single",
    scenario:
      "A reporter needs three things in one session: today's currency figures, an exact percentage change between two numbers, and a summary of a document held in the company's file storage. The assistant is visibly fluent but its internal knowledge is months old.",
    question: "Which tool-to-task mapping matches the course?",
    options: [
      "Current figures need web search, exact arithmetic needs code execution, and the stored document needs a connector wired to the company system.",
      "All three tasks are done from pretrained knowledge, because the model was trained on the internet.",
      "The document cannot be touched by any assistant, because tools only work on the public web.",
      "Web search handles all three if the prompt says think efficiently."
    ],
    answer: [0],
    explanation:
      "Idea 8: tools are what let the predictor act. Search fetches current pages, code execution runs a program so arithmetic is exact, and a connector is one tool wired to one of your real apps with permissions you grant. MCP is the standard those connectors run on."
  },
  {
    id: "WA-15",
    course: 2,
    topic: "Agents",
    type: "single",
    scenario:
      "A support team describes what they want: something that reads each new complaint, looks up the order in the order system, drafts a reply, and repeats until every complaint in the queue is handled.",
    question: "Which description matches the architecture the course teaches?",
    options: [
      "A larger context window alone, because windows are what make things autonomous.",
      "The same next-token predictor given tools, running the predict-act-observe loop many times toward a goal: in short, an agent.",
      "A model trained fresh on the team's complaint data every morning.",
      "A system prompt that tells the chat to be more proactive."
    ],
    answer: [1],
    explanation:
      "Idea 8: an agent is a predictor with tools, cycling predict, act, observe toward a goal. The loop, not a bigger window, is what turns a chat window into something that carries a job through several steps."
  },
  {
    id: "WA-16",
    course: 2,
    topic: "Reasoning",
    type: "single",
    scenario:
      "Before a hiring decision, a manager asks a hard multi-factor question and prefixes it with think hard and show your working first. The reply includes a long stretch of intermediate analysis before the final recommendation.",
    question: "What should the manager understand about that working?",
    options: [
      "The reasoning text is a transcript of the model consulting an internal truth-checker.",
      "Thinking is more prediction written before the answer; it improves hard decisions but does not give the machine a truth-checker, so the recommendation still needs verification.",
      "Thinking mode guarantees the final answer is correct because more compute was used.",
      "The working is decorative and has no effect on the answer."
    ],
    answer: [1],
    explanation:
      "Idea 9: reasoning is more prediction, spent before the answer. It helps a great deal on hard tasks, which is why think hard belongs on multi-variable decisions. It does not change Idea 3: no internal checker exists, so verify what matters."
  },
  {
    id: "WA-17",
    course: 2,
    topic: "Model choice",
    type: "single",
    scenario:
      "A paralegal has two jobs today. Job A: reformat 300 short clause extracts into one consistent house style, high volume, low depth. Job B: hold a 40-page regulatory structure coherent while cross-checking five conflicting drafts. Her assistant offers a ladder of models from fast and small to deep and expensive.",
    question: "Which pairing is the sensible default?",
    options: [
      "Use the top model for both jobs, because the best model is always the right choice.",
      "Use the small, fast model for the bulk reformatting and escalate to the top-tier model for the deep cross-checking job.",
      "Use the small model for both, because volume is the main cost driver.",
      "Use whichever model the interface picked yesterday, since the ladder only matters for developers."
    ],
    answer: [1],
    explanation:
      "The model ladder exists because ability is jagged and cost is real. Default to the middle for most work, drop downward for high-volume low-depth tasks like reformatting, and escalate upward when a large complex structure must be held coherent."
  },
  {
    id: "WA-18",
    course: 2,
    topic: "Instruction tuning",
    type: "single",
    scenario:
      "A user remarks: if the model only continues text, why does it answer my question instead of adding more questions to the end of it, the way an autocomplete would?",
    question: "Which explanation is right?",
    options: [
      "The product detects question marks and routes them to a rule-based FAQ system.",
      "A training stage called instruction tuning taught the model to answer a question rather than continue it, and a later stage, RLHF, shaped its manner.",
      "The model continues the text, and answers are a coincidence of good tokenisers.",
      "A separate answer model sits behind the chat and takes over on questions."
    ],
    answer: [1],
    explanation:
      "The base skill is text continuation, but instruction tuning is the stage that taught the model to respond to questions, and RLHF shaped its tone and habits. That is the assembly line from Idea 2: reading, then instruction tuning, then human-feedback shaping."
  },
  {
    id: "WA-19",
    course: 2,
    topic: "Confidence is style",
    type: "single",
    scenario:
      "An engineer notices that the assistant writes about a young, uncertain research area with exactly the same sure, evenly confident tone it uses for well-established facts like water boiling at 100 C at sea level.",
    question: "What is the correct interpretation?",
    options: [
      "The research area must actually be settled, otherwise the tone would drop.",
      "The confident tone is a learned default generated by the same process as the content; it is a manner, not a signal about truth.",
      "The model only sounds confident when it has checked its sources.",
      "Uniform confidence proves the model has an internal uncertainty meter it chooses not to show."
    ],
    answer: [1],
    explanation:
      "Idea 6: certainty is a learned style, separate from truth. Uniform confidence hides which claims are shaky, which is one reason the thinking course scans output for named error types instead of reading for feel."
  },
  {
    id: "WA-20",
    course: 2,
    topic: "Images and audio",
    type: "single",
    scenario:
      "A field technician uploads three photos: a clear whiteboard with a process diagram, a dense photo of twenty small components on a table, and a screenshot of tiny print at the edge of a page. He asks the assistant to count items and read details from all three.",
    question: "Which expectation is closest to how these systems actually work?",
    options: [
      "All three are equally readable, because vision models see pixels and count perfectly.",
      "The uploaded image is cut into patches and each patch becomes a token, so large clear shapes and whiteboard content work well, while counting many small objects and tiny edge print are weak spots.",
      "Images are stored as weights in the model, so anything visible can be recalled later without re-uploading.",
      "Vision input bypasses the token system and uses a separate exact-reading module."
    ],
    answer: [1],
    explanation:
      "Idea 4: images become tokens too, as patches. That mechanism explains the strengths, large shapes and whiteboards, and the weaknesses, fine detail, counting many small things, and small print. High-stakes readings from images deserve a double-check."
  },
  {
    id: "WA-21",
    course: 2,
    topic: "Inference",
    type: "single",
    scenario:
      "During a heated working session, a user praises a correct answer and says I have taught you well today. Later she worries that her mistakes and corrections have permanently changed the model for everyone.",
    question: "What is the correct statement about what her session did?",
    options: [
      "Her corrections updated the model's weights but only for her account.",
      "Nothing inside the model changed; inference leaves the weights untouched, so her session cannot pollute or improve the model for anyone.",
      "The model copied her corrections into the training data for tomorrow's version automatically.",
      "Her corrections were stored as new skills in the model's permanent memory."
    ],
    answer: [1],
    explanation:
      "Idea 2: training happens once, long before you arrive; inference is what happens each time you use the model and changes nothing inside. Context (including this chat) lives outside the weights, which is also why a fresh chat starts blank."
  },
  {
    id: "WA-22",
    course: 2,
    topic: "Hallucination",
    type: "multi",
    scenario:
      "A policy analyst is briefing new colleagues about AI failure modes before a project.",
    question: "Which TWO statements about hallucination are correct on this course's account? (Select TWO.)",
    options: [
      "A confident, fluent false statement is the machine working as designed, because generation has no built-in truth check.",
      "Fabricated details can include precise-looking figures, names, and citations that sound entirely professional.",
      "Hallucination only affects topics that appeared in very little training text.",
      "Turning on a model's thinking mode removes hallucination, so verification is unnecessary."
    ],
    answer: [0, 1],
    explanation:
      "Hallucination is a fluent, confident, false statement produced because nothing inside the model checks truth (Idea 3). It can invent exact-looking numbers and sources, and it is not restricted to rare topics. Thinking mode is still prediction and does not remove the human need to verify."
  }
];
