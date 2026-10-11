import samples from "./samples.js";
import c01 from "./c01.js";
import c02 from "./c02.js";
import c03 from "./c03.js";
import c04 from "./c04.js";
import c05 from "./c05.js";
import c06 from "./c06.js";
import c07 from "./c07.js";
import c08 from "./c08.js";
import c09 from "./c09.js";
import c10 from "./c10.js";

export const COURSES = [
  { id: 1, short: "Just Delegate It", title: "Course 1 — Just Delegate It" },
  { id: 2, short: "What AI Actually Is", title: "Course 2 — What AI Actually Is" },
  { id: 3, short: "AI Fluency", title: "Course 3 — AI Fluency" },
  { id: 4, short: "Prompting 2026", title: "Course 4 — AI Prompting in 2026" },
  { id: 5, short: "Markdown → HTML", title: "Course 5 — Markdown In, HTML Out" },
  { id: 6, short: "Code You Never Write", title: "Course 6 — Code You Never Write" },
  { id: 7, short: "Skills & Connectors", title: "Course 7 — Skills & Connectors" },
  { id: 8, short: "How to Think", title: "Course 8 — How to Think in the AI Era" },
  { id: 9, short: "Workflow Design", title: "Course 9 — Workflow Design & Diagnosis" },
  { id: 10, short: "Governance & Risk", title: "Course 10 — Governance, Risk & Responsible Use" }
];

export const QUESTIONS = [
  ...samples,
  ...c01,
  ...c02,
  ...c03,
  ...c04,
  ...c05,
  ...c06,
  ...c07,
  ...c08,
  ...c09,
  ...c10
];

export const TOPICS = Array.from(
  new Set(QUESTIONS.map((q) => q.topic))
).sort();
