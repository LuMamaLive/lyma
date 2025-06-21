'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function JourneyStagePage() {
  const router = useRouter();
  const [selectedStage, setSelectedStage] = useState(null);

  useEffect(() => {
    const savedStage = localStorage.getItem("selectedStage");
    if (savedStage) setSelectedStage(savedStage);
  }, []);

  const stages = [
    { label: "Trying to conceive (TTC)", value: "ttc" },
    { label: "Pregnant", value: "pregnant" },
    { label: "Postpartum (0–18 months)", value: "postpartum" },
    { label: "Mom of a young child (0–60 months)", value: "young" }
  ];

  const handleSelect = (value) => {
    setSelectedStage(value);
    localStorage.setItem("selectedStage", value);
  };

  const handleNext = () => {
    if (!selectedStage) return;
    if (selectedStage === "ttc") {
      router.push("/detail");
    } else {
      router.push("/stage-detail");
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <main className="journey-container">
      <h1>Where are you in your journey?</h1>
      <div className="stage-options">
        {stages.map(({ label, value }) => (
          <button
            key={value}
            className={`stage-card ${selectedStage === value ? "selected" : ""}`}
            onClick={() => handleSelect(value)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="button-row">
        <button onClick={handleBack}>Back</button>
        <button onClick={handleNext}>Continue</button>
      </div>
    </main>
  );
}
