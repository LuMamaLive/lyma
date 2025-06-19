
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const PreviewTiles = dynamic(() => import("../components/PreviewTiles"), { ssr: false });

export default function DetailPage() {
  const [stage, setStage] = useState(null);
  const [tone, setTone] = useState(null);
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    setStage(localStorage.getItem("selectedStage"));
    setTone(localStorage.getItem("selectedTone"));
    setDetail(localStorage.getItem("selectedDetail"));
  }, []);

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Your Personalization</h1>
      <div className="space-y-2 text-lg">
        <p><strong>Tone:</strong> {tone || "Not selected"}</p>
        <p><strong>Stage:</strong> {stage || "Not selected"}</p>
        <p><strong>{stage === "pregnant" ? "Week" : "Month"}:</strong> {detail || "Not selected"}</p>
      </div>

      {stage && tone && (
        <PreviewTiles stage={stage} tone={tone} />
      )}
    </main>
  );
}
