export default function NavBar({ onNavClick }) {
  return (
    <nav
      style={{
        display: "flex",
        padding: "10px",
        background: "#f0f0f0",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => onNavClick("Timer")}
          style={{ cursor: "pointer" }}
        >
          Timer
        </button>
        <button
          onClick={() => onNavClick("Calculator")}
          style={{ cursor: "pointer" }}
        >
          Calculator
        </button>
        <button
          onClick={() => onNavClick("Counter")}
          style={{ cursor: "pointer" }}
        >
          Counter
        </button>
        <button
          onClick={() => onNavClick("Slider")}
          style={{ cursor: "pointer" }}
        >
          Slider
        </button>
        <button
          onClick={() => onNavClick("Form")}
          style={{ cursor: "pointer" }}
        >
          Form
        </button>
      </div>
      <div>
        <button
          onClick={() => onNavClick("MyAccount")}
          style={{ cursor: "pointer" }}
        >
          My Account
        </button>
      </div>
    </nav>
  );
}
