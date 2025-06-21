
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../../styles/journeyStage.css";

export default function JourneyStage() {
  const router = useRouter();
  const [selectedStage, setSelectedStage] = useState(null);

  useEffect(() => {
    const savedStage = localStorage.getItem("selectedStage");
    if (savedStage) setSelectedStage(savedStage);
  }, []);

  const handleStageClick = (value) => {
    setSelectedStage(value);
    localStorage.setItem("selectedStage", value);
    localStorage.setItem("selectedJourney", value);

    if (value === "postpartum") {
      router.push("/postpartum-week");
    } else if (value === "mom of young child") {
      router.push("/young-child-months");
    } else if (value === "pregnant") {
      router.push("/pregnancy-week");
    } else {
      router.push("/detail");
    }
  };

  const stages = [
    { label: "Trying to conceive (TTC)", value: "ttc" },
    { label: "Pregnant", value: "pregnant" },
    { label: "Postpartum", value: "postpartum" },
    { label: "Mom of young child (0–60 months)", value: "mom of young child" },
  ];

  return (
    <main className="quiz-stage">
      <h1>Where are you in your journey?</h1>
      <div className="stage-grid">
        {stages.map((stage) => (
          <button
            key={stage.value}
            className={`stage-tile ${selectedStage === stage.value ? "selected" : ""}`}
            onClick={() => handleStageClick(stage.value)}
          >
            {stage.label}
          </button>
        ))}
      </div>
    </main>
  );
}
