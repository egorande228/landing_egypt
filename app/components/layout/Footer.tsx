"use client";

import { useLanguage } from "../providers/LanguageContext";
import { Reveal } from "@/lib/Animation/Reveal";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <Reveal
      as="footer"
      preset="soft"
      className="relative z-10 mt-auto border-t border-white/10 bg-transparent"
    >
      <div className="mx-auto max-w-7xl px-6 py-6 text-center">
        <Reveal as="div" className="type-body text-white/72">
          {t.footer.copyright}
        </Reveal>
      </div>
    </Reveal>
  );
}