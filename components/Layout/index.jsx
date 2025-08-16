import NavBar from '../NavBar';
import '../../styles/Layout.css';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <h1>Welcome to My Next.js App</h1>
      <NavBar />
      <main>{children}</main>
    </div>
  );
}
