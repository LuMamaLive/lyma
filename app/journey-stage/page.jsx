'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../../styles/journeyStage.css';

export default function JourneyStagePage() {
  const router = useRouter();
  const [stage, setStage] = useState('');
  const [detail, setDetail] = useState('');

  const handleStageChange = (value) => {
    setStage(value);
    localStorage.setItem('journeyStage', value);
  };

  const handleDetailBlur = () => {
    if (detail !== '') {
      localStorage.setItem('stageDetail', detail);
      router.push('/pregnancy-week');
    }
  };

  return (
    <main className="journey-stage-container">
      <h2>Where are you in your journey?</h2>
      <select onChange={(e) => handleStageChange(e.target.value)} defaultValue="">
        <option value="" disabled>Select one</option>
        <option value="TTC">Trying to Conceive</option>
        <option value="Pregnant">Pregnant</option>
        <option value="Postpartum">Postpartum (0–18 months)</option>
        <option value="Mom of Young Child">Mom of Young Child (0–60 months)</option>
      </select>

      {(stage === 'Pregnant') && (
        <div className="detail-input">
          <label>How many weeks pregnant?</label>
          <input
            type="number"
            min="0"
            max="44"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            onBlur={handleDetailBlur}
          />
        </div>
      )}

      {(stage === 'Postpartum' || stage === 'Mom of Young Child') && (
        <div className="detail-input">
          <label>How many months postpartum or is your child?</label>
          <input
            type="number"
            min="0"
            max="60"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            onBlur={handleDetailBlur}
          />
        </div>
      )}
    </main>
  );
}