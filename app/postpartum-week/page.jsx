
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PostpartumWeek() {
  const [week, setWeek] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    if (week) {
      localStorage.setItem('selectedWeek', `${week} week${week !== '1' ? 's' : ''}`);
      router.push('/detail');
    }
  };

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">How many weeks postpartum are you?</h1>
      <input
        type="number"
        min="0"
        max="18"
        placeholder="Enter number of weeks (0–18)"
        value={week}
        onChange={(e) => setWeek(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={!week}
      >
        Personalize My Experience
      </button>
    </main>
  );
}
