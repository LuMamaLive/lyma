'use client';
import { useEffect, useState } from 'react';
import '../../styles/pregnancyWeek.css';

export default function PregnancyWeekPage() {
  const [tone, setTone] = useState('');
  const [stage, setStage] = useState('');
  const [detail, setDetail] = useState('');

  useEffect(() => {
    setTone(localStorage.getItem('selectedTone') || '');
    setStage(localStorage.getItem('journeyStage') || '');
    setDetail(localStorage.getItem('stageDetail') || '');
  }, []);

  return (
    <div className="pregnancy-week-container">
      <h2>Welcome, Mama 💖</h2>
      <p><strong>Tone:</strong> {tone}</p>
      <p><strong>Journey Stage:</strong> {stage}</p>
      <p><strong>Detail (Week or Month):</strong> {detail}</p>
    </div>
  );
}