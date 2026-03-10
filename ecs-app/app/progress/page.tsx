"use client";

import { useState } from "react";
import NavBar from "../component/NavBar";

export default function ProgressPage() {
  const [studentCode, setStudentCode] = useState("ID-001");
  const [skillArea, setSkillArea] = useState("Reading");
  const [goalArea, setGoalArea] = useState("Comprehension");
  const [baseline, setBaseline] = useState("40%");
  const [currentPerformance, setCurrentPerformance] = useState("65%");
  const [notes, setNotes] = useState(
    "Student is making steady progress with teacher support."
  );

  const progressReport = `Student ${studentCode} is currently working on ${skillArea.toLowerCase()} goals in the area of ${goalArea.toLowerCase()}. Baseline performance was ${baseline}, and current performance is ${currentPerformance}. ${notes}`;

  const copyReport = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(progressReport);
        alert("Progress report copied to clipboard");
        return;
      }

      const textArea = document.createElement("textarea");
      textArea.value = progressReport;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);

      if (successful) {
        alert("Progress report copied to clipboard");
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

      <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
        Progress Monitoring
      </h1>

      <p style={{ marginBottom: "24px", color: "#555" }}>
        Enter progress information and generate ready-to-use report language.
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
          <label style={labelStyle}>Student Code</label>
          <input
            value={studentCode}
            onChange={(e) => setStudentCode(e.target.value)}
            style={inputStyle}
          />
        </div>

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
          <label style={labelStyle}>Goal Area</label>
          <input
            value={goalArea}
            onChange={(e) => setGoalArea(e.target.value)}
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
          <label style={labelStyle}>Current Performance</label>
          <input
            value={currentPerformance}
            onChange={(e) => setCurrentPerformance(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ gridColumn: "1 / -1" }}>
          <label style={labelStyle}>Teacher Notes</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            style={{
              ...inputStyle,
              minHeight: "110px",
              resize: "vertical",
            }}
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
          Generated Progress Report
        </h2>

        <textarea
          readOnly
          value={progressReport}
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

        <button onClick={copyReport} style={buttonStyle}>
          Copy Progress Report
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