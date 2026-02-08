import { useState } from "react";

interface PixelEnvelopeProps {
  onClick: () => void;
}

const PixelEnvelope = ({ onClick }: PixelEnvelopeProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center gap-8 cursor-pointer select-none"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Pixel Envelope */}
      <div
        className={`relative transition-transform duration-300 ${
          isHovered ? "scale-110" : "scale-100"
        } animate-bounce-soft`}
      >
        {/* Envelope body */}
        <svg width="120" height="90" viewBox="0 0 120 90" className="drop-shadow-lg">
          {/* Envelope back */}
          <rect x="4" y="20" width="112" height="66" fill="hsl(350, 86%, 92%)" stroke="hsl(345, 100%, 50%)" strokeWidth="4" />
          {/* Envelope flap */}
          <polygon points="4,20 60,55 116,20" fill="hsl(350, 100%, 97%)" stroke="hsl(345, 100%, 50%)" strokeWidth="4" />
          {/* Heart seal */}
          <text x="60" y="60" textAnchor="middle" fontSize="24" fill="hsl(345, 100%, 50%)">♥</text>
          {/* Envelope bottom fold lines */}
          <line x1="4" y1="86" x2="45" y2="55" stroke="hsl(345, 100%, 50%)" strokeWidth="2" opacity="0.4" />
          <line x1="116" y1="86" x2="75" y2="55" stroke="hsl(345, 100%, 50%)" strokeWidth="2" opacity="0.4" />
        </svg>

        {/* Sparkles */}
        {isHovered && (
          <>
            <span className="absolute -top-2 -left-2 text-xs animate-ping">✦</span>
            <span className="absolute -top-1 -right-3 text-xs animate-ping delay-100">✦</span>
            <span className="absolute -bottom-1 left-1/2 text-xs animate-ping delay-200">✦</span>
          </>
        )}
      </div>

      {/* Text */}
      <div className="text-center">
        <p className="text-primary text-sm md:text-base leading-relaxed tracking-wider">
          ♡ Letter For You ♡
        </p>
        <p className="text-muted-foreground text-[8px] mt-4 animate-pulse">
          click to open
        </p>
      </div>
    </div>
  );
};

export default PixelEnvelope;
