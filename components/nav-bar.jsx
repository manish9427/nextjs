import Link from 'next/link';
import '../styles/nav-bar.css';

export default function NavBar() {
  const navItems = ['Counter', 'Timer', 'Calculator', 'Slider', 'Form', 'Store','Todo-List'];

  return (
    <nav className="nav">
      <div className="nav-group">
        {navItems.map((item) => (
          <Link key={item} href={`/${item.toLowerCase()}`}>
            <button className="button" aria-label={`Go to ${item} page`}>
              {item}
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