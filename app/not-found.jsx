"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px 20px", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>404</h1>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "20px", color: "#666" }}>Page Not Found</h2>
      <p style={{ marginBottom: "30px", color: "#888", fontSize: "1.1rem" }}>The page you're looking for doesn't exist.</p>
      <Link href="/" style={{ padding: "10px 20px", backgroundColor: "#0070f3", color: "white", borderRadius: "5px", textDecoration: "none", fontSize: "1rem" }}>
        Go Home
      </Link>
    </div>
  );
}
