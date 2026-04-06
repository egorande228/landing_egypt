"use client";

import BackgroundIcons from "./BackgroundIcons";
import PointerUnblur from "./PointerUnblur";

export default function InteractiveBackground() {
  return (
    <div className="interactive-bg" aria-hidden="true">
      <div className="interactive-bg-base" />
      <div className="interactive-bg-goldwash" />
      <BackgroundIcons />
      <div className="interactive-bg-grid" />
      <PointerUnblur />
      <div className="interactive-bg-vignette" />
    </div>
  );
}