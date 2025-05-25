import Image from "next/image";
import TextTranslator from "../components/TextTranslator";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 gap-8">
      <div className="flex flex-col items-center">
        <Image
          src="/logo.svg"
          alt="Logo manos-libres"
          width={220}
          height={60}
          priority
          className="mb-2"
        />
        <h1 className="text-3xl font-bold mb-4 text-center sr-only">
          manos-libres
        </h1>
      </div>
      <p className="mb-6 text-center max-w-xl">
        Traductor open-source de texto a Lengua de Señas Venezolana (LSV) usando
        avatar 3D. Escribe una frase y observa cómo el avatar la traduce en
        señas.
      </p>
      <TextTranslator />
      <footer className="mt-12 text-xs text-gray-400 text-center">
        Código MIT · Animaciones CC BY-SA 4.0 · Proyecto comunitario 2025
      </footer>
    </div>
  );
}
