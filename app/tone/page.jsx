"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../../styles/tone.css";

const tones = [
  {
    id: "calm",
    label: "Calm 💆‍♀️",
    description: "Gentle, soothing, supportive tone to ease anxiety and overwhelm.",
  },
  {
    id: "playful",
    label: "Playful 🎉",
    description: "Lighthearted and fun — a supportive friend who makes you smile.",
  },
  {
    id: "realtalk",
    label: "Realtalk 💬",
    description: "Honest, direct, no-fluff advice from someone who’s been there.",
  },
];

export default function ToneQuiz() {
  const router = useRouter();
  const [selectedTone, setSelectedTone] = useState(null);

  useEffect(() => {
    const savedTone = localStorage.getItem("selectedTone");
    if (savedTone) setSelectedTone(savedTone);
  }, []);

  const handleSelect = (id) => {
    setSelectedTone(id);
    localStorage.setItem("selectedTone", id);
  };

  const handleNext = () => {
    if (!selectedTone) {
      alert("Please select a tone before continuing.");
      return;
    }
    router.push("/pregnancy-week");
  };

  return (
    <main className="tone-container">
      <h1>Which tone of support feels right for you today?</h1>
      <div className="tone-options">
        {tones.map(({ id, label, description }) => (
          <button
            key={id}
            className={`tone-card ${id} ${selectedTone === id ? "selected" : ""}`}
            onClick={() => handleSelect(id)}
            type="button"
          >
            <h2>{label}</h2>
            <p>{description}</p>
          </button>
        ))}
      </div>
      <button className="next-button" onClick={handleNext} type="button">
        Next
      </button>
    </main>
  );
}
