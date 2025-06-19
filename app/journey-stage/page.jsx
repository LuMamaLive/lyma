// app/journey-stage/page.jsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../../styles/journeyStage.css";

export default function JourneyStage() {
  const router = useRouter();
  const [selectedStage, setSelectedStage] = useState(null);

  useEffect(() => {
    const savedStage = localStorage.getItem("selectedJourneyStage");
    if (savedStage) setSelectedStage(savedStage);
  }, []);

  const stages = [
    "Trying to conceive (TTC)",
    "Pregnant",
    "New mom (0-12 months)",
    "Experienced mom",
  ];

  const handleSelect = (stage) => {
    setSelectedStage(stage);
    localStorage.setItem("selectedJourneyStage", stage);
  };

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    if (!selectedStage) {
      alert("Please select your journey stage before continuing.");
      return;
    }

    if (selectedStage === "Pregnant") {
      router.push("/pregnancy-week");
    } else {
      // Placeholder: move to a different next step or summary
      alert(`You selected: ${selectedStage}`);
    }
  };

  return (
    <main className="journey-container">
      <h1>Where are you in your journey?</h1>
      <div className="stage-options">
        {stages.map((stage) => (
          <button
            key={stage}
            className={`stage-card ${selectedStage === stage ? "selected" : ""}`}
            onClick={() => handleSelect(stage)}
            type="button"
          >
            {stage}
          </button>
        ))}
      </div>
      <div className="buttons-row">
        <button className="back-button" onClick={handleBack} type="button">
          Back
        </button>
        <button className="next-button" onClick={handleNext} type="button">
          Next
        </button>
      </div>
    </main>
  );
}
