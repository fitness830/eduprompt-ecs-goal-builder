"use client";

import { useMemo, useState } from "react";
import goals from "../data/ecs-goals.json";
import NavBar from "../component/NavBar";

type GoalRow = {
  Goal_ID: string;
  Skill_Area: string;
  Grade_Band: string;
  Category: string;
  Goal_Text: string;
  Measurement_Method: string;
};

export default function LibraryPage() {
  const typed = goals as GoalRow[];

  const [search, setSearch] = useState("");
  const [skillFilter, setSkillFilter] = useState("All");
  const [gradeFilter, setGradeFilter] = useState("All");

  const skillOptions = useMemo(() => {
    const unique = Array.from(new Set(typed.map((g) => g.Skill_Area)));
    return ["All", ...unique];
  }, [typed]);

  const gradeOptions = useMemo(() => {
    const unique = Array.from(new Set(typed.map((g) => g.Grade_Band)));
    return ["All", ...unique];
  }, [typed]);

  const filtered = typed.filter((goal) => {
    const matchesSearch = `${goal.Skill_Area} ${goal.Category} ${goal.Goal_Text} ${goal.Measurement_Method}`
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesSkill =
      skillFilter === "All" || goal.Skill_Area === skillFilter;

    const matchesGrade =
      gradeFilter === "All" || goal.Grade_Band === gradeFilter;

    return matchesSearch && matchesSkill && matchesGrade;
  });

  const copyGoal = async (text: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        alert("Goal copied to clipboard");
        return;
      }

      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);

      if (successful) {
        alert("Goal copied to clipboard");
      } else {
        alert("Copy failed. Please press and hold to copy manually.");
      }
    } catch {
      alert("Copy failed. Please press and hold to copy manually.");
    }
  };

  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <NavBar />

      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>Goal Library</h1>

      <p style={{ marginBottom: "20px", color: "#555" }}>
        Browse ready-to-use ECS goals for grades 6–12.
      </p>

      <div
        style={{
          display: "grid",
          gap: "12px",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          marginBottom: "24px",
        }}
      >
        <input
          placeholder="Search goals..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />

        <select
          value={skillFilter}
          onChange={(e) => setSkillFilter(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        >
          {skillOptions.map((skill) => (
            <option key={skill} value={skill}>
              {skill}
            </option>
          ))}
        </select>

        <select
          value={gradeFilter}
          onChange={(e) => setGradeFilter(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        >
          {gradeOptions.map((grade) => (
            <option key={grade} value={grade}>
              {grade}
            </option>
          ))}
        </select>
      </div>

      <p style={{ color: "#666", marginBottom: "20px" }}>
        Showing {filtered.length} goal{filtered.length === 1 ? "" : "s"}
      </p>

      {filtered.length === 0 ? (
        <p style={{ color: "#666" }}>No goals found.</p>
      ) : (
        filtered.map((goal) => (
          <div
            key={goal.Goal_ID}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              marginBottom: "16px",
            }}
          >
            <strong>
              {goal.Skill_Area} • {goal.Grade_Band} • {goal.Category}
            </strong>

            <p style={{ marginTop: "10px" }}>{goal.Goal_Text}</p>

            <p style={{ color: "#777", marginTop: "10px" }}>
              Measurement: {goal.Measurement_Method}
            </p>

            <p style={{ marginTop: "10px", color: "#555", fontSize: "14px" }}>
              Copy and paste this goal directly into your IEP documentation workflow.
            </p>

            <button
              onClick={() => copyGoal(goal.Goal_Text)}
              style={{
                marginTop: "14px",
                padding: "10px 14px",
                borderRadius: "8px",
                border: "none",
                background: "#2563eb",
                color: "white",
                cursor: "pointer",
              }}
            >
              Copy Goal
            </button>
          </div>
        ))
      )}
    </main>
  );
}