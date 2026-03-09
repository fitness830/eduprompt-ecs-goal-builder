"use client";

import { useState } from "react";
import NavBar from "../components/NavBar";

export default function CreateGoalPage() {
  const [skillArea, setSkillArea] = useState("Reading");
  const [gradeBand, setGradeBand] = useState("6-8");
  const [category, setCategory] = useState("Academic");
  const [baseline, setBaseline] = useState("40%");
  const [target, setTarget] = useState("80%");
  const [condition, setCondition] = useState(
    "given grade-level instructional materials"
  );
  const [measurement, setMeasurement] = useState("teacher-created probes");

  const generatedGoal = `Student will improve in ${skillArea.toLowerCase()} (${category.toLowerCase()}) from a baseline of ${baseline} to ${target} accuracy, when ${condition}, as measured by ${measurement}. Grade Band: ${gradeBand}.`;

  const copyGoal = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(generatedGoal);
        alert("Generated goal copied to clipboard");
        return;
      }

      const textArea = document.createElement("textarea");
      textArea.value = generatedGoal;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);

      if (successful) {
        alert("Generated goal copied to clipboard");
      } else {
        alert("Copy failed. Please press and hold to copy manually.");
      }
    } catch {
      alert("Copy failed. Please press and hold to copy manually.");
    }
  };

  return (
    <main
      style={{
        padding: "40px",
        maxWidth: "900px",
        margin: "auto",
        fontFamily: "system-ui",
      }}
    >
      <NavBar />

      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>Create Goal</h1>

      <p style={{ marginBottom: "24px", color: "#555" }}>
        Generate a custom ECS goal for grades 6–12.
      </p>

      <div
        style={{
          display: "grid",
          gap: "14px",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          marginBottom: "28px",
        }}
      >
        <div>
          <label style={labelStyle}>Skill Area</label>
          <select
            value={skillArea}
            onChange={(e) => setSkillArea(e.target.value)}
            style={inputStyle}
          >
            <option>Reading</option>
            <option>Writing</option>
            <option>Math</option>
            <option>Behavior</option>
            <option>Executive Function</option>
            <option>Transition</option>
          </select>
        </div>

        <div>
          <label style={labelStyle}>Grade Band</label>
          <select
            value={gradeBand}
            onChange={(e) => setGradeBand(e.target.value)}
            style={inputStyle}
          >
            <option>6-8</option>
            <option>9-12</option>
            <option>6-12</option>
          </select>
        </div>

        <div>
          <label style={labelStyle}>Category</label>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Baseline</label>
          <input
            value={baseline}
            onChange={(e) => setBaseline(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div>
          <label style={labelStyle}>Target</label>
          <input
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ gridColumn: "1 / -1" }}>
          <label style={labelStyle}>Condition</label>
          <input
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ gridColumn: "1 / -1" }}>
          <label style={labelStyle}>Measurement Method</label>
          <input
            value={measurement}
            onChange={(e) => setMeasurement(e.target.value)}
            style={inputStyle}
          />
        </div>
      </div>

      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: "12px",
          padding: "24px",
          background: "#f8fafc",
        }}
      >
        <h2 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "12px" }}>
          Generated Goal
        </h2>

        <textarea
          readOnly
          value={generatedGoal}
          style={{
            width: "100%",
            minHeight: "140px",
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            background: "#fff",
            color: "#222",
            lineHeight: 1.6,
            resize: "vertical",
            marginBottom: "16px",
          }}
        />

        <p style={{ marginBottom: "12px", color: "#555", fontSize: "14px" }}>
          Copy this goal and paste it directly into your IEP software
          (GO-IEP, Infinite Campus, Frontline, or PowerSchool).
        </p>

        <button onClick={copyGoal} style={buttonStyle}>
          Copy Generated Goal
        </button>
      </div>
    </main>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "6px",
  fontWeight: 600,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const buttonStyle: React.CSSProperties = {
  padding: "10px 16px",
  borderRadius: "8px",
  border: "none",
  background: "#2563eb",
  color: "white",
  cursor: "pointer",
};