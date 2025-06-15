import { useEffect } from "react";

export default function About() {
    // Correct this line to use the correct syntax for useEffect
    useEffect(() => {
        // This effect runs once when the component mounts
        console.log("About component mounted");
    }
    , []);

  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page of your Next.js application.</p>
    </div>
  );
}