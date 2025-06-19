"use client";

import "../../styles/tone.css";

export default function ToneQuiz() {
  return (
    <main className="tone-container">
      <h1>Which tone of support feels right for you today?</h1>
      <div className="tone-options">
        <button className="tone-card calm">
          <h2>Calm 💆‍♀️</h2>
          <p>Gentle, soothing, supportive tone to ease anxiety and overwhelm.</p>
        </button>
        <button className="tone-card playful">
          <h2>Playful 🎉</h2>
          <p>Lighthearted and fun — a supportive friend who makes you smile.</p>
        </button>
        <button className="tone-card realtalk">
          <h2>Realtalk 💬</h2>
          <p>Honest, direct, no-fluff advice from someone who’s been there.</p>
        </button>
      </div>
    </main>
  );
}
