"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <div style={{ textAlign: "center", padding: "50px 20px", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "10px", color: "#d32f2f" }}>⚠️ Error</h1>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "20px", color: "#666" }}>Something went wrong!</h2>
      <p style={{ marginBottom: "30px", color: "#888", fontSize: "1rem", maxWidth: "500px" }}>{error?.message || "An unexpected error occurred. Please try again."}</p>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={() => reset()} style={{ padding: "10px 20px", backgroundColor: "#0070f3", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "1rem" }}>
          Try Again
        </button>
        <Link href="/" style={{ padding: "10px 20px", backgroundColor: "#666", color: "white", borderRadius: "5px", textDecoration: "none", fontSize: "1rem" }}>
          Go Home
        </Link>
      </div>
    </div>
  );
}
