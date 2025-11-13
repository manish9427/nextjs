import { useState, useEffect } from "react";

function useApiMessage() {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    async function fetchMessage() {
      try {
        const res = await fetch("/api/message");
        const data = await res.json();
        setMessage(data.message);
      } catch (err) {
        console.error("Failed to fetch API message", err);
        setMessage("Error fetching message");
      }
    }

    fetchMessage();
  }, []);

  return message;
}

export default function HomePage() {
  const apiMessage = useApiMessage();

  return (
    <div>
      <p>API Message: {apiMessage || "Loading..."}</p>
    </div>
  );
}
