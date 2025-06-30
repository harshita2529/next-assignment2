import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <p>Welcome! You are authenticated.</p>
      <Link href="/profile" className="button-link">
        View Profile
      </Link>
    </div>
  );
}
