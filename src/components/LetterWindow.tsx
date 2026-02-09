import { useState, useRef, useCallback } from "react";
import PixelCat from "./PixelCat";
import pixelWindowBg from "@/assets/pixel-window-bg.png";

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
    const maxX = rect.width - 100;
    const maxY = rect.height - 50;
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    setNoButtonStyle({
      position: "absolute",
      left: `${newX}px`,
      top: `${newY}px`,
      transition: "all 0.2s ease",
    });
  }, []);

  return (
    <div className="animate-scale-in" style={{ animation: "scaleIn 0.4s ease-out" }}>
      {/* Retro window */}
      <div 
        className="relative w-[320px] md:w-[400px] overflow-hidden"
        style={{
          backgroundImage: `url(${pixelWindowBg})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          imageRendering: 'pixelated',
          aspectRatio: '1/1.1',
        }}
      >
        {/* Content */}
        <div
          ref={containerRef}
          className="absolute inset-0 pt-[25%] px-[8%] pb-[12%] flex flex-col items-center gap-6"
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
