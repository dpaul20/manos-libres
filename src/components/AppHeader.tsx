import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

export function AppHeader() {
  return (
    <header className="flex flex-col items-center w-full gap-2">
      <div className="flex w-full justify-between items-center max-w-xl mx-auto">
        <div />
        <ThemeToggle />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="/manos-libres/logo.svg"
          alt="Logo manos-libres"
          width={220}
          height={60}
          priority
          className="mb-2"
        />
        <h1 className="sr-only">manos-libres</h1>
      </div>
    </header>
  );
}
