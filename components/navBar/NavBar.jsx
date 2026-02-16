import Link from "next/link";
import "./NavBar.css";

export default function NavBar() {
  const navItems = [
    { label: "Counter", path: "/Counter" },
    { label: "Timer", path: "/Timer" },
    { label: "Calculator", path: "/Calculator" },
    { label: "Slider", path: "/Slider" },
    { label: "FakeStore", path: "/FakeStore" },
    { label: "Todo List", path: "/TodoList" },
    { label: "Spotify", path: "/Spotify" },
    { label: "Drop Down", path: "/DropDown" },
    { label: "Practice", path: "/Practice" },
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
