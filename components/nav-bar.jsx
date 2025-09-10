import Link from "next/link";
import "../styles/nav-bar.css";
import path from "path";

export default function NavBar() {
  const navItems = [
    { label: "Counter", path: "counter" },
    { label: "Timer", path: "timer" },
    { label: "Calculator", path: "calculator" },
    { label: "Slider", path: "slider" },
    { label: "Form", path: "form" },
    { label: "Store", path: "store" },
    { label: "Todo List", path: "todo-list" },
    {label:"Display",path:"display"}
  ];

  return (
    <nav className="nav">
      <div className="nav-group">
        {navItems.map(({ label, path }) => (
          <Link key={path} href={`/${path}`}>
            <button className="button" aria-label={`Go to ${label} page`}>
              {label}
            </button>
          </Link>
        ))}
      </div>
      <div>
        <Link href="/my-account">
          <button className="button" aria-label="Go to My Account page">
            My Account
          </button>
        </Link>
      </div>
    </nav>
  );
}
