export default function NavBar({ onNavClick }) {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '10px', background: '#f0f0f0' }}>
      <button onClick={() => onNavClick('Timer')} style={{ cursor: 'pointer' }}>
        Timer
      </button>
      <button onClick={() => onNavClick('Calculator')} style={{ cursor: 'pointer' }}>
        Calculator
      </button>
            <button onClick={() => onNavClick('Counter')} style={{ cursor: 'pointer' }}>
        Counter
      </button>
    </nav>
  );
}