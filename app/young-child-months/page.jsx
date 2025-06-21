
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function YoungChildMonths() {
  const [months, setMonths] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    if (months) {
      localStorage.setItem('selectedWeek', `${months} month${months !== '1' ? 's' : ''}`);
      router.push('/detail');
    }
  };

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">How many months old is your child?</h1>
      <input
        type="number"
        min="0"
        max="60"
        placeholder="Enter number of months (0–60)"
        value={months}
        onChange={(e) => setMonths(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={!months}
      >
        Personalize My Experience
      </button>
    </main>
  );
}
