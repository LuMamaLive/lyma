'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../../styles/journeyStage.css';

const stages = [
  { id: 'TTC', label: 'Trying to Conceive' },
  { id: 'Pregnant', label: 'Pregnant' },
  { id: 'Postpartum', label: 'Postpartum (0–18 months)' },
  { id: 'Mom of Young Child', label: 'Mom of Young Child (0–60 months)' },
];

export default function JourneyStagePage() {
  const router = useRouter();
  const [stage, setStage] = useState('');
  const [detail, setDetail] = useState('');

  const handleSelect = (id) => {
    setStage(id);
    localStorage.setItem('journeyStage', id);
  };

  const handleBack = () => {
    router.back();
  };

  const handleContinue = () => {
    if (!stage) {
      alert('Please select your journey stage before continuing.');
      return;
    }

    if (stage === 'Pregnant' || stage === 'Postpartum' || stage === 'Mom of Young Child') {
      return; // Wait for input
    }

    router.push('/pregnancy-week');
  };

  const handleDetailSubmit = () => {
    if (!detail) {
      alert('Please enter a valid number.');
      return;
    }

    localStorage.setItem('stageDetail', detail);
    router.push('/pregnancy-week');
  };

  return (
    <main className="journey-stage-container">
      <h2>Where are you in your journey?</h2>
      <div className="stage-options">
        {stages.map(({ id, label }) => (
          <button
            key={id}
            className={`stage-card ${stage === id ? 'selected' : ''}`}
            onClick={() => handleSelect(id)}
            type="button"
          >
            {label}
          </button>
        ))}
      </div>

      {(stage === 'Pregnant') && (
        <div className="detail-input">
          <label>How many weeks pregnant?</label>
          <input
            type="number"
            min="0"
            max="44"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
          <button onClick={handleDetailSubmit} type="button">Personalize My Experience</button>
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
          />
          <button onClick={handleDetailSubmit} type="button">Personalize My Experience</button>
        </div>
      )}

      <div className="buttons-row">
        <button className="back-button" onClick={handleBack} type="button">Back</button>
        {(stage === 'TTC') && (
          <button className="next-button" onClick={handleContinue} type="button">Continue</button>
        )}
      </div>
    </main>
  );
}