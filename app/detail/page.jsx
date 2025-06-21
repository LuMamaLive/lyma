'use client';
import React, { useEffect, useState } from 'react';

export default function DetailPage() {
  const [tone, setTone] = useState('');
  const [stage, setStage] = useState('');
  const [detail, setDetail] = useState('');
  const [postpartumWeek, setPostpartumWeek] = useState('');

  useEffect(() => {
    setTone(localStorage.getItem('selectedTone') || '');
    setStage(localStorage.getItem('selectedStage') || '');
    setDetail(localStorage.getItem('selectedDetail') || '');
    setPostpartumWeek(localStorage.getItem('postpartumWeekDetail') || '');
  }, []);

  const formatStageLabel = (key) => {
    switch (key) {
      case 'ttc': return 'Trying to Conceive';
      case 'pregnant': return 'Pregnant';
      case 'postpartum': return 'Postpartum (0–18 months)';
      case 'young': return 'Mom of a Young Child (0–60 months)';
      default: return 'Not selected';
    }
  };

  const formatDetailLabel = () => {
    if (stage === 'pregnant') return `${detail} weeks`;
    if (stage === 'postpartum') {
      if (detail === '0' && postpartumWeek) return `0 months (${postpartumWeek} weeks postpartum)`;
      return `${detail} months postpartum`;
    }
    if (stage === 'young') return `${detail} months old`;
    return 'Not specified';
  };

  return (
    <main className="max-w-xl mx-auto p-6">
      <button onClick={() => window.history.back()} className="text-blue-500 mb-4">
        &larr; Back
      </button>
      <h1 className="text-2xl font-semibold mb-4">Your Personalization</h1>
      <div className="space-y-2 text-lg">
        <p><strong>Tone:</strong> {tone || "Not selected"}</p>
        <p><strong>Journey Stage:</strong> {formatStageLabel(stage)}</p>
        <p><strong>Week/Month:</strong> {formatDetailLabel()}</p>
      </div>
    </main>
  );
}
