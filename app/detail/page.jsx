
'use client';
import React, { useEffect, useState } from 'react';
import PreviewTiles from '../components/PreviewTiles';

export default function DetailPage() {
  const [tone, setTone] = useState(null);
  const [journey, setJourney] = useState(null);
  const [week, setWeek] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTone(localStorage.getItem('selectedTone'));
      setJourney(localStorage.getItem('selectedJourney'));
      setWeek(localStorage.getItem('selectedWeek'));
    }
  }, []);

  return (
    <main className="max-w-xl mx-auto p-6">
      <button onClick={() => window.history.back()} className="text-blue-500 mb-4">
        &larr; Back
      </button>
      <h1 className="text-2xl font-semibold mb-4">Your Personalization</h1>
      <div className="space-y-2 text-lg">
        <p><strong>Tone:</strong> {tone || "Not selected"}</p>
        <p><strong>Journey Stage:</strong> {journey || "Not selected"}</p>
        <p><strong>Week/Month:</strong> {week || "Not specified"}</p>
      </div>
      <div className="mt-8">
        <PreviewTiles />
      </div>
    </main>
  );
}
