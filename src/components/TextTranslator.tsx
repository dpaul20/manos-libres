"use client";
import React, { useState } from "react";
import AvatarViewer from "../components/AvatarViewer";
import lsvDictionaryJson from "../../data/lsv-dictionary.json";

// For type safety, define the dictionary as a Record<string, string>
const lsvDictionary: Record<string, string> = lsvDictionaryJson;

export default function TextTranslator() {
  const [input, setInput] = useState("");
  const [sequence, setSequence] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);

  const handleTranslate = () => {
    const words = input.trim().toLowerCase().split(/\s+/);
    const anims = words.map((w) => lsvDictionary[w] || "");
    setSequence(anims.filter(Boolean));
    setCurrent(0);
  };

  const nextAnimation = () => {
    setCurrent((c) => (c + 1 < sequence.length ? c + 1 : 0));
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col gap-6">
      <textarea
        className="border rounded p-2 min-h-[60px]"
        placeholder="Escribe texto en español..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
        onClick={handleTranslate}
      >
        Traducir
      </button>
      {sequence.length > 0 && (
        <div className="flex flex-col items-center gap-2">
          <AvatarViewer animation={sequence[current]} />
          <button
            className="mt-2 text-sm text-blue-500 underline"
            onClick={nextAnimation}
          >
            Siguiente seña
          </button>
        </div>
      )}
    </div>
  );
}
