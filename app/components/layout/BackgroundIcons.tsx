"use client";

import { useEffect, useState } from "react";

type BackgroundSymbol = {
  src: string;
  col: number;
  row: number;
  size?: number;
  rotate?: string;
  opacity?: number;
  glow?: boolean;
  delay?: string;
  duration?: string;
};

const symbols: BackgroundSymbol[] = [
  { src: "/patterns/eye.svg", col: 1, row: 1, size: 74, rotate: "-8deg", opacity: 0.34, glow: true, delay: "0s", duration: "7s" },
  { src: "/patterns/KeyOfLife.svg", col: 3, row: 1, size: 62, rotate: "5deg", opacity: 0.22 },
  { src: "/patterns/Anubis.svg", col: 6, row: 1, size: 68, rotate: "0deg", opacity: 0.28, glow: true, delay: "1.2s", duration: "8s" },
  { src: "/patterns/BastetStatue.svg", col: 9, row: 1, size: 60, rotate: "-4deg", opacity: 0.22 },
  { src: "/patterns/CircleEye.svg", col: 12, row: 1, size: 66, rotate: "6deg", opacity: 0.24 },
  { src: "/patterns/AnkhandEye.svg", col: 14, row: 1, size: 70, rotate: "-6deg", opacity: 0.26, glow: true, delay: "2.4s", duration: "7.6s" },

  { src: "/patterns/TringleEye.svg", col: 2, row: 2, size: 58, rotate: "4deg", opacity: 0.18 },
  { src: "/patterns/AnubisLong.svg", col: 5, row: 2, size: 70, rotate: "-7deg", opacity: 0.2 },
  { src: "/patterns/KeyOfLife.svg", col: 8, row: 2, size: 58, rotate: "2deg", opacity: 0.18 },
  { src: "/patterns/eye.svg", col: 11, row: 2, size: 72, rotate: "-5deg", opacity: 0.26 },
  { src: "/patterns/BastetStatue.svg", col: 13, row: 2, size: 56, rotate: "8deg", opacity: 0.18 },

  { src: "/patterns/CircleEye.svg", col: 1, row: 3, size: 68, rotate: "-4deg", opacity: 0.22 },
  { src: "/patterns/Anubis.svg", col: 4, row: 3, size: 64, rotate: "5deg", opacity: 0.2 },
  { src: "/patterns/AnkhandEye.svg", col: 7, row: 3, size: 72, rotate: "-3deg", opacity: 0.22, glow: true, delay: "1.8s", duration: "8.2s" },
  { src: "/patterns/KeyOfLife.svg", col: 10, row: 3, size: 56, rotate: "-6deg", opacity: 0.16 },
  { src: "/patterns/TringleEye.svg", col: 12, row: 3, size: 62, rotate: "7deg", opacity: 0.18 },
  { src: "/patterns/AnubisLong.svg", col: 14, row: 3, size: 70, rotate: "-8deg", opacity: 0.2 },

  { src: "/patterns/eye.svg", col: 2, row: 4, size: 74, rotate: "5deg", opacity: 0.24 },
  { src: "/patterns/BastetStatue.svg", col: 5, row: 4, size: 60, rotate: "-5deg", opacity: 0.18 },
  { src: "/patterns/CircleEye.svg", col: 8, row: 4, size: 66, rotate: "4deg", opacity: 0.2 },
  { src: "/patterns/Anubis.svg", col: 11, row: 4, size: 66, rotate: "-4deg", opacity: 0.22, glow: true, delay: "2.8s", duration: "7.2s" },
  { src: "/patterns/KeyOfLife.svg", col: 13, row: 4, size: 56, rotate: "3deg", opacity: 0.16 },

  { src: "/patterns/AnkhandEye.svg", col: 1, row: 5, size: 68, rotate: "-5deg", opacity: 0.22 },
  { src: "/patterns/TringleEye.svg", col: 3, row: 5, size: 60, rotate: "6deg", opacity: 0.16 },
  { src: "/patterns/AnubisLong.svg", col: 6, row: 5, size: 72, rotate: "-7deg", opacity: 0.22 },
  { src: "/patterns/BastetStatue.svg", col: 9, row: 5, size: 58, rotate: "4deg", opacity: 0.16 },
  { src: "/patterns/eye.svg", col: 12, row: 5, size: 70, rotate: "-8deg", opacity: 0.24 },
  { src: "/patterns/CircleEye.svg", col: 14, row: 5, size: 64, rotate: "5deg", opacity: 0.18 },

  { src: "/patterns/KeyOfLife.svg", col: 2, row: 6, size: 54, rotate: "-4deg", opacity: 0.16 },
  { src: "/patterns/Anubis.svg", col: 4, row: 6, size: 66, rotate: "3deg", opacity: 0.2 },
  { src: "/patterns/AnkhandEye.svg", col: 7, row: 6, size: 74, rotate: "-4deg", opacity: 0.24, glow: true, delay: "3.2s", duration: "8.6s" },
  { src: "/patterns/BastetStatue.svg", col: 10, row: 6, size: 56, rotate: "7deg", opacity: 0.16 },
  { src: "/patterns/TringleEye.svg", col: 13, row: 6, size: 58, rotate: "-6deg", opacity: 0.16 },

  { src: "/patterns/CircleEye.svg", col: 1, row: 7, size: 70, rotate: "4deg", opacity: 0.2 },
  { src: "/patterns/AnubisLong.svg", col: 5, row: 7, size: 74, rotate: "-8deg", opacity: 0.22 },
  { src: "/patterns/KeyOfLife.svg", col: 8, row: 7, size: 56, rotate: "2deg", opacity: 0.16 },
  { src: "/patterns/eye.svg", col: 11, row: 7, size: 72, rotate: "-5deg", opacity: 0.22, glow: true, delay: "1.4s", duration: "7.8s" },
  { src: "/patterns/BastetStatue.svg", col: 14, row: 7, size: 58, rotate: "8deg", opacity: 0.16 },

  { src: "/patterns/Anubis.svg", col: 2, row: 8, size: 68, rotate: "-4deg", opacity: 0.2 },
  { src: "/patterns/TringleEye.svg", col: 4, row: 8, size: 58, rotate: "5deg", opacity: 0.16 },
  { src: "/patterns/CircleEye.svg", col: 7, row: 8, size: 66, rotate: "-3deg", opacity: 0.2 },
  { src: "/patterns/KeyOfLife.svg", col: 10, row: 8, size: 54, rotate: "-5deg", opacity: 0.14 },
  { src: "/patterns/AnkhandEye.svg", col: 13, row: 8, size: 70, rotate: "6deg", opacity: 0.22, glow: true, delay: "2.2s", duration: "8s" },

  { src: "/patterns/BastetStatue.svg", col: 1, row: 9, size: 58, rotate: "4deg", opacity: 0.14 },
  { src: "/patterns/eye.svg", col: 3, row: 9, size: 72, rotate: "-7deg", opacity: 0.2 },
  { src: "/patterns/AnubisLong.svg", col: 6, row: 9, size: 76, rotate: "-6deg", opacity: 0.22 },
  { src: "/patterns/CircleEye.svg", col: 9, row: 9, size: 64, rotate: "5deg", opacity: 0.18 },
  { src: "/patterns/KeyOfLife.svg", col: 12, row: 9, size: 56, rotate: "3deg", opacity: 0.14 },
  { src: "/patterns/TringleEye.svg", col: 14, row: 9, size: 60, rotate: "-4deg", opacity: 0.16 },

  { src: "/patterns/AnkhandEye.svg", col: 2, row: 10, size: 70, rotate: "-5deg", opacity: 0.2 },
  { src: "/patterns/Anubis.svg", col: 5, row: 10, size: 68, rotate: "4deg", opacity: 0.2, glow: true, delay: "1.6s", duration: "7.4s" },
  { src: "/patterns/BastetStatue.svg", col: 8, row: 10, size: 56, rotate: "-6deg", opacity: 0.14 },
  { src: "/patterns/eye.svg", col: 11, row: 10, size: 72, rotate: "6deg", opacity: 0.22 },
  { src: "/patterns/CircleEye.svg", col: 13, row: 10, size: 66, rotate: "-4deg", opacity: 0.18 },

  { src: "/patterns/KeyOfLife.svg", col: 1, row: 11, size: 54, rotate: "4deg", opacity: 0.12 },
  { src: "/patterns/AnubisLong.svg", col: 4, row: 11, size: 74, rotate: "-7deg", opacity: 0.2 },
  { src: "/patterns/TringleEye.svg", col: 7, row: 11, size: 60, rotate: "5deg", opacity: 0.14 },
  { src: "/patterns/AnkhandEye.svg", col: 10, row: 11, size: 70, rotate: "-5deg", opacity: 0.2, glow: true, delay: "2.8s", duration: "8.2s" },
  { src: "/patterns/BastetStatue.svg", col: 13, row: 11, size: 56, rotate: "7deg", opacity: 0.14 },
    { src: "/patterns/eye.svg", col: 2, row: 12, size: 70, rotate: "-6deg", opacity: 0.18 },
  { src: "/patterns/KeyOfLife.svg", col: 5, row: 12, size: 54, rotate: "4deg", opacity: 0.12 },
  { src: "/patterns/Anubis.svg", col: 8, row: 12, size: 68, rotate: "-4deg", opacity: 0.18, glow: true, delay: "1.2s", duration: "7.8s" },
  { src: "/patterns/BastetStatue.svg", col: 11, row: 12, size: 56, rotate: "6deg", opacity: 0.12 },
  { src: "/patterns/CircleEye.svg", col: 14, row: 12, size: 64, rotate: "-5deg", opacity: 0.16 },

  { src: "/patterns/AnkhandEye.svg", col: 1, row: 13, size: 68, rotate: "5deg", opacity: 0.18 },
  { src: "/patterns/TringleEye.svg", col: 4, row: 13, size: 58, rotate: "-4deg", opacity: 0.12 },
  { src: "/patterns/AnubisLong.svg", col: 7, row: 13, size: 74, rotate: "-7deg", opacity: 0.2 },
  { src: "/patterns/KeyOfLife.svg", col: 10, row: 13, size: 52, rotate: "3deg", opacity: 0.1 },
  { src: "/patterns/eye.svg", col: 13, row: 13, size: 70, rotate: "6deg", opacity: 0.18 },

  { src: "/patterns/BastetStatue.svg", col: 2, row: 14, size: 56, rotate: "-5deg", opacity: 0.12 },
  { src: "/patterns/CircleEye.svg", col: 5, row: 14, size: 66, rotate: "4deg", opacity: 0.16 },
  { src: "/patterns/Anubis.svg", col: 9, row: 14, size: 68, rotate: "-6deg", opacity: 0.18, glow: true, delay: "2.2s", duration: "8.4s" },
  { src: "/patterns/TringleEye.svg", col: 12, row: 14, size: 58, rotate: "5deg", opacity: 0.12 },
  { src: "/patterns/AnkhandEye.svg", col: 14, row: 14, size: 70, rotate: "-4deg", opacity: 0.18 },

  { src: "/patterns/KeyOfLife.svg", col: 1, row: 15, size: 52, rotate: "4deg", opacity: 0.1 },
  { src: "/patterns/eye.svg", col: 3, row: 15, size: 70, rotate: "-7deg", opacity: 0.16 },
  { src: "/patterns/AnubisLong.svg", col: 6, row: 15, size: 76, rotate: "6deg", opacity: 0.18 },
  { src: "/patterns/BastetStatue.svg", col: 10, row: 15, size: 56, rotate: "-6deg", opacity: 0.12 },
  { src: "/patterns/CircleEye.svg", col: 13, row: 15, size: 64, rotate: "5deg", opacity: 0.14 },

  { src: "/patterns/Anubis.svg", col: 2, row: 16, size: 68, rotate: "-5deg", opacity: 0.18 },
  { src: "/patterns/TringleEye.svg", col: 5, row: 16, size: 58, rotate: "6deg", opacity: 0.12 },
  { src: "/patterns/AnkhandEye.svg", col: 8, row: 16, size: 70, rotate: "-4deg", opacity: 0.18, glow: true, delay: "3s", duration: "7.6s" },
  { src: "/patterns/KeyOfLife.svg", col: 11, row: 16, size: 52, rotate: "4deg", opacity: 0.1 },
  { src: "/patterns/eye.svg", col: 14, row: 16, size: 70, rotate: "-6deg", opacity: 0.16 },

  { src: "/patterns/BastetStatue.svg", col: 1, row: 17, size: 56, rotate: "5deg", opacity: 0.1 },
  { src: "/patterns/CircleEye.svg", col: 4, row: 17, size: 64, rotate: "-5deg", opacity: 0.14 },
  { src: "/patterns/AnubisLong.svg", col: 7, row: 17, size: 74, rotate: "7deg", opacity: 0.18 },
  { src: "/patterns/TringleEye.svg", col: 10, row: 17, size: 58, rotate: "-4deg", opacity: 0.1 },
  { src: "/patterns/AnkhandEye.svg", col: 13, row: 17, size: 68, rotate: "6deg", opacity: 0.16 },

  { src: "/patterns/KeyOfLife.svg", col: 2, row: 18, size: 52, rotate: "-4deg", opacity: 0.1 },
  { src: "/patterns/eye.svg", col: 5, row: 18, size: 68, rotate: "5deg", opacity: 0.14 },
  { src: "/patterns/Anubis.svg", col: 9, row: 18, size: 68, rotate: "-6deg", opacity: 0.16, glow: true, delay: "1.8s", duration: "8s" },
  { src: "/patterns/BastetStatue.svg", col: 12, row: 18, size: 56, rotate: "4deg", opacity: 0.1 },
  { src: "/patterns/CircleEye.svg", col: 14, row: 18, size: 62, rotate: "-5deg", opacity: 0.14 },
    { src: "/patterns/AnkhandEye.svg", col: 1, row: 19, size: 66, rotate: "-5deg", opacity: 0.16 },
  { src: "/patterns/TringleEye.svg", col: 4, row: 19, size: 56, rotate: "4deg", opacity: 0.1 },
  { src: "/patterns/AnubisLong.svg", col: 7, row: 19, size: 74, rotate: "-7deg", opacity: 0.18 },
  { src: "/patterns/KeyOfLife.svg", col: 10, row: 19, size: 52, rotate: "3deg", opacity: 0.1 },
  { src: "/patterns/eye.svg", col: 13, row: 19, size: 68, rotate: "6deg", opacity: 0.14 },

  { src: "/patterns/BastetStatue.svg", col: 2, row: 20, size: 56, rotate: "-4deg", opacity: 0.1 },
  { src: "/patterns/CircleEye.svg", col: 5, row: 20, size: 64, rotate: "5deg", opacity: 0.14 },
  { src: "/patterns/Anubis.svg", col: 8, row: 20, size: 68, rotate: "-5deg", opacity: 0.16, glow: true, delay: "2.4s", duration: "7.8s" },
  { src: "/patterns/TringleEye.svg", col: 11, row: 20, size: 56, rotate: "6deg", opacity: 0.1 },
  { src: "/patterns/AnkhandEye.svg", col: 14, row: 20, size: 68, rotate: "-4deg", opacity: 0.16 },
    { src: "/patterns/KeyOfLife.svg", col: 1, row: 21, size: 52, rotate: "4deg", opacity: 0.1 },
  { src: "/patterns/eye.svg", col: 3, row: 21, size: 68, rotate: "-6deg", opacity: 0.14 },
  { src: "/patterns/AnubisLong.svg", col: 6, row: 21, size: 74, rotate: "7deg", opacity: 0.18 },
  { src: "/patterns/BastetStatue.svg", col: 10, row: 21, size: 56, rotate: "-5deg", opacity: 0.1 },
  { src: "/patterns/CircleEye.svg", col: 13, row: 21, size: 64, rotate: "5deg", opacity: 0.14 },

  { src: "/patterns/AnkhandEye.svg", col: 2, row: 22, size: 68, rotate: "-4deg", opacity: 0.16 },
  { src: "/patterns/TringleEye.svg", col: 5, row: 22, size: 56, rotate: "6deg", opacity: 0.1 },
  { src: "/patterns/Anubis.svg", col: 8, row: 22, size: 68, rotate: "-5deg", opacity: 0.16, glow: true, delay: "1.6s", duration: "8s" },
  { src: "/patterns/KeyOfLife.svg", col: 11, row: 22, size: 52, rotate: "4deg", opacity: 0.1 },
  { src: "/patterns/eye.svg", col: 14, row: 22, size: 68, rotate: "-6deg", opacity: 0.14 },

  { src: "/patterns/BastetStatue.svg", col: 1, row: 23, size: 56, rotate: "5deg", opacity: 0.1 },
  { src: "/patterns/CircleEye.svg", col: 4, row: 23, size: 64, rotate: "-5deg", opacity: 0.14 },
  { src: "/patterns/AnubisLong.svg", col: 7, row: 23, size: 74, rotate: "6deg", opacity: 0.18 },
  { src: "/patterns/TringleEye.svg", col: 10, row: 23, size: 56, rotate: "-4deg", opacity: 0.1 },
  { src: "/patterns/AnkhandEye.svg", col: 13, row: 23, size: 68, rotate: "5deg", opacity: 0.16 },

  { src: "/patterns/KeyOfLife.svg", col: 2, row: 24, size: 52, rotate: "-4deg", opacity: 0.1 },
  { src: "/patterns/eye.svg", col: 5, row: 24, size: 68, rotate: "6deg", opacity: 0.14 },
  { src: "/patterns/Anubis.svg", col: 9, row: 24, size: 68, rotate: "-6deg", opacity: 0.16, glow: true, delay: "2.8s", duration: "7.6s" },
  { src: "/patterns/BastetStatue.svg", col: 12, row: 24, size: 56, rotate: "4deg", opacity: 0.1 },
  { src: "/patterns/CircleEye.svg", col: 14, row: 24, size: 62, rotate: "-5deg", opacity: 0.14 },

  { src: "/patterns/AnkhandEye.svg", col: 1, row: 25, size: 66, rotate: "-5deg", opacity: 0.16 },
  { src: "/patterns/TringleEye.svg", col: 4, row: 25, size: 56, rotate: "4deg", opacity: 0.1 },
  { src: "/patterns/AnubisLong.svg", col: 7, row: 25, size: 74, rotate: "-7deg", opacity: 0.18 },
  { src: "/patterns/KeyOfLife.svg", col: 10, row: 25, size: 52, rotate: "3deg", opacity: 0.1 },
  { src: "/patterns/eye.svg", col: 13, row: 25, size: 68, rotate: "6deg", opacity: 0.14 },
    { src: "/patterns/Nefertiti.svg", col: 9, row: 2, size: 74, rotate: "-3deg", opacity: 0.18, glow: true, delay: "2s", duration: "8.2s" },
  { src: "/patterns/silhouette.svg", col: 6, row: 4, size: 62, rotate: "5deg", opacity: 0.12 },

  { src: "/patterns/Nefertiti.svg", col: 12, row: 8, size: 76, rotate: "4deg", opacity: 0.18 },
  { src: "/patterns/silhouette.svg", col: 3, row: 10, size: 60, rotate: "-5deg", opacity: 0.1 },

  { src: "/patterns/Nefertiti.svg", col: 8, row: 14, size: 78, rotate: "-4deg", opacity: 0.18, glow: true, delay: "1.8s", duration: "7.8s" },
  { src: "/patterns/silhouette.svg", col: 11, row: 16, size: 60, rotate: "6deg", opacity: 0.1 },

  { src: "/patterns/Nefertiti.svg", col: 4, row: 20, size: 76, rotate: "3deg", opacity: 0.16 },
  { src: "/patterns/silhouette.svg", col: 9, row: 22, size: 62, rotate: "-4deg", opacity: 0.1 },

  { src: "/patterns/Nefertiti.svg", col: 12, row: 24, size: 78, rotate: "5deg", opacity: 0.18, glow: true, delay: "2.6s", duration: "8.4s" },
  { src: "/patterns/silhouette.svg", col: 5, row: 25, size: 60, rotate: "-6deg", opacity: 0.1 },
];
export default function BackgroundIcons() {
  const [gridSize, setGridSize] = useState(110);

  useEffect(() => {
    const updateGridSize = () => {
      const value = getComputedStyle(document.documentElement)
        .getPropertyValue("--bg-grid-size")
        .trim();
      const parsed = Number.parseFloat(value);
      setGridSize(Number.isFinite(parsed) ? parsed : 110);
    };

    updateGridSize();
    window.addEventListener("resize", updateGridSize);
    return () => window.removeEventListener("resize", updateGridSize);
  }, []);

  return (
    <div className="interactive-bg-icons">
      {symbols.map((symbol, index) => {
        const left = symbol.col * gridSize + gridSize / 2;
        const top = symbol.row * gridSize + gridSize / 2;
        const size = symbol.size ?? gridSize * 0.72;

        return (
          <div
            key={`${symbol.src}-${index}`}
            className={`interactive-bg-symbol-shell${symbol.glow ? " interactive-bg-symbol-shell--glow" : ""}`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}px`,
              top: `${top}px`,
              opacity: symbol.opacity ?? 0.5,
              transform: `translate(-50%, -50%) rotate(${symbol.rotate ?? "0deg"})`,
            }}
          >
            <img
              src={symbol.src}
              alt=""
              draggable={false}
              className="interactive-bg-symbol-img interactive-bg-symbol-img--base"
            />
            <div className="interactive-bg-symbol-reveal">
              <img
                src={symbol.src}
                alt=""
                draggable={false}
                className="interactive-bg-symbol-img interactive-bg-symbol-img--glow"
                style={{
                  animationDelay: symbol.delay,
                  animationDuration: symbol.duration,
                }}
              />
              <img
                src={symbol.src}
                alt=""
                draggable={false}
                className="interactive-bg-symbol-img interactive-bg-symbol-img--line"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}