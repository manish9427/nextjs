import { useState, useEffect } from 'react';
export default function HomePage() {
  const [apiMessage, setApiMessage] = useState('');
  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setApiMessage(data.message))
      .catch((error) => console.error('Error fetching API:', error));
  }, []);
  return (
    <div>
      <p>API Message: {apiMessage || 'Loading...'}</p>
    </div>
  );
}