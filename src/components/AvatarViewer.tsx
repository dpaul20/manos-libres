"use client";
import React from "react";

export default function AvatarViewer({ animation }: { animation: string }) {
  // Aquí se integrará Three.js para mostrar el avatar y reproducir la animación .glb
  // Por ahora, solo muestra el nombre de la animación como placeholder
  return (
    <div className="w-full flex flex-col items-center justify-center p-4 border rounded bg-gray-50 dark:bg-gray-800">
      <div className="text-lg font-semibold mb-2">Animación actual:</div>
      <div className="text-blue-600 dark:text-blue-300">{animation}</div>
      <div className="mt-4 text-gray-400">[Aquí se mostrará el avatar 3D]</div>
    </div>
  );
}
