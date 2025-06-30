"use client";

import { usePathname } from "next/navigation";
import { logout } from "../utils";

export default function ClientHeader() {
  const pathname = usePathname();

  // hide on /login
  if (pathname === "/login") {
    return null;
  }

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: "1rem",
        background: "#eee",
      }}
    >
      <button
        onClick={logout}
        className="button-link"
        style={{
          marginTop: 0,
        }}
      >
        Logout
      </button>
    </header>
  );
}
