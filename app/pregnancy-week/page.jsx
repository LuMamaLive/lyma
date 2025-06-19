// app/pregnancy-week/page.jsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../../styles/pregnancyWeek.css";

export default function PregnancyWeek() {
  const router = useRouter();
  const [selectedWeek, setSelectedWeek] = useState(null);

  useEffect(() => {
    const savedWeek = localStorage.getItem("selectedWeek");
    if (savedWeek) setSelectedWeek(savedWeek);
  }, []);

  const weeks = [
    "Less than 4 weeks",
    "4-12 weeks",
    "13-20 weeks",
    "21-28 weeks",
    "29+ weeks",
  ];

  const handleSelect = (week) => {
    setSelectedWeek(week);
    localStorage.setItem("selectedWeek", week);
  };

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    if (!selectedWeek) {
      alert("Please select how far along you are.");
      return;
    }
    // Next step here
    alert(`You selected: ${selectedWeek}`);
  };

  return (
    <main className="pregnancy-container">
      <h1>How far along are you?</h1>
      <div className="week-options">
        {weeks.map((week) => (
          <button
            key={week}
            className={`week-card ${selectedWeek === week ? "selected" : ""}`}
            onClick={() => handleSelect(week)}
            type="button"
          >
            {week}
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
