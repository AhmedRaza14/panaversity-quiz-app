// Sample questions (Study Set) — the four exam-style scenarios that were
// provided as the structural template, with worked reasoning added.
export default [
  {
    id: "SS-01",
    course: 0,
    topic: "Delegation map: which step stays human",
    type: "single",
    scenario:
      "A tyre chain's pricing office moves shelf prices each month when the supplier's cost file arrives. The pricing manager has mapped six steps: cost file (the lines whose trade cost has moved, seen by the manager, who strikes out what she will not move); 4 percent limit (each remaining rise checked against her limit, seen by the manager, who keeps or drops each one); tag (the new shelf price on each kept line, copied unchanged by the note, fee band and till upload); fitting fee (the fee band for each moved line, agreed by branch managers on Thursday's call); branch note (the message telling branches what moved, rewritten by the operations manager where he disagrees); and till upload (one line per product from the shelf prices, matched by the till clerk against the tag prices).",
    question:
      "Which one step should stay with the pricing manager, with the other five handed to Claude?",
    options: [
      "The cost file step.",
      "The 4 percent limit step.",
      "The tag step.",
      "The till upload step."
    ],
    answer: [1],
    explanation:
      "The 4 percent limit step is the keep-or-drop judgment: it runs on her own commercial limits and decides which price rises actually move, and the next three steps copy its output unchanged. A wrong call there propagates into tags, fee bands and the till with no later check that could catch it. The other steps are measurable and reviewable by their consumers: the note, the fee band and the till upload all cross-check the tag prices, the managers review the branch note, and the till clerk matches the upload against the tags."
  },
  {
    id: "SS-02",
    course: 0,
    topic: "Context hygiene: source-derived drafts",
    type: "multi",
    scenario:
      "An opticians chain receives a 30-page document on a new voucher scheme. The associate must write a patient poster, a staff procedure and a manager summary. All three depend on one list of changes, not yet drawn from the document. She also owes the newsletter farewell note for a retiring colleague.",
    question: "Which TWO arrangements are most appropriate? (Select TWO.)",
    options: [
      "Extract and confirm the change list first, then draft all three pieces in that conversation.",
      "Write the farewell note in a new conversation, giving the colleague's details and newsletter tone.",
      "Draft the poster straight from the document, then extract the change list for the rest.",
      "Write the farewell note in the scheme conversation, in the tone the three drafts settled."
    ],
    answer: [0, 1],
    explanation:
      "The change list is the shared source for all three scheme pieces, so it is extracted and confirmed once and the drafts are built on it in the same session: one source, one thread of reasoning. Drafting the poster first and extracting afterwards inverts the dependency, and the scheme context is exactly the wrong context to carry a personal farewell note, both for privacy and for tone contamination."
  },
  {
    id: "SS-03",
    course: 0,
    topic: "Data tiers: identifiers still present",
    type: "multi",
    scenario:
      "A sports-physiotherapy clinic's associate wants Claude to find injury trends in a hockey club's treatment records for the coaches. She removed players' names but kept each record's position and match date, since trends are read by position. In the first team, several positions are each held by only one player. Nobody has confirmed the clinic's Claude workspace is approved for health records.",
    question: "Which TWO statements are correct? (Select TWO.)",
    options: [
      "The admin must confirm the workspace is approved for health records before upload, not after.",
      "Also removing position and match date would settle this upload before anything is sent.",
      "A record with a one-player position and a match date still identifies that player.",
      "Approval for health records can be confirmed after the first run, before coaches see trends."
    ],
    answer: [0, 2],
    explanation:
      "Two problems, two rules. Health records must not enter a route that is not approved for them, and approval comes before upload, never after a first run. Separately, redaction that leaves a one-player position plus a match date is still identifying detail. Removing those fields entirely would break the task, which needs positions, so the correct path is the approved route plus a control, not further stripping."
  },
  {
    id: "SS-04",
    course: 0,
    topic: "Explain what it does, then name the gate",
    type: "single",
    scenario:
      "A coffee importer's marketing associate is writing the newsletter line that tells trade customers how tasting notes are now produced. Claude drafts each note from the grower's technical sheet, and the buyer checks origin and grade on each note before the list goes out. Nobody else reads the notes. The draft line says: Our trade list is now fully automated.",
    question: "Which rewrite should replace it?",
    options: [
      "Our AI now writes every tasting note start to finish, as well as our buyer could.",
      "Claude drafts each note from the grower's sheet; our buyer then checks origin and grade.",
      "Claude now handles our tasting notes, and our buyer keeps an eye across the list.",
      "Our buyer still checks every note for origin and grade, just as for years."
    ],
    answer: [1],
    explanation:
      "State what the tool does, then name the human checkpoint, in one sentence. Option 1 overstates and sets a standard the tool will eventually miss. Option 3 drops the real checkpoint and implies a looser review than exists. Option 4 hides the AI's role entirely. Option 2 matches the actual workflow: drafting by AI, origin and grade checked by the buyer before anything goes out."
  }
];
