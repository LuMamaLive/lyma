"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../../styles/pregnancyWeek.css";

export default function StageDetailPage() {
  const router = useRouter();
  const [journey, setJourney] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [postpartumWeek, setPostpartumWeek] = useState("");
  const [askPostpartumWeeks, setAskPostpartumWeeks] = useState(false);

  useEffect(() => {
    const storedJourney = localStorage.getItem("selectedJourney");
    setJourney(storedJourney || "");
  }, []);

  const handleMainSubmit = () => {
    const value = parseInt(inputValue, 10);

    if (journey === "pregnant" && (value < 0 || value > 44)) {
      alert("Please enter a number of weeks between 0 and 44.");
      return;
    }

    if (journey === "postpartum" && (value < 0 || value > 18)) {
      alert("Please enter a number of months between 0 and 18.");
      return;
    }

    if (journey === "young" && (value < 0 || value > 60)) {
      alert("Please enter a number of months between 0 and 60.");
      return;
    }

    localStorage.setItem("selectedWeekMonth", value);

    if (journey === "postpartum" && value === 0) {
      setAskPostpartumWeeks(true);
    } else {
      router.push("/detail");
    }
  };

  const handlePostpartumWeekSubmit = () => {
    const value = parseInt(postpartumWeek, 10);
    if (value < 0 || value > 4) {
      alert("Please enter a number of weeks between 0 and 4.");
      return;
    }
    localStorage.setItem("selectedWeekMonth", `${value} weeks postpartum`);
    router.push("/detail");
  };

  const skipPostpartumWeek = () => {
    router.push("/detail");
  };

  return (
    <div className="pregnancy-week-container">
      {journey === "pregnant" && (
        <>
          <label>How many weeks pregnant?</label>
          <input
            type="number"
            min="0"
            max="44"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleMainSubmit}>Personalize My Experience</button>
        </>
      )}

      {journey === "postpartum" && !askPostpartumWeeks && (
        <>
          <label>How many months postpartum?</label>
          <input
            type="number"
            min="0"
            max="18"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleMainSubmit}>Personalize My Experience</button>
        </>
      )}

      {journey === "young" && (
        <>
          <label>How many months old is your child?</label>
          <input
            type="number"
            min="0"
            max="60"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleMainSubmit}>Personalize My Experience</button>
        </>
      )}

      {askPostpartumWeeks && (
        <>
          <label>Want to share how many weeks postpartum you are?</label>
          <input
            type="number"
            min="0"
            max="4"
            value={postpartumWeek}
            onChange={(e) => setPostpartumWeek(e.target.value)}
          />
          <div>
            <button onClick={handlePostpartumWeekSubmit}>Continue</button>
            <button onClick={skipPostpartumWeek}>Skip</button>
          </div>
        </>
      )}
    </div>
  );
}
