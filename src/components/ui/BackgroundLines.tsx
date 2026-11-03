export function BackgroundLines() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      {/* Subtle radial ambient gradient centered in the viewport */}
      <div
        className="bg-glow"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at 50% 15%, rgba(200, 169, 110, 0.06) 0%, transparent 60%)',
        }}
      />

      {/* SVG with seamless subtle geometric crack & fracture lines */}
      <svg
        className="bg-drift"
        style={{
          position: 'absolute',
          top: '-140px',
          left: '-140px',
          width: 'calc(100% + 280px)',
          height: 'calc(100% + 280px)',
          opacity: 1,
          maskImage:
            'radial-gradient(ellipse 95% 85% at 50% 35%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 95% 85% at 50% 35%, black 40%, transparent 100%)',
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="fissure-pattern"
            width="560"
            height="560"
            patternUnits="userSpaceOnUse"
          >
            {/* Primary fine fracture line 1 */}
            <path
              d="M0 80 L140 130 L220 70 L340 180 L420 110 L560 170"
              stroke="rgba(255, 255, 255, 0.13)"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
            />
            {/* Branch off line 1 */}
            <path
              d="M140 130 L190 260 L280 310 L310 430 L450 490"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
            />
            {/* Secondary diagonal fracture line 2 */}
            <path
              d="M50 480 L160 390 L270 450 L390 320 L520 370 L560 340"
              stroke="rgba(255, 255, 255, 0.11)"
              strokeWidth="1.1"
              fill="none"
              strokeLinecap="round"
            />
            {/* Fine hairline branch with subtle gold accent tint */}
            <path
              d="M340 180 L390 320 L440 210 L560 250"
              stroke="rgba(200, 169, 110, 0.16)"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M220 70 L260 0"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M280 310 L390 320"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="0.9"
              fill="none"
              strokeLinecap="round"
            />
            {/* Subtle hairline grid accents at key intersections */}
            <circle cx="140" cy="130" r="1.8" fill="rgba(200, 169, 110, 0.35)" />
            <circle cx="340" cy="180" r="1.8" fill="rgba(200, 169, 110, 0.35)" />
            <circle cx="390" cy="320" r="1.8" fill="rgba(255, 255, 255, 0.2)" />
            <circle cx="190" cy="260" r="1.8" fill="rgba(255, 255, 255, 0.2)" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#fissure-pattern)" />
      </svg>

      {/* Slow light sweep that catches the fracture lines */}
      <div
        className="bg-sweep"
        style={{
          position: 'absolute',
          inset: '-25%',
          background:
            'linear-gradient(110deg, transparent 44%, rgba(200, 169, 110, 0.10) 50%, rgba(255, 255, 255, 0.05) 52%, transparent 58%)',
          maskImage:
            'radial-gradient(ellipse 90% 80% at 50% 40%, black 35%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 90% 80% at 50% 40%, black 35%, transparent 100%)',
        }}
      />
    </div>
  )
}
