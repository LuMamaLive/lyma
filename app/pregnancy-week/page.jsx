'use client';
import { useEffect, useState } from 'react';
import '../../styles/pregnancyWeek.css';

export default function PregnancyWeekPage() {
  const [tone, setTone] = useState('');
  const [stage, setStage] = useState('');
  const [detail, setDetail] = useState('');
  const [label, setLabel] = useState('');

  useEffect(() => {
    const storedTone = localStorage.getItem('selectedTone');
    const storedStage = localStorage.getItem('journeyStage');
    const storedDetail = localStorage.getItem('stageDetail');

    setTone(storedTone || '');
    setStage(storedStage || '');
    setDetail(storedDetail || '');

    if (storedStage === 'Pregnant') {
      setLabel('Weeks');
    } else if (storedStage === 'Postpartum' || storedStage === 'Mom of Young Child') {
      setLabel('Months');
    } else {
      setLabel('');
    }
  }, []);

  return (
    <div className="pregnancy-week-container">
      <h2>Welcome, Mama 💖</h2>
      <p><strong>Tone:</strong> {tone}</p>
      <p><strong>Journey Stage:</strong> {stage}</p>
      {label && <p><strong>{label}:</strong> {detail}</p>}
    </div>
  );
}