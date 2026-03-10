import Link from "next/link";
import NavBar from "./component/NavBar";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#ffffff",
        padding: "40px 20px",
        fontFamily: "system-ui",
      }}
    >
      <section
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >
        <NavBar />

        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          EduPrompt ECS Goal Builder
        </h1>

        <p
          style={{
            color: "#555",
            marginBottom: "40px",
          }}
        >
          Cloud-based goal generator and progress monitoring system for
          special education teachers (grades 6–12).
        </p>

        <div
          style={{
            display: "grid",
            gap: "20px",
          }}
        >
          <Link href="/library" style={{ textDecoration: "none" }}>
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "24px",
                cursor: "pointer",
              }}
            >
              <h2 style={{ fontSize: "22px", fontWeight: "bold" }}>
                Goal Library
              </h2>
              <p style={{ marginTop: "8px", color: "#666" }}>
                Browse ready-to-use ECS goals for grades 6–12.
              </p>
            </div>
          </Link>

          <Link href="/create-goal" style={{ textDecoration: "none" }}>
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "24px",
                cursor: "pointer",
              }}
            >
              <h2 style={{ fontSize: "22px", fontWeight: "bold" }}>
                Create Goal
              </h2>
              <p style={{ marginTop: "8px", color: "#666" }}>
                Generate a custom measurable goal using a simple teacher input form.
              </p>
            </div>
          </Link>

          <Link href="/progress" style={{ textDecoration: "none" }}>
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "24px",
                cursor: "pointer",
              }}
            >
              <h2 style={{ fontSize: "22px", fontWeight: "bold" }}>
                Progress Monitoring
              </h2>
              <p style={{ marginTop: "8px", color: "#666" }}>
                Generate ready-to-use progress report language for IEP updates.
              </p>
            </div>
          </Link>
        </div>

        <div
          style={{
            marginTop: "32px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "12px",
            background: "#f9fafb",
          }}
        >
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "8px",
            }}
          >
            Private Beta Feedback
          </h3>

          <p style={{ color: "#555", marginBottom: "12px" }}>
            This beta is being tested by a small group of teachers. Please share
            your feedback after using the tool.
          </p>

          <a
            href="PASTE-YOUR-GOOGLE-FORM-LINK-HERE"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 16px",
              borderRadius: "8px",
              background: "#2563eb",
              color: "white",
              textDecoration: "none",
            }}
          >
            Give Beta Feedback
          </a>
        </div>
      </section>
    </main>
  );
}