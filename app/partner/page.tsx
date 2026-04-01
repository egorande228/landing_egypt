"use client";

import PartnerHeroSection from "../components/partner/PartnerHeroSection";
import PartnerBenefitsSection from "../components/partner/PartnerBenefitSection";
import FinalCTA from "../components/aboutus/FinalCTA";

export default function PartnerPage() {
  return (
    <main className="flex flex-1 flex-col">
      <PartnerHeroSection />
      <PartnerBenefitsSection />
      <FinalCTA />
    </main>
  );
}