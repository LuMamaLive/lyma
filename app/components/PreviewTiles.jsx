
import React from 'react';

export default function PreviewTiles() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', padding: '1rem' }}>
      <div style={{ border: '1px solid #ccc', borderRadius: '12px', padding: '1rem' }}>
        <h3>Expert Advice</h3>
        <p>Tailored insights based on your stage of pregnancy or postpartum.</p>
      </div>
      <div style={{ border: '1px solid #ccc', borderRadius: '12px', padding: '1rem' }}>
        <h3>Ripple Voices</h3>
        <p>Real stories and support from moms like you.</p>
      </div>
      <div style={{ border: '1px solid #ccc', borderRadius: '12px', padding: '1rem' }}>
        <h3>Prompt of the Week</h3>
        <p>What helped you feel most supported this week?</p>
      </div>
    </div>
  );
}
