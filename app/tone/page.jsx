"use client";

import "../../styles/tone.css";

export default function ToneQuiz() {
  return (
    <main className="tone-container">
      <h1>Which tone of support feels right for you today?</h1>
      <div className="tone-options">
        <button className="tone-card calm">Calm 💆‍♀️</button>
        <button className="tone-card practical">Practical 🛠️</button>
        <button className="tone-card cheerful">Cheerful 🌈</button>
        <button className="tone-card deep">Deep 💭</button>
      </div>
    </main>
  );
}
