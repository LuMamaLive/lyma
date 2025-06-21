
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function JourneyStage() {
  const router = useRouter();

  const handleSelect = (value) => {
    localStorage.setItem('selectedJourney', value);
    if (value === 'postpartum') {
      router.push('/postpartum-week');
    } else if (value === 'pregnant') {
      router.push('/pregnancy-week');
    } else {
      router.push('/detail');
    }
  };

  return (
    <main className="max-w-xl mx-auto p-6">
      <button onClick={() => window.history.back()} className="text-blue-500 mb-4">
        &larr; Back
      </button>
      <h1 className="text-2xl font-semibold mb-4">Where are you in your journey?</h1>
      <div className="space-y-4">
        <button
          className="w-full p-4 border rounded"
          onClick={() => handleSelect('ttc')}
        >
          Trying to Conceive
        </button>
        <button
          className="w-full p-4 border rounded"
          onClick={() => handleSelect('pregnant')}
        >
          Pregnant
        </button>
        <button
          className="w-full p-4 border rounded"
          onClick={() => handleSelect('postpartum')}
        >
          Postpartum
        </button>
        <button
          className="w-full p-4 border rounded"
          onClick={() => handleSelect('mom of young child')}
        >
          Mom of Young Child
        </button>
      </div>
      <button
        onClick={() => window.history.back()}
        className="block mt-6 text-blue-500"
      >
        &larr; Back
      </button>
    </main>
  );
}
