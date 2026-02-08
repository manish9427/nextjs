export default function Loading() {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", fontSize: "1.2rem", color: "#666" }}>
      <div>
        <div style={{ animation: "spin 1s linear infinite", display: "inline-block", marginRight: "10px" }}>⏳</div>
        Loading...
      </div>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
