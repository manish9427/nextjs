import Link from "next/link";
import "../styles/nav-bar.css";

export default function NavBar() {
  const navItems = [
    { label: "Counter", path: "/counter" },
    { label: "Timer", path: "/timer" },
    { label: "Calculator", path: "/calculator" },
    { label: "Slider", path: "/slider" },
    { label: "Store", path: "/store" },
    { label: "Todo List", path: "/todo-list" },
    { label: "Spotify", path: "/spotify" },
    { label: "Practice", path: "/practice" },
  ];

  return (
    <nav className="nav">
      <div className="nav-group">
        {navItems.map(({ label, path }) => (
          <Link key={path} href={path} className="button" aria-label={`Go to ${label} page`}>
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
