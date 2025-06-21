'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "../../styles/pregnancyWeek.css";

export default function StageDetailPage() {
  const router = useRouter();
  const [stage, setStage] = useState("");
  const [detail, setDetail] = useState("");
  const [postpartumWeek, setPostpartumWeek] = useState("");
  const [askPostpartumWeeks, setAskPostpartumWeeks] = useState(false);

  useEffect(() => {
    const storedStage = localStorage.getItem("selectedStage");
    setStage(storedStage || "");
  }, []);

  const handleDetailSubmit = () => {
    const value = parseInt(detail, 10);

    if (stage === "pregnant" && (value < 0 || value > 44)) {
      alert("Please enter a value between 0 and 44 weeks.");
      return;
    }

    if (stage === "postpartum" && (value < 0 || value > 18)) {
      alert("Please enter a value between 0 and 18 months.");
      return;
    }

    if (stage === "young" && (value < 0 || value > 60)) {
      alert("Please enter a value between 0 and 60 months.");
      return;
    }

    localStorage.setItem("selectedDetail", value);

    if (stage === "postpartum" && value === 0) {
      setAskPostpartumWeeks(true);
    } else {
      router.push("/detail");
    }
  };

  const handlePostpartumWeekSubmit = () => {
    const value = parseInt(postpartumWeek, 10);
    if (value < 0 || value > 4) {
      alert("Please enter a value between 0 and 4 weeks.");
      return;
    }
    localStorage.setItem("postpartumWeekDetail", value);
    router.push("/detail");
  };

  const skipPostpartumWeek = () => {
    router.push("/detail");
  };

  return (
    <div className="pregnancy-week-container">
      {stage === "pregnant" && (
        <>
          <label>How many weeks pregnant?</label>
          <input
            type="number"
            min="0"
            max="44"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
          <button onClick={handleDetailSubmit}>Personalize My Experience</button>
        </>
      )}

      {stage === "postpartum" && !askPostpartumWeeks && (
        <>
          <label>How many months postpartum?</label>
          <input
            type="number"
            min="0"
            max="18"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
          <button onClick={handleDetailSubmit}>Personalize My Experience</button>
        </>
      )}

      {stage === "young" && (
        <>
          <label>How many months old is your child?</label>
          <input
            type="number"
            min="0"
            max="60"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
          <button onClick={handleDetailSubmit}>Personalize My Experience</button>
        </>
      )}

      {askPostpartumWeeks && (
        <div>
          <label>Want to share how many weeks postpartum you are? It helps us support you better.</label>
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
        </div>
      )}
    </div>
  );
}
