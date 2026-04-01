"use client";

const playerNodes = [
  { id: "p1", x: 120, y: 570 },
  { id: "p2", x: 250, y: 610 },
  { id: "p3", x: 380, y: 570 },
  { id: "p4", x: 500, y: 620 },
  { id: "p5", x: 620, y: 570 },
  { id: "p6", x: 750, y: 610 },
  { id: "p7", x: 880, y: 570 },
] as const;

const agentNodes = [
  { id: "a1", x: 240, y: 350, label: "Agent" },
  { id: "a2", x: 500, y: 300, label: "Agent" },
  { id: "a3", x: 760, y: 350, label: "Agent" },
] as const;

const incomeNodes = [
  { id: "i1", x: 320, y: 118, title: "Active Players", value: "Weekly Activity" },
  { id: "i2", x: 680, y: 118, title: "Commission", value: "Recurring Income" },
] as const;

const playerToAgentConnections = [
  { from: { x: 120, y: 570 }, to: { x: 240, y: 350 } },
  { from: { x: 250, y: 610 }, to: { x: 240, y: 350 } },
  { from: { x: 380, y: 570 }, to: { x: 500, y: 300 } },
  { from: { x: 500, y: 620 }, to: { x: 500, y: 300 } },
  { from: { x: 620, y: 570 }, to: { x: 500, y: 300 } },
  { from: { x: 750, y: 610 }, to: { x: 760, y: 350 } },
  { from: { x: 880, y: 570 }, to: { x: 760, y: 350 } },
] as const;

const agentToIncomeConnections = [
  { from: { x: 240, y: 350 }, to: { x: 320, y: 118 } },
  { from: { x: 500, y: 300 }, to: { x: 320, y: 118 } },
  { from: { x: 500, y: 300 }, to: { x: 680, y: 118 } },
  { from: { x: 760, y: 350 }, to: { x: 680, y: 118 } },
] as const;

const transactionPaths = [
  "M120 570 L240 350 L320 118",
  "M250 610 L240 350 L320 118",
  "M380 570 L500 300 L680 118",
  "M500 620 L500 300 L680 118",
  "M620 570 L500 300 L680 118",
  "M750 610 L760 350 L680 118",
  "M880 570 L760 350 L680 118",
] as const;

const returnPulsePaths = [
  "M780 118 C 845 118, 860 210, 760 350",
  "M220 118 C 155 118, 140 210, 240 350",
] as const;

const outerAgentToPlayerPaths = [
  "M240 350 C 140 430, 118 500, 120 570",
  "M760 350 C 860 430, 882 500, 880 570",
] as const;

const middleAgentPlayerLine = {
  x1: 500,
  y1: 602,
  x2: 500,
  y2: 344,
} as const;

function PlayerNode({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x - 34} ${y - 34})`}>
      <circle
        cx="34"
        cy="34"
        r="33"
        fill="rgba(255,193,0,0.10)"
        stroke="rgba(255,193,0,0.24)"
        strokeWidth="2"
      />
      <circle cx="34" cy="34" r="25" fill="rgba(255,255,255,0.04)" />
      <image href="/client.png" x="15" y="15" width="38" height="38" preserveAspectRatio="xMidYMid meet" />
    </g>
  );
}

function AgentNode({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g transform={`translate(${x - 110} ${y - 42})`}>
      <rect
        width="220"
        height="84"
        rx="40"
        fill="rgba(255,255,255,0.035)"
        stroke="rgba(255,193,0,0.26)"
        strokeWidth="4"
      />
      <rect
        x="8"
        y="8"
        width="204"
        height="68"
        rx="22"
        fill="rgba(255,255,255,0.018)"
      />
      <image href="/manager.png" x="22" y="24" width="34" height="34" preserveAspectRatio="xMidYMid meet" />
      <text
        x="122"
        y="38"
        textAnchor="middle"
        fill="#FFF8E1"
        fontSize="16"
        fontWeight="700"
        letterSpacing="0.1em"
        style={{ textTransform: "uppercase" }}
      >
        {label}
      </text>
      <text
        x="122"
        y="58"
        textAnchor="middle"
        fill="rgba(255,255,255,0.58)"
        fontSize="11"
        fontWeight="600"
        letterSpacing="0.14em"
        style={{ textTransform: "uppercase" }}
      >
        Bring In Players
      </text>
    </g>
  );
}

function IncomeNode({ x, y, title, value }: { x: number; y: number; title: string; value: string }) {
  return (
    <g transform={`translate(${x - 130} ${y - 52})`}>
      <rect
        width="260"
        height="104"
        rx="30"
        fill="rgba(255,255,255,0.06)"
        stroke="rgba(255,193,0,0.30)"
        strokeWidth="1.8"
      />
      <rect x="9" y="9" width="242" height="86" rx="24" fill="rgba(20,14,0,0.42)" />
      <image href="/teamcash.png" x="22" y="26" width="42" height="42" preserveAspectRatio="xMidYMid meet" />
      <text
        x="84"
        y="39"
        fill="#FFC100"
        fontSize="12"
        fontWeight="700"
        letterSpacing="0.18em"
        style={{ textTransform: "uppercase" }}
      >
        {title}
      </text>
      <text x="84" y="64" fill="#FFF8E1" fontSize="18" fontWeight="700">
        {value}
      </text>
    </g>
  );
}

export default function AgentNetwork() {
  const lineGlowMatrix =
    "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.95 0";
  return (
    <div className="relative">
      <div className="relative aspect-[1000/800] w-full overflow-hidden p-4 sm:p-5">
        <svg viewBox="0 0 1000 700" className="absolute inset-0 h-full w-full" aria-label="Agent workflow from players to recurring income" role="img">
          <defs>
            <linearGradient id="playerFlow" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
              <stop offset="55%" stopColor="rgba(255,193,0,0.38)" />
              <stop offset="100%" stopColor="rgba(255,193,0,0.82)" />
            </linearGradient>

            <filter id="lineGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.4" result="blur" />
              <feColorMatrix
                in="blur"
                type="matrix"
                values={lineGlowMatrix}
              />
            </filter>
          </defs>

          {playerToAgentConnections.map((connection, index) => {
            const isMiddleConnection =
              connection.from.x === 500 &&
              connection.from.y === 620 &&
              connection.to.x === 500 &&
              connection.to.y === 300;

            return (
              <g key={`${connection.from.x}-${connection.from.y}-${connection.to.x}-${connection.to.y}`}>
                <line
                  x1={connection.from.x}
                  y1={connection.from.y}
                  x2={connection.to.x}
                  y2={connection.to.y}
                  stroke="rgba(255,193,0,0.34)"
                  strokeWidth={isMiddleConnection ? "11" : "8"}
                  strokeLinecap="round"
                  opacity={isMiddleConnection ? 0.62 : 0.42}
                  filter="url(#lineGlow)"
                />
                <line
                  x1={connection.from.x}
                  y1={connection.from.y}
                  x2={connection.to.x}
                  y2={connection.to.y}
                  stroke="url(#playerFlow)"
                  strokeWidth={isMiddleConnection ? "6.4" : "4.6"}
                  strokeLinecap="round"
                  opacity={isMiddleConnection ? 1 : 0.96 - index * 0.02}
                />
              </g>
            );
          })}

          {agentToIncomeConnections.map((connection, index) => (
            <g key={`${connection.from.x}-${connection.from.y}-${connection.to.x}-${connection.to.y}`}>
              <line
                x1={connection.from.x}
                y1={connection.from.y}
                x2={connection.to.x}
                y2={connection.to.y}
                stroke="rgba(255,193,0,0.26)"
                strokeWidth="8"
                strokeLinecap="round"
                opacity={0.34}
                filter="url(#lineGlow)"
              />
              <line
                x1={connection.from.x}
                y1={connection.from.y}
                x2={connection.to.x}
                y2={connection.to.y}
                stroke="url(#playerFlow)"
                strokeWidth="4.2"
                strokeLinecap="round"
                opacity={0.95 - index * 0.03}
              />
            </g>
          ))}

          <g>
            <line
              x1={middleAgentPlayerLine.x1}
              y1={middleAgentPlayerLine.y1}
              x2={middleAgentPlayerLine.x2}
              y2={middleAgentPlayerLine.y2}
              stroke="rgba(255,193,0,0.38)"
              strokeWidth="12"
              strokeLinecap="round"
              opacity={0.68}
              filter="url(#lineGlow)"
            />
            <line
              x1={middleAgentPlayerLine.x1}
              y1={middleAgentPlayerLine.y1}
              x2={middleAgentPlayerLine.x2}
              y2={middleAgentPlayerLine.y2}
              stroke="url(#playerFlow)"
              strokeWidth="6.8"
              strokeLinecap="round"
              opacity={1}
            />
          </g>

          {returnPulsePaths.map((path) => (
            <g key={`trajectory-${path}`}>
              <path
                d={path}
                fill="none"
                stroke="rgba(255,193,0,0.18)"
                strokeWidth="5.5"
                strokeLinecap="round"
                strokeDasharray="10 12"
                opacity={0.34}
                filter="url(#lineGlow)"
              />
              <path
                d={path}
                fill="none"
                stroke="rgba(255,193,0,0.42)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="9 11"
                opacity={0.98}
              />
            </g>
          ))}

          {outerAgentToPlayerPaths.map((path) => (
            <g key={`outer-player-trajectory-${path}`}>
              <path
                d={path}
                fill="none"
                stroke="rgba(255,193,0,0.16)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="10 12"
                opacity={0.28}
                filter="url(#lineGlow)"
              />
              <path
                d={path}
                fill="none"
                stroke="rgba(255,193,0,0.36)"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeDasharray="9 11"
                opacity={0.94}
              />
            </g>
          ))}

          {transactionPaths.map((path, index) => (
            <g key={path} className="network-transaction" opacity="0">
              <ellipse rx="6.5" ry="5" fill="#FFC100" opacity="0.95" />
              <path d="M-22 0 L-7 -3.6 L-2.4 0 L-7 3.6 Z" fill="#FFD75A" opacity="0.92" />
              <animate
                attributeName="opacity"
                values="0;0;1;1;0"
                keyTimes="0;0.08;0.16;0.86;1"
                dur="5.2s"
                begin={`${index * 0.7}s`}
                repeatCount="indefinite"
              />
              <animateMotion
                dur="5.2s"
                begin={`${index * 0.7}s`}
                repeatCount="indefinite"
                rotate="auto"
                path={path}
              />
            </g>
          ))}

          {returnPulsePaths.map((path, index) => (
            <g key={path} className="network-transaction" opacity="0">
              <ellipse rx="6.5" ry="5" fill="#FFC100" opacity="0.95" />
              <path d="M-22 0 L-7 -3.6 L-2.4 0 L-7 3.6 Z" fill="#FFD75A" opacity="0.92" />
              <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.08;0.16;0.86;1" dur="4.6s" begin={`${1.2 + index * 1.1}s`} repeatCount="indefinite" />
              <animateMotion dur="4.6s" begin={`${1.2 + index * 1.1}s`} repeatCount="indefinite" rotate="auto" path={path} />
            </g>
          ))}

          {outerAgentToPlayerPaths.map((path, index) => (
            <g key={`outer-player-pulse-${path}`} className="network-transaction" opacity="0">
              <ellipse rx="6.5" ry="5" fill="#FFC100" opacity="0.95" />
              <path d="M-22 0 L-7 -3.6 L-2.4 0 L-7 3.6 Z" fill="#FFD75A" opacity="0.92" />
              <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;0.08;0.16;0.86;1" dur="4.8s" begin={`${2 + index * 1.2}s`} repeatCount="indefinite" />
              <animateMotion dur="4.8s" begin={`${2 + index * 1.2}s`} repeatCount="indefinite" rotate="auto" path={path} />
            </g>
          ))}

          {incomeNodes.map((node) => (
            <IncomeNode key={node.id} x={node.x} y={node.y} title={node.title} value={node.value} />
          ))}
          {agentNodes.map((node) => (
            <AgentNode key={node.id} x={node.x} y={node.y} label={node.label} />
          ))}
          {playerNodes.map((node) => (
            <PlayerNode key={node.id} x={node.x} y={node.y} />
          ))}

          <text
            x="500"
            y="700"
            textAnchor="middle"
            fill="rgba(255,255,255,0.44)"
            fontSize="16"
            fontWeight="600"
            letterSpacing="0.22em"
            style={{ textTransform: "uppercase" }}
          >
            Provide an important service to millions of players
          </text>
        </svg>
      </div>
    </div>
  );
}