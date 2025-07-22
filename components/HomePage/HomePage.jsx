import { useState } from 'react';
import Timer from '../Timer/Timer';
import Calculator from '../Calculator/Calculator';
import NavBar from '../NavBar/NavBar'
import Counter from '../Counter/Counter';

export default function HomePage() {
  const [activeComponent, setActiveComponent] = useState(null);
  const handleClick = (component) => {
    setActiveComponent(activeComponent === component ? null : component);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to My Next.js App</h1>
      <NavBar onNavClick={handleClick} />
      <div style={{ marginTop: '20px' }}>
        {activeComponent === 'Timer' && <Timer />}
        {activeComponent === 'Calculator' && <Calculator />}
        {activeComponent === 'Counter' && <Counter />}
      </div>
    </div>
  );
}