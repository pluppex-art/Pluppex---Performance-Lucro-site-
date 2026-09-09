import React from 'react';

interface PluppexLogoProps {
  variant?: 'full' | 'wordmark' | 'icon' | 'badge';
  theme?: 'white' | 'dark' | 'white-purple';
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const PluppexLogo: React.FC<PluppexLogoProps> = ({
  variant = 'wordmark',
  theme = 'white-purple',
  className = '',
  showTagline = true,
  size = 'md',
}) => {
  // Theme coloring: on dark backgrounds PLUPPE is pure white; on light backgrounds it is deep black
  const textColor = theme === 'dark' ? '#0a0a0a' : '#ffffff';
  const taglineColor = theme === 'dark' ? '#334155' : '#cbd5e1';

  // Sizing helpers
  const sizeStyles = {
    sm: { height: 'h-6 sm:h-7', textH: 22, iconSize: 26 },
    md: { height: 'h-8 sm:h-9', textH: 28, iconSize: 34 },
    lg: { height: 'h-10 sm:h-12', textH: 38, iconSize: 44 },
    xl: { height: 'h-14 sm:h-16', textH: 52, iconSize: 60 },
  }[size];

  // Standalone Icon view (The dynamic Rocket "X")
  if (variant === 'icon') {
    return (
      <div 
        id="pluppex-brand-icon"
        className={`relative inline-flex items-center justify-center ${className}`}
      >
        <svg
          viewBox="0 0 160 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_16px_rgba(168,85,247,0.35)]"
        >
          <defs>
            {/* Rocket Trail Gradient (Fuchsia to Electric Cyan) */}
            <linearGradient id="rocketTrailGrad" x1="20" y1="140" x2="140" y2="20" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#c026d3" />
              <stop offset="35%" stopColor="#9333ea" />
              <stop offset="65%" stopColor="#6366f1" />
              <stop offset="85%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>

            {/* Crossing Stroke Gradient (Violet to Magenta) */}
            <linearGradient id="crossingStrokeGrad" x1="25" y1="35" x2="135" y2="135" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>

            {/* Glow Filter */}
            <filter id="pluppexGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* BACKGROUND CROSSING STROKE (Top-Left to Bottom-Right) with paint speed shards */}
          <g filter="url(#pluppexGlow)">
            {/* Main crossing slash with jagged speed lines */}
            <path
              d="M 32 36 L 68 28 L 62 44 L 86 52 L 80 66 L 98 62 L 92 78 L 116 80 L 110 94 L 134 98 L 126 116 L 106 104 L 98 120 L 84 102 L 74 112 L 68 94 L 50 100 L 58 78 L 38 68 L 48 52 Z"
              fill="url(#crossingStrokeGrad)"
              opacity="0.9"
            />
            {/* Crossing accent speed splatters */}
            <path d="M 22 42 L 30 38 L 26 48 Z" fill="#a855f7" />
            <path d="M 138 102 L 146 114 L 132 112 Z" fill="#d946ef" />
            <path d="M 44 24 L 54 22 L 48 30 Z" fill="#8b5cf6" />
            <path d="M 118 124 L 124 132 L 114 130 Z" fill="#c026d3" />
          </g>

          {/* FOREGROUND MAIN THRUST DIAGONAL (Bottom-Left to Top-Right Rocket Blast) */}
          <g>
            {/* Speed trail brush lines with characteristic multi-notch cutouts */}
            <path
              d="M 24 136 L 44 104 L 54 114 L 70 86 L 82 96 L 98 70 L 88 64 L 108 42 L 114 52 L 132 28 L 120 60 L 110 54 L 92 80 L 78 72 L 62 98 L 50 90 L 34 126 Z"
              fill="url(#rocketTrailGrad)"
            />

            {/* Inner speed cuts and highlights */}
            <path d="M 52 108 L 76 80 L 70 76 L 46 104 Z" fill="#ffffff" opacity="0.3" />
            <path d="M 80 72 L 104 46 L 98 42 L 74 68 Z" fill="#ffffff" opacity="0.4" />

            {/* Trailing energy particles */}
            <circle cx="28" cy="142" r="2.5" fill="#c026d3" />
            <circle cx="38" cy="138" r="1.8" fill="#a855f7" />
            <circle cx="16" cy="128" r="2" fill="#d946ef" />
            <circle cx="126" cy="22" r="2.2" fill="#38bdf8" />
            <circle cx="138" cy="34" r="1.6" fill="#0ea5e9" />

            {/* MINI LAUNCHING ROCKET (Blasting diagonally into top-right sky) */}
            <g transform="translate(130, 26) rotate(45)">
              {/* Rocket Exhaust Puffs */}
              <circle cx="0" cy="14" r="3.2" fill="#38bdf8" opacity="0.8" />
              <circle cx="-3" cy="19" r="2.2" fill="#0ea5e9" opacity="0.6" />
              <circle cx="2" cy="23" r="1.8" fill="#e0f2fe" opacity="0.5" />

              {/* Rocket Tail Wings */}
              <path d="M -7 9 L -2 3 L -2 11 Z" fill="#0284c7" />
              <path d="M 7 9 L 2 3 L 2 11 Z" fill="#0284c7" />

              {/* Rocket Main Fuselage */}
              <path
                d="M 0 -11 C -4 -5, -4 6, -2.5 11 L 2.5 11 C 4 6, 4 -5, 0 -11 Z"
                fill="#38bdf8"
              />
              {/* White fuselage highlight */}
              <path
                d="M -1 -9 C -3 -4, -3 5, -1.8 9 L 0 9 C -1 5, -1 -4, -0.5 -9 Z"
                fill="#ffffff"
                opacity="0.8"
              />

              {/* Circular Cabin Porthole */}
              <circle cx="0" cy="-1" r="2.2" fill="#ffffff" />
              <circle cx="0" cy="-1" r="1.4" fill="#0369a1" />
            </g>
          </g>
        </svg>
      </div>
    );
  }

  // Full Wordmark + Rocket "X" + Tagline View
  return (
    <div className={`flex flex-col select-none ${className}`}>
      {/* Brand Name Row */}
      <div className="flex items-center">
        <svg
          viewBox="0 0 540 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${sizeStyles.height} w-auto max-w-full drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]`}
        >
          <defs>
            {/* Rocket Trail Gradient (Fuchsia to Electric Cyan) */}
            <linearGradient id="rocketTrailGradFull" x1="410" y1="110" x2="520" y2="15" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#c026d3" />
              <stop offset="35%" stopColor="#9333ea" />
              <stop offset="65%" stopColor="#6366f1" />
              <stop offset="85%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>

            {/* Crossing Stroke Gradient (Violet to Magenta) */}
            <linearGradient id="crossingStrokeGradFull" x1="415" y1="25" x2="515" y2="115" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>

            {/* Subtle glow for the stylized X */}
            <filter id="xGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* ========================================================================= */}
          {/* WORDMARK "PLUPPE" - EXACT GEOMETRIC SANS PROPORTIONS */}
          {/* ========================================================================= */}
          <g fill={textColor}>
            {/* Letter P (1) */}
            <path d="M 15 28 H 58 C 71 28, 78 35, 78 48 C 78 61, 71 68, 58 68 H 33 V 94 H 15 V 28 Z M 33 42 V 54 H 56 C 60 54, 62 51, 62 48 C 62 45, 60 42, 56 42 H 33 Z" />

            {/* Letter L */}
            <path d="M 88 28 H 106 V 80 H 144 V 94 H 88 V 28 Z" />

            {/* Letter U */}
            <path d="M 154 28 H 172 V 74 C 172 79, 175 81, 182 81 C 189 81, 192 79, 192 74 V 28 H 210 V 75 C 210 88, 199 95, 182 95 C 165 95, 154 88, 154 75 V 28 Z" />

            {/* Letter P (2) */}
            <path d="M 220 28 H 263 C 276 28, 283 35, 283 48 C 283 61, 276 68, 263 68 H 238 V 94 H 220 V 28 Z M 238 42 V 54 H 261 C 265 54, 267 51, 267 48 C 267 45, 265 42, 261 42 H 238 Z" />

            {/* Letter P (3) */}
            <path d="M 293 28 H 336 C 349 28, 356 35, 356 48 C 356 61, 349 68, 336 68 H 311 V 94 H 293 V 28 Z M 311 42 V 54 H 334 C 338 54, 340 51, 340 48 C 340 45, 338 42, 334 42 H 311 Z" />

            {/* Letter E */}
            <path d="M 366 28 H 418 V 42 H 384 V 54 H 414 V 67 H 384 V 80 H 420 V 94 H 366 V 28 Z" />
          </g>

          {/* ========================================================================= */}
          {/* THE DYNAMIC STYLIZED ROCKET "X" MARK */}
          {/* ========================================================================= */}
          <g transform="translate(10, 0)">
            {/* 1. Crossing Slash (Top-Left to Bottom-Right) with Speed Strokes */}
            <g filter="url(#xGlow)">
              <path
                d="M 422 28 L 448 22 L 444 34 L 462 40 L 458 50 L 472 48 L 468 60 L 486 62 L 482 72 L 500 76 L 494 90 L 478 80 L 472 92 L 460 78 L 452 86 L 448 72 L 434 76 L 440 60 L 426 52 L 434 40 Z"
                fill="url(#crossingStrokeGradFull)"
                opacity="0.95"
              />
              {/* Secondary paint texture shards */}
              <path d="M 414 32 L 420 28 L 418 36 Z" fill="#a855f7" />
              <path d="M 502 82 L 510 90 L 498 88 Z" fill="#d946ef" />
              <path d="M 432 18 L 440 16 L 436 22 Z" fill="#8b5cf6" />
              <path d="M 488 98 L 494 104 L 484 102 Z" fill="#c026d3" />
            </g>

            {/* 2. Main Rocket Thrust Slash (Bottom-Left to Top-Right) */}
            <g>
              <path
                d="M 416 104 L 432 80 L 440 88 L 452 66 L 462 74 L 474 54 L 466 50 L 482 32 L 486 40 L 500 22 L 490 46 L 482 42 L 468 62 L 458 56 L 446 76 L 436 70 L 424 96 Z"
                fill="url(#rocketTrailGradFull)"
              />

              {/* High-speed white energy highlights */}
              <path d="M 438 84 L 456 62 L 452 58 L 434 80 Z" fill="#ffffff" opacity="0.35" />
              <path d="M 460 56 L 478 36 L 474 32 L 456 52 Z" fill="#ffffff" opacity="0.45" />

              {/* Energy particles */}
              <circle cx="418" cy="110" r="2.2" fill="#c026d3" />
              <circle cx="428" cy="106" r="1.6" fill="#a855f7" />
              <circle cx="410" cy="98" r="1.8" fill="#d946ef" />
              <circle cx="496" cy="18" r="2" fill="#38bdf8" />
              <circle cx="506" cy="28" r="1.4" fill="#0ea5e9" />

              {/* 3. MINI LAUNCHING ROCKET SHIP */}
              <g transform="translate(500, 20) rotate(45)">
                {/* Exhaust Puff Smoke Trail */}
                <circle cx="0" cy="13" r="2.8" fill="#38bdf8" opacity="0.8" />
                <circle cx="-2.5" cy="17" r="2" fill="#0ea5e9" opacity="0.6" />
                <circle cx="2" cy="20" r="1.5" fill="#e0f2fe" opacity="0.5" />

                {/* Rocket Wings */}
                <path d="M -6 8 L -2 3 L -2 10 Z" fill="#0284c7" />
                <path d="M 6 8 L 2 3 L 2 10 Z" fill="#0284c7" />

                {/* Main Rocket Fuselage */}
                <path
                  d="M 0 -10 C -3.5 -5, -3.5 5, -2.2 10 L 2.2 10 C 3.5 5, 3.5 -5, 0 -10 Z"
                  fill="#38bdf8"
                />
                {/* Fuselage highlight */}
                <path
                  d="M -1 -8 C -2.5 -4, -2.5 4, -1.5 8 L 0 8 C -0.8 4, -0.8 -4, -0.4 -8 Z"
                  fill="#ffffff"
                  opacity="0.85"
                />

                {/* Cockpit Porthole Window */}
                <circle cx="0" cy="-1" r="2" fill="#ffffff" />
                <circle cx="0" cy="-1" r="1.2" fill="#0369a1" />
              </g>
            </g>
          </g>
        </svg>
      </div>

      {/* Subtitle Tagline (Underneath PLUPPE X) */}
      {showTagline && (
        <div className="mt-1 flex items-center">
          <p 
            className="text-[7.5px] sm:text-[9.5px] md:text-[10px] tracking-[0.24em] sm:tracking-[0.28em] font-mono-tech uppercase font-bold text-slate-300"
            style={{ color: taglineColor }}
          >
            PERFORMANCE & LUCRO COM CRESCIMENTO EXPONENCIAL
          </p>
        </div>
      )}
    </div>
  );
};
