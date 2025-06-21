
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function JourneyStage() {
  const router = useRouter();

  const handleSelect = (value) => {
    localStorage.setItem('selectedJourney', value);
    if (value === 'postpartum') {
      router.push('/pregnancy-week'); // reusing week input for simplicity
    } else {
      router.push('/detail');
    }
  };

  return (
    <main className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-semibold mb-4">Where are you in your journey?</h1>
      <button className="block w-full p-4 border rounded" onClick={() => handleSelect('ttc')}>Trying to Conceive</button>
      <button className="block w-full p-4 border rounded" onClick={() => handleSelect('pregnant')}>Pregnant</button>
      <button className="block w-full p-4 border rounded" onClick={() => handleSelect('postpartum')}>Postpartum</button>
      <button className="block w-full p-4 border rounded" onClick={() => handleSelect('mom of young child')}>Mom of Young Child</button>
    </main>
  );
}
