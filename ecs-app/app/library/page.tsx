"use client";

import { useState } from "react";
import goals from "../data/ecs-goals.json";

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

  const filtered = typed.filter((goal) =>
    `${goal.Skill_Area} ${goal.Category} ${goal.Goal_Text} ${goal.Measurement_Method}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const copyGoal = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Goal copied to clipboard");
    } catch {
      alert("Could not copy goal");
    }
  };

  return (
    <main style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>Goal Library</h1>

      <p style={{ marginBottom: "20px", color: "#555" }}>
        Browse ready-to-use ECS goals for grades 6–12.
      </p>

      <input
        placeholder="Search goals..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "30px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />

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