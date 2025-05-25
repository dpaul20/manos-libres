"use client";
import React from "react";
import { Card, CardContent } from "../components/ui/card";

interface AvatarViewerProps {
  animation: string;
}

export default function AvatarViewer({
  animation,
}: Readonly<AvatarViewerProps>) {
  // Si no hay animación, no renderizamos nada
  if (!animation) {
    return null;
  }
  return (
    <Card className="w-full flex flex-col items-center justify-center">
      <CardContent className="w-full flex flex-col items-center justify-center p-4">
        <div className="text-lg font-semibold mb-2 text-card-foreground">
          Animación actual:
        </div>
        <div className="text-primary">{animation}</div>
        <div className="mt-4 text-muted-foreground">
          [Aquí se mostrará el avatar 3D]
        </div>
      </CardContent>
    </Card>
  );
}
