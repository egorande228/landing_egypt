"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  glowOpacity?: number;
  hoverLift?: number;
  hoverScale?: number;
  tiltStrength?: number;
  perspective?: number;
};

export default function TiltCard({
  children,
  className = "",
  glowOpacity = 0.14,
  hoverLift = -6,
  hoverScale = 1.01,
  tiltStrength = 14,
  perspective = 1200,
}: TiltCardProps) {
  const rotateXRaw = useMotionValue(0);
  const rotateYRaw = useMotionValue(0);

  const rotateX = useSpring(rotateXRaw, {
    stiffness: 220,
    damping: 20,
    mass: 0.6,
  });

  const rotateY = useSpring(rotateYRaw, {
    stiffness: 220,
    damping: 20,
    mass: 0.6,
  });

  const glowX = useTransform(rotateY, [-tiltStrength, tiltStrength], ["35%", "65%"]);
  const glowY = useTransform(rotateX, [-tiltStrength, tiltStrength], ["65%", "35%"]);

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    rotateYRaw.set((px - 0.5) * tiltStrength);
    rotateXRaw.set((0.5 - py) * tiltStrength);
  };

  const handleLeave = () => {
    rotateXRaw.set(0);
    rotateYRaw.set(0);
  };

  return (
    <div style={{ perspective }}>
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        whileHover={{ y: hoverLift, scale: hoverScale }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className={`relative overflow-hidden ${className}`}
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(circle at var(--gx) var(--gy), rgba(255,193,0,${glowOpacity}), transparent 36%)`,
            ["--gx" as string]: glowX,
            ["--gy" as string]: glowY,
          }}
        />
        <div className="relative z-10">{children}</div>
      </motion.div>
    </div>
  );
}