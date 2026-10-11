import React, { useMemo, useState } from "react";
import { QUESTIONS, COURSES } from "./data/index.js";

const LETTERS = ["A", "B", "C", "D", "E", "F"];

function shuffle(list) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function isCorrect(q, selected) {
  if (!selected || selected.length === 0) return false;
  const a = [...q.answer].sort().join(",");
  const b = [...selected].sort().join(",");
  return a === b;
}

function courseLabel(id) {
  if (id === 0) return "Sample Set";
  const c = COURSES.find((x) => x.id === id);
  return c ? c.short : `Course ${id}`;
}

function QuestionCard({ q, index, total, selected, setSelected, submitted, onSubmit, onNext, isLast }) {
  const multi = q.type === "multi";
  const toggle = (i) => {
    if (submitted) return;
    if (multi) {
      setSelected(selected.includes(i) ? selected.filter((x) => x !== i) : [...selected, i]);
    } else {
      setSelected([i]);
    }
  };
  const correct = submitted && isCorrect(q, selected);

  return (
    <div className="card">
      <div className="meta-row">
        <span className="pill pill-course">{courseLabel(q.course)}</span>
        <span className="pill pill-topic">{q.topic}</span>
        <span className="qcount">
          Question {index + 1} / {total}
        </span>
      </div>

      <p className="scenario">{q.scenario}</p>

      <h3 className="qtext">
        {q.question} {multi && <span className="multi-note">(Select TWO.)</span>}
      </h3>

      <div className="options">
        {q.options.map((opt, i) => {
          const chosen = selected.includes(i);
          const isAnswer = q.answer.includes(i);
          let cls = "option";
          if (submitted) {
            if (isAnswer) cls += " option-correct";
            else if (chosen) cls += " option-wrong";
          } else if (chosen) {
            cls += " option-chosen";
          }
          return (
            <button key={i} className={cls} onClick={() => toggle(i)} disabled={submitted}>
              <span className={multi ? "marker marker-box" : "marker marker-round"}>
                {chosen ? (multi ? "✓" : "●") : LETTERS[i]}
              </span>
              <span className="option-text">{opt}</span>
            </button>
          );
        })}
      </div>

      {!submitted ? (
        <div className="actions">
          <button className="btn btn-primary" disabled={selected.length === 0} onClick={onSubmit}>
            Submit answer
          </button>
          {selected.length === 0 && <span className="hint">Select an option to continue.</span>}
        </div>
      ) : (
        <div className={"feedback " + (correct ? "fb-good" : "fb-bad")}>
          <div className="fb-head">
            {correct ? "✓ Correct" : "✗ Not quite"}
            <span className="fb-answer">
              Correct answer:{" "}
              {q.answer.map((i) => `${LETTERS[i]}. ${q.options[i]}`).join("  |  ")}
            </span>
          </div>
          <div className="fb-body">
            <strong>Why:</strong> {q.explanation}
          </div>
          <div className="actions">
            <button className="btn btn-primary" onClick={onNext}>
              {isLast ? "See results" : "Next question →"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [mode, setMode] = useState("home"); // home | exam | review
  const [config, setConfig] = useState({
    count: 25,
    course: "all",
    type: "all"
  });
  const [session, setSession] = useState([]);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState([]);
  const [reviewCourse, setReviewCourse] = useState("all");

  const counts = useMemo(() => {
    const per = {};
    COURSES.forEach((c) => {
      per[c.id] = QUESTIONS.filter((q) => q.course === c.id).length;
    });
    return {
      per,
      samples: QUESTIONS.filter((q) => q.course === 0).length,
      multi: QUESTIONS.filter((q) => q.type === "multi").length
    };
  }, []);

  const startExam = (pool, count) => {
    const chosen = shuffle(pool).slice(0, Math.min(count, pool.length));
    setSession(chosen);
    setIdx(0);
    setSelected([]);
    setSubmitted(false);
    setResults([]);
    setMode("exam");
  };

  const poolForConfig = () => {
    let pool = QUESTIONS;
    if (config.course !== "all") pool = pool.filter((q) => String(q.course) === String(config.course));
    if (config.type !== "all") pool = pool.filter((q) => q.type === config.type);
    return pool;
  };

  const onSubmit = () => {
    setSubmitted(true);
    setResults((r) => [...r, { q: session[idx], selected, correct: isCorrect(session[idx], selected) }]);
  };

  const onNext = () => {
    if (idx + 1 >= session.length) {
      setMode("results");
    } else {
      setIdx(idx + 1);
      setSelected([]);
      setSubmitted(false);
    }
  };

  const totalAnswered = results.length;
  const totalCorrect = results.filter((r) => r.correct).length;

  /* ---------------- HOME ---------------- */
  if (mode === "home") {
    return (
      <div className="wrap">
        <header className="hero">
          <div className="hero-tag">Panaversity Certified Associate — Foundations</div>
          <h1>Scenario Question Bank</h1>
          <p className="sub">
            {QUESTIONS.length} exam-style scenario questions with worked reasoning, built from the
            ten Foundations crash courses. Every question shows <em>why</em> the answer is right.
          </p>
          <div className="stats">
            <div className="stat"><b>{QUESTIONS.length}</b><span>questions</span></div>
            <div className="stat"><b>{counts.multi}</b><span>select-two</span></div>
            <div className="stat"><b>{QUESTIONS.length - counts.multi}</b><span>single-answer</span></div>
            <div className="stat"><b>11</b><span>sections</span></div>
          </div>
        </header>

        <section className="panel">
          <h2>1 · Graded exam</h2>
          <p className="muted">Random mix from the pool. Answers and reasons appear after you submit each question.</p>
          <div className="config-grid">
            <label className="field">
              <span>Questions</span>
              <select value={config.count} onChange={(e) => setConfig({ ...config, count: Number(e.target.value) })}>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100000}>All</option>
              </select>
            </label>
            <label className="field">
              <span>Section</span>
              <select value={config.course} onChange={(e) => setConfig({ ...config, course: e.target.value })}>
                <option value="all">All sections</option>
                <option value="0">Sample set (the four exam questions)</option>
                {COURSES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="field">
              <span>Format</span>
              <select value={config.type} onChange={(e) => setConfig({ ...config, type: e.target.value })}>
                <option value="all">Single &amp; select-two</option>
                <option value="single">Single answer only</option>
                <option value="multi">Select-two only</option>
              </select>
            </label>
          </div>
          <button className="btn btn-primary btn-lg" onClick={() => startExam(poolForConfig(), config.count)}>
            Start exam ({Math.min(config.count, poolForConfig().length)} questions)
          </button>
        </section>

        <section className="panel">
          <h2>2 · Practice by section</h2>
          <p className="muted">Drill one course at a time until the reasoning feels automatic.</p>
          <div className="chips">
            <button className="chip" onClick={() => startExam(QUESTIONS.filter((q) => q.course === 0), 100000)}>
              Sample set <span className="chip-count">{counts.samples}</span>
            </button>
            {COURSES.map((c) => (
              <button
                key={c.id}
                className="chip"
                onClick={() => startExam(QUESTIONS.filter((q) => q.course === c.id), 100000)}
              >
                {c.id}. {c.short} <span className="chip-count">{counts.per[c.id]}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="panel">
          <h2>3 · Study every answer</h2>
          <p className="muted">Browse the bank with correct answers and reasoning visible, one section or all at once.</p>
          <div className="actions">
            <label className="field">
              <span>Section</span>
              <select value={reviewCourse} onChange={(e) => setReviewCourse(e.target.value)}>
                <option value="all">All ({QUESTIONS.length})</option>
                <option value="0">Sample set ({counts.samples})</option>
                {COURSES.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.title} ({counts.per[c.id]})
                  </option>
                ))}
              </select>
            </label>
            <button className="btn btn-primary" onClick={() => setMode("review")}>
              Open the answer key
            </button>
          </div>
        </section>

        <footer className="foot">
          Built from the AI Agent Factory Foundations crash courses (Just Delegate It · What AI
          Actually Is · AI Fluency · Prompting 2026 · Markdown In, HTML Out · Code You Never Write ·
          Skills &amp; Connectors · How to Think in the AI Era · Workflow Design &amp; Diagnosis ·
          Governance, Risk &amp; Responsible Use).
        </footer>
      </div>
    );
  }

  /* ---------------- REVIEW ---------------- */
  if (mode === "review") {
    const shown =
      reviewCourse === "all"
        ? QUESTIONS
        : QUESTIONS.filter((q) => String(q.course) === String(reviewCourse));
    return (
      <div className="wrap">
        <TopBar title="Answer key — every question, every reason" onBack={() => setMode("home")} />
        <div className="actions" style={{ marginTop: 0, marginBottom: 16 }}>
          <label className="field">
            <span>Showing</span>
            <select value={reviewCourse} onChange={(e) => setReviewCourse(e.target.value)}>
              <option value="all">All sections ({QUESTIONS.length})</option>
              <option value="0">Sample set ({counts.samples})</option>
              {COURSES.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title} ({counts.per[c.id]})
                </option>
              ))}
            </select>
          </label>
          <span className="muted" style={{ margin: 0 }}>
            {shown.length} questions in view
          </span>
        </div>
        {shown.map((q, i) => (
          <div className="card" key={q.id}>
            <div className="meta-row">
              <span className="pill pill-course">{courseLabel(q.course)}</span>
              <span className="pill pill-topic">{q.topic}</span>
              <span className="qcount">{q.id}</span>
            </div>
            <p className="scenario">{q.scenario}</p>
            <h3 className="qtext">
              {q.question} {q.type === "multi" && <span className="multi-note">(Select TWO.)</span>}
            </h3>
            <div className="options">
              {q.options.map((opt, j) => (
                <div key={j} className={"option " + (q.answer.includes(j) ? "option-correct" : "option-static")}>
                  <span className="marker marker-round">{LETTERS[j]}</span>
                  <span className="option-text">{opt}</span>
                </div>
              ))}
            </div>
            <div className="feedback fb-good">
              <div className="fb-body">
                <strong>Why:</strong> {q.explanation}
              </div>
            </div>
          </div>
        ))}
        <div className="actions actions-center">
          <button className="btn btn-primary" onClick={() => setMode("home")}>Back to start</button>
        </div>
      </div>
    );
  }

  /* ---------------- RESULTS ---------------- */
  if (mode === "results") {
    const pct = totalAnswered ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
    const byCourse = {};
    results.forEach((r) => {
      const k = courseLabel(r.q.course);
      byCourse[k] = byCourse[k] || { c: 0, t: 0 };
      byCourse[k].t += 1;
      if (r.correct) byCourse[k].c += 1;
    });
    const wrong = results.filter((r) => !r.correct);
    return (
      <div className="wrap">
        <TopBar title="Results" onBack={() => setMode("home")} />
        <section className="panel panel-center">
          <div className={"score " + (pct >= 80 ? "score-good" : pct >= 60 ? "score-mid" : "score-bad")}>
            {pct}%
          </div>
          <p className="muted">
            {totalCorrect} of {totalAnswered} correct
            {pct >= 80 ? " — exam ready on this run." : pct >= 60 ? " — close; review the misses below." : " — work through the explanations, then retry."}
          </p>
          <div className="breakdown">
            {Object.entries(byCourse).map(([k, v]) => (
              <div className="brow" key={k}>
                <span>{k}</span>
                <b>
                  {v.c}/{v.t}
                </b>
              </div>
            ))}
          </div>
        </section>

        {wrong.length > 0 && (
          <section className="panel">
            <h2>Review the misses</h2>
            {wrong.map((r) => (
              <div className="card card-tight" key={r.q.id}>
                <div className="meta-row">
                  <span className="pill pill-course">{courseLabel(r.q.course)}</span>
                  <span className="pill pill-topic">{r.q.topic}</span>
                </div>
                <h3 className="qtext">{r.q.question}</h3>
                <p className="muted">
                  Correct answer: {r.q.answer.map((i) => `${LETTERS[i]}. ${r.q.options[i]}`).join("  |  ")}
                </p>
                <p className="fb-body">
                  <strong>Why:</strong> {r.q.explanation}
                </p>
              </div>
            ))}
          </section>
        )}

        <div className="actions actions-center">
          <button className="btn btn-primary" onClick={() => startExam(session, session.length)}>
            Retry this set
          </button>
          <button className="btn" onClick={() => setMode("home")}>
            New exam
          </button>
        </div>
      </div>
    );
  }

  /* ---------------- EXAM ---------------- */
  const q = session[idx];
  const progress = ((idx + (submitted ? 1 : 0)) / session.length) * 100;

  return (
    <div className="wrap">
      <div className="progressbar">
        <div className="progressfill" style={{ width: `${progress}%` }} />
      </div>
      <div className="examtop">
        <button className="btn btn-ghost" onClick={() => setMode("home")}>
          ← Exit
        </button>
        <span className="score-live">
          Score so far: {totalCorrect}/{totalAnswered || 0}
        </span>
      </div>
      <QuestionCard
        q={q}
        index={idx}
        total={session.length}
        selected={selected}
        setSelected={setSelected}
        submitted={submitted}
        onSubmit={onSubmit}
        onNext={onNext}
        isLast={idx + 1 >= session.length}
      />
    </div>
  );
}

function TopBar({ title, onBack }) {
  return (
    <div className="examtop examtop-titled">
      <button className="btn btn-ghost" onClick={onBack}>
        ← Back
      </button>
      <h2 className="topbar-title">{title}</h2>
    </div>
  );
}
