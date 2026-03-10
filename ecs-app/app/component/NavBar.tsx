import Link from "next/link";

export default function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        alignItems: "center",
        padding: "16px 0 24px 0",
        borderBottom: "1px solid #e5e7eb",
        marginBottom: "24px",
        fontFamily: "system-ui",
      }}
    >
      <Link
        href="/"
        style={{
          textDecoration: "none",
          fontWeight: 700,
          color: "#111827",
          marginRight: "8px",
        }}
      >
        EduPrompt ECS Beta
      </Link>

      <Link href="/library" style={{ textDecoration: "none", color: "#2563eb" }}>
        Goal Library
      </Link>

      <Link href="/create-goal" style={{ textDecoration: "none", color: "#2563eb" }}>
        Create Goal
      </Link>

      <Link href="/progress" style={{ textDecoration: "none", color: "#2563eb" }}>
        Progress Monitor
      </Link>
    </nav>
  );
}