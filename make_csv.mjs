import { QUESTIONS, COURSES } from "./src/data/index.js";
import fs from "fs";

const esc = (s) => '"' + String(s).replace(/"/g, '""') + '"';
const letter = (i) => "ABCDEF"[i];
const courseName = (id) =>
  id === 0 ? "Sample Set (the four exam questions)" : (COURSES.find((c) => c.id === id) || {}).title || "Course " + id;

const rows = [
  ["No", "ID", "Section", "Topic", "Type", "Scenario", "Question", "Option A", "Option B", "Option C", "Option D", "Correct", "Reason (why the answer is right)"]
];
QUESTIONS.forEach((q, n) => {
  rows.push([
    n + 1, q.id, courseName(q.course), q.topic,
    q.type === "multi" ? "Select TWO" : "Single",
    q.scenario, q.question,
    ...q.options, q.answer.map((i) => letter(i) + ". " + q.options[i]).join(" | "),
    q.explanation
  ]);
});
fs.writeFileSync("/home/user/Foundations-Question-Bank.csv", rows.map((r) => r.map(esc).join(",")).join("\n"), "utf-8");
console.log("rows:", rows.length - 1);
