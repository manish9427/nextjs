import NavBar from "./nav-bar";
import "../styles/layout.css"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <h1>Welcome to My Next.js App</h1>
        <NavBar />
      </header>
      <main>{children}</main>
    </div>
  );
}
