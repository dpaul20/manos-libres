"use client";
import React, { useState, useRef, useEffect } from "react";
import AvatarViewer from "../components/AvatarViewer";
import lsvDictionaryJson from "../../data/lsv-dictionary.json";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";

const lsvDictionary: Record<string, string> = lsvDictionaryJson;

function normalizeText(text: string) {
  // Elimina signos de puntuación y tildes
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.,!?¿¡;:()\[\]{}"'-]/g, "") // escapes innecesarios eliminados
    .replace(/\s+/g, " ")
    .trim();
}

export default function TextTranslator() {
  const [input, setInput] = useState("");
  const [sequence, setSequence] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  function handleTranslate() {
    const normalized = normalizeText(input);
    const words = normalized.split(" ");
    const animations = words.map((word) => lsvDictionary[word]).filter(Boolean);
    setSequence(animations);
    setCurrent(0);
    setAutoPlay(true);
  }

  function handleNextAnimation() {
    setCurrent((c) => (c + 1 < sequence.length ? c + 1 : 0));
    setAutoPlay(false);
  }

  // Animación automática
  useEffect(() => {
    if (autoPlay && sequence.length > 1) {
      timerRef.current = setTimeout(() => {
        setCurrent((c) => {
          if (c + 1 < sequence.length) return c + 1;
          setAutoPlay(false);
          return c;
        });
      }, 1200); // 1.2s por seña
      return () => clearTimeout(timerRef.current!);
    }
  }, [autoPlay, current, sequence.length]);

  const hasSequence = sequence.length > 0;
  const normalizedInput = normalizeText(input);
  const currentWord = hasSequence ? normalizedInput.split(/\s+/)[current] : "";

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col gap-6 bg-card p-6 rounded-lg border border-card shadow-md">
      <Textarea
        className="min-h-[60px] placeholder:text-muted-foreground"
        placeholder="Escribe texto en español..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button
        className="rounded-xl transition-colors hover:bg-primary/90 focus:ring-2 focus:ring-primary"
        onClick={handleTranslate}
      >
        Traducir
      </Button>
      {hasSequence && (
        <div className="flex flex-col items-center gap-2 w-full">
          <span className="text-sm text-muted-foreground mb-1">
            Mostrando seña de: <b>{currentWord}</b>
          </span>
          <AvatarViewer animation={sequence[current]} />
          <div className="flex gap-2">
            <Button
              variant="link"
              className="mt-2 text-sm"
              onClick={handleNextAnimation}
              disabled={autoPlay}
            >
              Siguiente seña
            </Button>
            <Button
              variant="link"
              className="mt-2 text-sm"
              onClick={() => setAutoPlay((a) => !a)}
              disabled={autoPlay || sequence.length <= 1}
            >
              {autoPlay ? "Reproduciendo..." : "Reproducir automático"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
