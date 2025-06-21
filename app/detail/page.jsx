
'use client';
import React from 'react';

export default function DetailPage() {
  const tone = typeof window !== 'undefined' ? localStorage.getItem('selectedTone') : null;

  return (
    <main className="max-w-xl mx-auto p-6">
      <button onClick={() => window.history.back()} className="text-blue-500 mb-4">
        &larr; Back
      </button>
      <h1 className="text-2xl font-semibold mb-4">Your Personalization</h1>
      <div className="space-y-2 text-lg">
        <p><strong>Tone:</strong> {tone || "Not selected"}</p>
      </div>
    </main>
  );
}
