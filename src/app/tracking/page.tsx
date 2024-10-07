"use client";
import { useState } from "react";

export default function Tracking() {
  const [progress, setProgress] = useState(0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Progress</h1>
      <p>Current progress: {progress}%</p>
      <button
        onClick={() => setProgress((p) => Math.min(p + 10, 100))}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Update Progress
      </button>
    </div>
  );
}
