"use client";

import { useEffect, useState } from "react";

export default function PreviewTiles({ stage, tone }) {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    async function fetchTiles() {
      try {
        const res = await fetch("/data/preview_tiles.json");
        const data = await res.json();
        const stageData = data[stage] || {};
        const toneTiles = stageData[tone] || [];
        setTiles(toneTiles);
      } catch (err) {
        console.error("Failed to load preview tiles:", err);
      }
    }

    if (stage && tone) fetchTiles();
  }, [stage, tone]);

  if (!tiles.length) return null;

  return (
    <div className="mt-6 space-y-4">
      <h2 className="text-xl font-semibold">Here’s what might help right now:</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {tiles.map((tile, index) => (
          <div key={index} className="border rounded-xl p-4 shadow-sm bg-white">
            <p className="text-sm font-medium text-gray-500">{tile.type.toUpperCase()}</p>
            <h3 className="text-base font-semibold mt-1">{tile.title}</h3>
            <p className="text-sm text-gray-400 mt-1">— {tile.source}</p>
          </div>
        ))}
      </div>
    </div>
  );
}