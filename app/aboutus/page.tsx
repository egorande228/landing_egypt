import Benefits from "../components/aboutus/Benefits";
import Calculator from "../components/aboutus/Calculator";
import FinalCTA from "../components/aboutus/FinalCTA";
import Hero from "../components/aboutus/Hero";
export default function AboutUsPage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Calculator />
      <Benefits />
      <FinalCTA />
    </main>
  );
}