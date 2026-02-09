import { useState, useRef, useCallback } from "react";
import PixelCat from "./PixelCat";

interface LetterWindowProps {
  onAccept: () => void;
}

const LetterWindow = ({ onAccept }: LetterWindowProps) => {
  const [noButtonStyle, setNoButtonStyle] = useState<React.CSSProperties>({});
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNoHover = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    // Allow button to escape outside the container (range: -150 to container width + 100)
    const minX = -150;
    const maxX = rect.width + 100;
    const minY = -80;
    const maxY = rect.height + 60;
    
    const newX = minX + Math.random() * (maxX - minX);
    const newY = minY + Math.random() * (maxY - minY);

    setNoButtonStyle({
      position: "absolute",
      left: `${newX}px`,
      top: `${newY}px`,
      transition: "all 0.2s ease",
      zIndex: 50,
    });
  }, []);

  return (
    <div className="animate-scale-in" style={{ animation: "scaleIn 0.4s ease-out" }}>
      {/* Retro window */}
      <div className="bg-card pixel-border-thick rounded-sm w-[320px] md:w-[400px] overflow-hidden">
        {/* Title bar */}
        <div className="bg-primary px-3 py-2 flex items-center justify-between">
          <div className="flex gap-2">
            <span className="text-primary-foreground text-xs">♥</span>
            <span className="text-primary-foreground text-xs">♥</span>
            <span className="text-primary-foreground text-xs">♥</span>
          </div>
          <span className="text-primary-foreground text-[10px] tracking-widest">
            LOVE
          </span>
          <div className="w-12" />
        </div>

        {/* Content */}
        <div
          ref={containerRef}
          className="relative p-6 md:p-8 flex flex-col items-center gap-6 min-h-[280px]"
        >
          <PixelCat />

          <p className="text-foreground text-[10px] md:text-xs text-center leading-relaxed">
            Will you be my Valentine?
          </p>

          {/* Buttons */}
          <div className="flex gap-4 w-full justify-center relative">
            <button
              onClick={onAccept}
              className="bg-pixel-green text-primary-foreground px-5 py-2 text-[10px] font-pixel pixel-border cursor-pointer hover:brightness-110 active:translate-y-[2px] transition-all z-10"
            >
              ✅ YES
            </button>

            <button
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              style={noButtonStyle}
              className="bg-primary text-primary-foreground px-5 py-2 text-[10px] font-pixel pixel-border cursor-pointer hover:brightness-110 active:translate-y-[2px] transition-all z-10"
            >
              ❌ NO
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scaleIn {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default LetterWindow;
