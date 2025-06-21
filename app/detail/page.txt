'use client';
import React, { useEffect, useState } from 'react';

export default function DetailPage() {
  const [tone, setTone] = useState('');
  const [journey, setJourney] = useState('');
  const [weekMonth, setWeekMonth] = useState('');

  useEffect(() => {
    const storedTone = localStorage.getItem('selectedTone');
    const storedJourney = localStorage.getItem('selectedJourney');
    const storedWeekMonth = localStorage.getItem('selectedWeekMonth');
    setTone(storedTone || '');
    setJourney(storedJourney || '');
    setWeekMonth(storedWeekMonth || '');
  }, []);

  return (
    <main className="max-w-xl mx-auto p-6">
      <button onClick={() => window.history.back()} className="text-blue-500 mb-4">
        &larr; Back
      </button>
      <h1 className="text-2xl font-semibold mb-4">Your Personalization</h1>
      <div className="space-y-2 text-lg">
        <p><strong>Tone:</strong> {tone || "Not selected"}</p>
        <p><strong>Journey:</strong> {journey || "Not selected"}</p>
        <p><strong>Week/Month:</strong> {weekMonth || "Not selected"}</p>
      </div>
    </main>
  );
}
