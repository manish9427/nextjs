import { useState, useEffect } from 'react';

export function useApiMessage() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    let isMounted = true;
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) setMessage(data.message);
      })
      .catch((error) => console.error('Error fetching API:', error));
    return () => {
      isMounted = false;
    };
  }, []);
  return message;
}
