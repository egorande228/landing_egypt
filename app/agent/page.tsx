"use client";

import FinalCTA from "../components/aboutus/FinalCTA";
import AgentHeroSection from "../components/Agent/AgentHeroSection";
import AgentBenefitsSection from "../components/Agent/AgentBenefitsSection";

export default function AgentPage() {
  return (
    <main className="flex min-h-full w-full flex-col">
      <AgentHeroSection />
      <AgentBenefitsSection />
      <FinalCTA />
    </main>
  );
}