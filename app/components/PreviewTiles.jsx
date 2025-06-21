
'use client';
import React, { useEffect, useState } from 'react';

export default function PreviewTiles() {
  const [tone, setTone] = useState('');
  const [journey, setJourney] = useState('');
  const [week, setWeek] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTone(localStorage.getItem('selectedTone') || '');
      setJourney(localStorage.getItem('selectedJourney') || '');
      setWeek(localStorage.getItem('selectedWeek') || '');
    }
  }, []);

  const getAdviceText = () => {
    if (!journey && !week) return "Tailored insights based on your stage of pregnancy or postpartum.";
    return `Insights for ${journey}${week ? ` — ${week}` : ''}.`;
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', padding: '1rem' }}>
      <div style={{ border: '1px solid #ccc', borderRadius: '12px', padding: '1rem' }}>
        <h3>Expert Advice</h3>
        <p>{getAdviceText()}</p>
      </div>
      <div style={{ border: '1px solid #ccc', borderRadius: '12px', padding: '1rem' }}>
        <h3>Ripple Voices</h3>
        <p>Support stories from moms navigating {journey || "this stage"}.</p>
      </div>
      <div style={{ border: '1px solid #ccc', borderRadius: '12px', padding: '1rem' }}>
        <h3>Prompt of the Week</h3>
        <p>As a {tone || 'mom'}, what helped you feel most supported this week?</p>
      </div>
    </div>
  );
}
