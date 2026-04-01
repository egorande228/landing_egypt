"use client";

import { useEffect } from "react";

export default function InteractiveBackground() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const setPosition = (x: number, y: number) => {
      root.style.setProperty("--mx", `${x}px`);
      root.style.setProperty("--my", `${y}px`);
    };

    const handleMove = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;

      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        setPosition(x, y);
      });
    };

    const handleLeave = () => {
      const x = window.innerWidth * 0.72;
      const y = window.innerHeight * 0.35;
      setPosition(x, y);
    };

    handleLeave();

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="interactive-bg" aria-hidden="true">
      <div className="interactive-bg-base" />
      <div className="interactive-bg-grid" />
      <div className="interactive-bg-spotlight" />
      <div className="interactive-bg-vignette" />
    </div>
  );
}