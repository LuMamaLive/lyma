'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../../styles/tone.css';

const tones = [
  {
    id: 'calm',
    label: 'Calm 💆‍♀️',
    description: 'Gentle, soothing, supportive tone to ease anxiety and overwhelm.',
  },
  {
    id: 'playful',
    label: 'Playful 🎉',
    description: 'Lighthearted and fun — a supportive friend who makes you smile.',
  },
  {
    id: 'realtalk',
    label: 'RealTalk 💬',
    description: 'Honest, direct, no-fluff advice from someone who’s been there.',
  },
];

export default function TonePage() {
  const router = useRouter();
  const [selectedTone, setSelectedTone] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('selectedTone');
    if (saved) setSelectedTone(saved);
  }, []);

  const handleSelect = (id) => {
    setSelectedTone(id);
    localStorage.setItem('selectedTone', id);
  };

  const handleNext = () => {
    if (!selectedTone) {
      alert('Please select a tone before continuing.');
      return;
    }
    router.push('/journey-stage');
  };

  return (
    <main className="tone-container">
      <h1>Which tone of support feels right for you today?</h1>
      <div className="tone-options">
        {tones.map(({ id, label, description }) => (
          <button
            key={id}
            className={`tone-card ${selectedTone === id ? 'selected' : ''}`}
            onClick={() => handleSelect(id)}
            type="button"
          >
            <h2>{label}</h2>
            <p>{description}</p>
          </button>
        ))}
      </div>
      <button className="next-button" onClick={handleNext} type="button">
        Next
      </button>
    </main>
  );
}