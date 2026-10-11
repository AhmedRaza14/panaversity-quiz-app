// Course 10 — Governance, Risk & Responsible Use (22 questions)
export default [
  {
    id: "GV-01",
    course: 10,
    topic: "Defined gate",
    type: "single",
    scenario:
      "A workflow plan for AI-drafted customer reports says a human will review it before sending. In practice, different people review different things at different times, and twice a report went out unreviewed.",
    question: "What does the course require to make the gate real?",
    options: [
      "A stronger policy document listing the no-review prohibition.",
      "A defined gate naming three things: who reviews, what they verify, and when, before the output becomes hard to undo.",
      "A second AI that watches the first AI.",
      "A monthly reminder email to remind reviewers."
    ],
    answer: [1],
    explanation:
      "A human in the loop is not a gate. Someone will check it sounds responsible but means nothing. The defined gate names the role that actually holds the responsibility, the specific risk the review catches, and the point before irreversibility. Example: the account manager checks delivery facts against the dispatch record before the report is sent."
  },
  {
    id: "GV-02",
    course: 10,
    topic: "Three answers",
    type: "single",
    scenario:
      "A team is classifying four uses: generating a first draft of a public announcement, drafting an internal meeting summary that a colleague edits, producing a nickname list for a party, and independently deciding whether an insurance claim is denied.",
    question: "Which classification matches the framework's three answers?",
    options: [
      "All four are fully appropriate because a person is somewhere in every loop.",
      "The announcement is appropriate with review, the summary is fully appropriate, the nickname list is fully appropriate, and the claim denial is inappropriate: consequence, irreversibility and accountability cannot be repaired by review there.",
      "All four are inappropriate until approved by a committee.",
      "Only the claim denial is appropriate with review; the rest are fully appropriate."
    ],
    answer: [1],
    explanation:
      "Three answers: fully appropriate (low consequence, reversible, review as you go), appropriate with review (a specific human check before use), and inappropriate (human-owned because the consequence, irreversibility or responsibility cannot be repaired by review). The claim denial belongs to people whose accountability cannot move to a tool."
  },
  {
    id: "GV-03",
    course: 10,
    topic: "Deciding factor",
    type: "single",
    scenario:
      "A condolence message to a client is short, easy to rewrite, and low consequence in any business metric, yet the team classifies it as appropriate with review, citing the human relationship as what makes it delicate.",
    question: "What is the deciding factor doing here?",
    options: [
      "It proves the classification method is broken.",
      "It names the one screen actually carrying the classification: the human relationship is the deciding factor, and naming it makes the reason checkable and discussable rather than assumed.",
      "It shows consequence is the only criterion that ever matters.",
      "It means no AI may see the client's name under any policy."
    ],
    answer: [1],
    explanation:
      "The deciding factor is the criterion actually carrying the classification, sometimes called load-bearing. Asking if one of the answers changed, which change would move the use case into a different classification, surfaces it. The team's sentence can now be checked, challenged and improved."
  },
  {
    id: "GV-04",
    course: 10,
    topic: "Data tiers",
    type: "multi",
    scenario:
      "A team is triaging four datasets for a client-research task in an approved AI environment.",
    question: "Which TWO assignments match the three practical tiers? (Select TWO.)",
    options: [
      "Anonymized survey results with identifiers genuinely removed: green, generally permitted.",
      "Credentials and API secrets: red, not through an unapproved route.",
      "Internal meeting notes that are merely about a difficult client: red, since the topic is sensitive.",
      "Unannounced product plans that staff are working on daily: green, since staff already see them."
    ],
    answer: [0, 1],
    explanation:
      "Green: public material, aggregated figures, anonymized data. Yellow: internal-only documents, personal contact details, identifiers, confidential drafts, unannounced plans. Red: credentials, secrets, highly regulated or protected data, privileged material, third-party confidential information. When unsure between two tiers, take the stricter one."
  },
  {
    id: "GV-05",
    course: 10,
    topic: "Discriminator",
    type: "single",
    scenario:
      "A bakery chain wants to understand spending trends across its loyalty customers. The data export includes full names, phone numbers, and purchase histories. The task needs patterns, not people.",
    question: "What is the correct discriminator question and action?",
    options: [
      "Is this AI product approved? Check the vendor's website first.",
      "Does the task need the identifiers or only the pattern? Here the pattern suffices, so the identifiers are removed before the data reaches the model.",
      "Can the team get consent from every customer? Only then proceed.",
      "Should the data be stored in a sandbox? Storage is the main question."
    ],
    answer: [1],
    explanation:
      "The discriminator is the key branching question: identifiers or pattern? Pattern-only opens the redaction path, removing fields the task does not need. Redaction is useful but not magic, it fails if partial removal still allows identification, and fails if it strips what the task needs."
  },
  {
    id: "GV-06",
    course: 10,
    topic: "Route and purpose",
    type: "single",
    scenario:
      "A team asks the same question twice: first, whether the company's AI product is approved; second, whether the specific entry route the team wants, an upload into a shared workspace, is approved for this dataset for this purpose.",
    question: "Which question is the right one, and why?",
    options: [
      "The first; product-level approval is what matters.",
      "The second: routes differ in retention, access, logging and administration, so the useful question binds this route, this data and this purpose together.",
      "Neither; once data is anonymized, no approval applies.",
      "Both are equivalent, since approval is approval."
    ],
    answer: [1],
    explanation:
      "Entry points include chats, workspaces, incognito, uploads, connectors, APIs and desktop agents, and they differ in how data is retained, who may access it, what is logged, and what administrators can control. Purpose matters too: data arrives with the reason it was collected attached, and a new use needs that reason or fresh permission."
  },
  {
    id: "GV-07",
    course: 10,
    topic: "Sandbox vs authorization",
    type: "single",
    scenario:
      "An engineer argues that a dataset of customer identifiers is safe to upload to a particular feature because the feature runs code inside a sealed execution environment.",
    question: "What is the error in that argument?",
    options: [
      "No error; sealed execution environments make any data safe.",
      "A code-execution sandbox is an execution boundary, not an approval boundary: it limits what code can touch, but it does not authorize the data to reach the service in the first place.",
      "The error is that sandboxes only protect images, not text.",
      "The error is that customer identifiers are always red-tier data, with no exceptions."
    ],
    answer: [1],
    explanation:
      "Five distinctions matter in practice: memory is not retention; incognito is not zero retention; training use depends on the plan and settings; a sandbox is not data authorization; and private in the interface does not mean absent from organizational records. Authorization comes from whoever owns the policy, security, or contract."
  },
  {
    id: "GV-08",
    course: 10,
    topic: "Capability: five checks",
    type: "single",
    scenario:
      "A colleague shares a Skill found on a public forum that promises to improve any analysis. Before enabling it on a project with customer data, a reviewer wants a systematic assessment.",
    question: "Which set of checks matches the course?",
    options: [
      "Check the model's name, its price, its speed, its popularity, and its update date.",
      "Check source, reach, fit, outside content, and actions: who made it, what it could touch where it runs, whether its reach is proportionate, whether it reads content written by others, and whether it can send, pay, delete, publish or otherwise act.",
      "Check only whether it produced good output in one test.",
      "Skip checks and rely on the forum's comment section."
    ],
    answer: [1],
    explanation:
      "Treat extensions like software, not prompts. The five checks: source, reach, fit, outside content, actions. A Skill carries no permission list of its own, so the second check asks what the Skill could reach in the session where it runs, not what it says it needs."
  },
  {
    id: "GV-09",
    course: 10,
    topic: "Capability: three outcomes",
    type: "single",
    scenario:
      "Reviewing a connector for a reporting workflow, a team finds: published by the internal platform team, used to read only the reporting tables, strong fit, no outside content, and no need to send anything. A second candidate is a public skill pack with unknown authors and broad instructions.",
    question: "Which outcomes fit the two candidates?",
    options: [
      "Enable both; reading is harmless.",
      "Enable the internal read-only connector after scope confirmation; escalate or decline the unknown public pack, whose reach is out of proportion to the job.",
      "Decline both because third-party anything is prohibited.",
      "Enable both but log usage afterwards."
    ],
    answer: [1],
    explanation:
      "Three outcomes: enable, escalate, decline. Escalation is for unresolved questions and should be framed as a specific decision, for example whether a requested write access can be narrowed when the workflow only requires reading. Escalating is not asking permission to be careful."
  },
  {
    id: "GV-10",
    course: 10,
    topic: "Prompt injection",
    type: "single",
    scenario:
      "A workflow reads customer emails and also has a live connector that can send replies. An email arrives containing instructions aimed at the assistant, telling it to forward the account list to an external address.",
    question: "Why is this combination specifically dangerous, and what is the default posture?",
    options: [
      "It is safe because the sender is a paying customer.",
      "Who wrote the tool and who wrote the content are different trust questions: untrusted content plus consequential actions is the sharp-edged combination, so prefer read-only, let the assistant read only what it needs, and keep send, publish, pay, delete and irreversible edits behind a defined human gate.",
      "It is dangerous only if the model is an older version.",
      "The correct fix is to delete all customer emails immediately."
    ],
    answer: [1],
    explanation:
      "Prompt injection is this family of attacks: instructions hidden in content the model reads. A trusted tool reading untrusted content is normal; the risk spikes when the same workflow can take consequential actions. For agent builders the principle is least privilege: the narrowest authority that finishes the job."
  },
  {
    id: "GV-11",
    course: 10,
    topic: "People: exclusions",
    type: "single",
    scenario:
      "A hiring tool generates a shortlist of candidates from 400 applications. Managers interview only the shortlisted people, and all ten hires this quarter came from it. Nobody has checked who the tool quietly excluded.",
    question: "What is the control the course recommends here?",
    options: [
      "Interview every applicant to be safe.",
      "Sample exclusions as well as inclusions: when a system narrows a set and humans inspect only the survivors, systematic removal of a group goes unnoticed.",
      "Disclose the tool only if someone asks.",
      "Rank the shortlist twice with two models and compare."
    ],
    answer: [1],
    explanation:
      "The easiest AI risk to miss is a narrowing system whose discarded cases are never reviewed. Sampling exclusions alongside inclusions is the practical control, and it matters most in decisions about employment, access, benefits, education, finance or health."
  },
  {
    id: "GV-12",
    course: 10,
    topic: "Disclosure order",
    type: "single",
    scenario:
      "A notetaking assistant joins customer calls, transcribes them, and its notes go into the CRM. A team member asks whether disclosure to customers is required.",
    question: "What is the correct order of reasoning?",
    options: [
      "Use judgment first, since everyone can tell a machine wrote the notes.",
      "Check rules first: law, policy, contracts, professional rules, client commitments and organisational standards; only if no rule answers it does judgment apply, asking whether AI involvement would reasonably change the person's understanding of the work or the relationship.",
      "Disclose only if the notes contain errors.",
      "Never disclose, to avoid alarming customers."
    ],
    answer: [1],
    explanation:
      "Disclosure reasoning runs rules first, judgment second. Authorship and notetakers are the two recurring cases: work going out under your name is yours to stand behind whatever drafted it, and a meeting notetaker touches all four questions at once. When no rule settles an ordinary case, disclose rather than conceal."
  },
  {
    id: "GV-13",
    course: 10,
    topic: "People: performance reviews",
    type: "single",
    scenario:
      "A manager wants AI to turn her own documented observations into draft performance-review summaries. Employees will read these as the manager's personal assessment.",
    question: "Which classification matches the four-question walkthrough?",
    options: [
      "Inappropriate: AI must never be used in employment contexts.",
      "Appropriate with review: drafting from the manager's own notes is useful, accountability for the assessment stays with the manager, the employee information is sensitive internal material, and employees are directly affected, so disclosure rules and fairness get considered explicitly.",
      "Fully appropriate as long as the employee never asks.",
      "Appropriate without review provided a template is used."
    ],
    answer: [1],
    explanation:
      "The worked example lands on appropriate with review: AI does not make a performance review automatically wrong, but the People question marks employees as directly affected, the Data question flags sensitive internal material, and accountability stays with the manager, so the review gate is explicit."
  },
  {
    id: "GV-14",
    course: 10,
    topic: "Escalation framing",
    type: "single",
    scenario:
      "A team believes its new disclosure practice is fine but is unsure whether the obligation applies to one specific audience. It prepares a request to its compliance officer.",
    question: "Which framing matches the strong-escalation pattern?",
    options: [
      "I think this is fine and we plan to proceed; can you approve it?",
      "Escalate the question with reasoning attached: here is the workflow, who is affected, the control we added, and the point the framework does not settle, whether our disclosure obligation applies to this audience.",
      "Escalate after launch if a complaint appears.",
      "Avoid escalating to keep the compliance team focused on big issues."
    ],
    answer: [1],
    explanation:
      "Strong escalation gives the reviewer something specific to decide, a question with context, rather than a request for blanket approval. Any one of the triggers is enough: a large affected population, significant potential harm, or territory the team lacks standing to resolve such as law, contract, employment or professional regulation."
  },
  {
    id: "GV-15",
    course: 10,
    topic: "Governance Record",
    type: "single",
    scenario:
      "After twenty minutes of structured thinking, a team has the classification and gate, the data tier and route, the capability outcomes, and the affected-people notes for a new AI-assisted workflow. They now want it to survive a review meeting.",
    question: "What completes the one-page record?",
    options: [
      "A signature block and a logo.",
      "The evidence line: a success measure, a failure threshold, who monitors and how often, and the residual risk, plus the re-check triggers covering model, feature, data, audience, permission, policy, vendor terms and consequences.",
      "A copy of the full chat transcript.",
      "A statement that nothing can go wrong once controls are in place."
    ],
    answer: [1],
    explanation:
      "The final block is the evidence: a success measure, a failure threshold, a monitoring owner and cadence, and residual risk, which is what can still go wrong after every planned control works. A blank field beats a guessed one, and the share message asks for correction of assumptions rather than collecting signatures."
  },
  {
    id: "GV-16",
    course: 10,
    topic: "Incident response",
    type: "single",
    scenario:
      "A project manager realises a customer spreadsheet with account numbers went into a chat route that was not approved for it. She is worried about getting in trouble and considers quietly deleting the chat that evening.",
    question: "What is the correct first-hour procedure?",
    options: [
      "Delete the chat and tell no one, to avoid escalating the issue.",
      "Stop the spread, record the facts and where anything went onward, report promptly through the organisation's incident path, state the facts plainly without guessing or defending, and follow the incident owner's instructions on deletion, notification and evidence preservation.",
      "Notify the customer directly before internal reporting.",
      "Wait a week to see whether anything actually goes wrong."
    ],
    answer: [1],
    explanation:
      "The first-hour steps: stop the spread, record the facts, report promptly, state facts plainly, and follow the incident owner's instructions. Do not delete evidence and hope the issue disappears: deleting your copy removes your visibility, not the data, and turns a mistake into concealment. Managers note: how the first good-faith reporter is treated decides whether the next ten mistakes get reported."
  },
  {
    id: "GV-17",
    course: 10,
    topic: "Governance drift",
    type: "single",
    scenario:
      "A company's AI policy is sensible on paper. In practice, an analyst uses an easier unapproved tool that converts a protected spreadsheet into a shareable format in one click, and nobody has noticed for months.",
    question: "Which concept names this, and what is the best response?",
    options: [
      "A diligence gap to be solved by firing the analyst.",
      "Shadow AI caused by friction: when the approved path takes ten steps and the unapproved path takes one, people under deadline pressure take the one-step route; the response is to ask what makes the approved way harder and fix that friction.",
      "An acceptable arrangement during busy periods.",
      "A technology problem solved by buying a faster model."
    ],
    answer: [1],
    explanation:
      "Shadow AI is work data flowing through tools the organisation never approved, and it is not a reason to excuse violations; it is a signal to examine friction. The friction rule: fixing what makes the approved path harder reduces more risk than another reminder email."
  },
  {
    id: "GV-18",
    course: 10,
    topic: "Usage audit",
    type: "single",
    scenario:
      "A monthly audit looks at which tools people say they use, focusing on the workflows with formal approvals on record.",
    question: "What should the audit actually examine?",
    options: [
      "Only the formally approved workflows, since those are the ones that matter.",
      "The work people actually do: which AI workflows are really in use, what data really flows through them, whether defined human gates really ran, what new tools, skills, connectors or permissions appeared, and what changed in model, feature, route, data or audience.",
      "The number of AI-related emails sent that month.",
      "Only incidents that reached customers."
    ],
    answer: [1],
    explanation:
      "Governance drifts through small convenient choices, so the audit samples the real work, quarterly as a reasonable start, more often during rollouts. Audit the process, not the person: if the audit becomes a hidden performance review, people show only their cleanest work, and the system gaps stay hidden."
  },
  {
    id: "GV-19",
    course: 10,
    topic: "Re-check triggers",
    type: "single",
    scenario:
      "A workflow was approved a year ago. Since then the model family changed, a new connector with write access was added, the retention behaviour of the product changed, and the affected audience doubled.",
    question: "What do the course's re-check rules require?",
    options: [
      "Nothing; approval is annual and valid until its anniversary.",
      "A fresh review, because change is the stronger trigger than the calendar: model, feature, connector, permission, data, outside-content source, audience, consequence, and law or policy changes all require reconsidering the approval.",
      "Only a note in the meeting minutes that things changed.",
      "Immediate shutdown of the workflow pending next year's audit."
    ],
    answer: [1],
    explanation:
      "Calendar reminders help, but change is the stronger trigger. Approved last year is not a reason to skip review if the thing approved is no longer the same thing: a different model family, broader permissions, altered retention, or a larger affected population each reopens the questions."
  },
  {
    id: "GV-20",
    course: 10,
    topic: "One-minute checklist",
    type: "single",
    scenario:
      "A manager is about to approve an AI workflow that drafts customer renewal letters and, after review, sends them. She runs the four questions from memory.",
    question: "Which sequence matches the course's one-minute checklist?",
    options: [
      "Cost, speed, quality, then vendor reputation.",
      "Case (can AI do this work, with which gate), Data (tier, identifiers needed, approved route and purpose), Capability (source, reach, fit, outside content, actions), People (who is affected, fairness including exclusions, disclosure, escalation), then ask whether anything has changed since the last decision.",
      "Legal review, procurement, IT, then finance sign-off.",
      "Ask the model whether the workflow is compliant."
    ],
    answer: [1],
    explanation:
      "The four questions in order, plus the final habit: what changed since the last time we decided this was okay? If nothing changed, continue. Under all four sits one trap: forcing an answer into a plain yes or no. The middle answer is where professional judgment lives."
  },
  {
    id: "GV-21",
    course: 10,
    topic: "Redaction limits",
    type: "single",
    scenario:
      "A team strips surnames from a staff survey but keeps department, role, tenure and a rare medical condition column. Participants in the affected department number four, and the rare condition appears once.",
    question: "What is the problem and the correct standard?",
    options: [
      "No problem; removing names is redaction by definition.",
      "Partial redaction failure: enough identifying detail remains that a person can be re-identified, so the data is pseudonymized at best and must not be stored, reused or shared as if anonymous.",
      "The correct fix is to also remove tenure but keep the condition.",
      "The correct fix is to remove the condition but keep all the rest."
    ],
    answer: [1],
    explanation:
      "Redaction fails in two directions: partial removal that still identifies, and removal that breaks the task. Pseudonymized data, names replaced while a list still maps back, is not anonymous data and cannot be treated as such. The organization's own standard for anonymous governs the green tier."
  },
  {
    id: "GV-22",
    course: 10,
    topic: "Accountability",
    type: "single",
    scenario:
      "A bank's AI-assisted system produces a harmful customer decision. The bank's internal review notes that the model vendor supplied the weights, the assistant drafted the wording, and the reviewer clicked approve in two seconds.",
    question: "Where does accountability land, and why?",
    options: [
      "With the model vendor, since the weights produced the decision.",
      "With the organisation operating the system: accountability cannot move to a tool, an AI can automate work but not accountability, and the two-second approval is exactly the unstaffed gate problem.",
      "With the customer for not complaining earlier.",
      "With no one, since AI makes decisions as an act of nature."
    ],
    answer: [1],
    explanation:
      "The governing line: AI can automate work; it cannot automate accountability. If an AI-assisted system makes a harmful decision, the organisation operating it is responsible. The governance course's job is to design gates that are real, so accountability has somewhere to act before harm ships."
  }
];
