import Link from "next/link";

export default function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        padding: "16px 0 24px 0",
        borderBottom: "1px solid #e5e7eb",
        marginBottom: "24px",
        fontFamily: "system-ui",
      }}
    >
      <Link href="/" style={{ fontWeight: "bold", textDecoration: "none" }}>
        EduPrompt ECS Beta
      </Link>

      <Link href="/library">Goal Library</Link>

      <Link href="/create-goal">Create Goal</Link>

      <Link href="/progress">Progress Monitor</Link>
    </nav>
  );
}