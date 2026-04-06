"use client";

import { useEffect, useRef } from "react";

export default function PointerUnblur() {
  const lastPointer = useRef({
    x: 0,
    y: 0,
    hasMoved: false,
  });

  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const setPosition = (x: number, y: number) => {
      root.style.setProperty("--mx", `${x}px`);
      root.style.setProperty("--my", `${y}px`);
    };

    const updateFromPointer = () => {
      const x = lastPointer.current.x + window.scrollX;
      const y = lastPointer.current.y + window.scrollY;
      setPosition(x, y);
    };

    const handleMove = (event: MouseEvent) => {
      lastPointer.current = {
        x: event.clientX,
        y: event.clientY,
        hasMoved: true,
      };

      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateFromPointer);
    };

    const handleScroll = () => {
      if (!lastPointer.current.hasMoved) return;

      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateFromPointer);
    };

    const handleLeave = () => {
      lastPointer.current.hasMoved = false;

      const x = window.innerWidth * 0.7 + window.scrollX;
      const y = window.innerHeight * 0.3 + window.scrollY;
      setPosition(x, y);
    };

    handleLeave();

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return <div className="interactive-bg-reveal" />;
}