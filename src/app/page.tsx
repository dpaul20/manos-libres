import { AppHeader } from "../components/AppHeader";
import { AppFooter } from "../components/AppFooter";
import { AppDescription } from "../components/AppDescription";
import TextTranslator from "../components/TextTranslator";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 gap-8">
      <AppHeader />
      <AppDescription />
      <TextTranslator />
      <AppFooter />
    </main>
  );
}
