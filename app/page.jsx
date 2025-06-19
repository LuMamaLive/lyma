"use client";

import "../style.css";

export default function Home() {
  const handleClick = () => {
    window.location.href = "/tone";
  };

  return (
    <main className="hero">
      <h1>Welcome to LuMama 💗</h1>
      <button className="cta-button" onClick={handleClick}>Take the Quiz</button>
    </main>
  );
}
