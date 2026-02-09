import { useState, useRef, useEffect, useCallback, type MouseEvent } from "react";
import PixelCat from "./PixelCat";

interface LetterWindowProps {
  onAccept: () => void;
}

const LetterWindow = ({ onAccept }: LetterWindowProps) => {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false); // Track if button has moved from initial position
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  // Initialize No button position on mount
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initial position relative to the container (for the first render)
    // We'll update this once to set the initial fixed position correctly
    const updateInitialPos = () => {
      if (!hasMoved && container) {
        const containerRect = container.getBoundingClientRect();
        setNoButtonPos({
          x: containerRect.left + containerRect.width / 2 + 40, // Offset to the right of YES button
          y: containerRect.top + containerRect.height - 80, // Near bottom of window
        });
      }
    };

    updateInitialPos();
    window.addEventListener('resize', updateInitialPos);
    return () => window.removeEventListener('resize', updateInitialPos);
  }, [hasMoved]);

  // Handle No button click - Teleport to random location
  const handleNoClick = useCallback((e: MouseEvent) => {
    e.preventDefault(); // Prevent any default button behavior
    e.stopPropagation(); // Stop event bubbling

    setHasMoved(true); // Mark as moved so it doesn't reset on resize to center

    const buttonWidth = noButtonRef.current?.offsetWidth || 100;
    const buttonHeight = noButtonRef.current?.offsetHeight || 40;

    // Calculate reliable random position within viewport
    const padding = 20;
    const maxX = window.innerWidth - buttonWidth - padding;
    const maxY = window.innerHeight - buttonHeight - padding;
    const minX = padding;
    const minY = padding;

    const newX = Math.random() * (maxX - minX) + minX;
    const newY = Math.random() * (maxY - minY) + minY;

    setNoButtonPos({ x: newX, y: newY });
  }, []);

  return (
    <div className="animate-scale-in" style={{ animation: "scaleIn 0.4s ease-out" }}>
      {/* Retro window CSS implementation */}
      <div
        className="relative w-[480px] md:w-[560px] overflow-visible bg-[#ffecf2] border-4 border-[#ffb7c5] shadow-[8px_8px_0_0_rgba(0,0,0,0.1)] rounded-lg"
        style={{
          imageRendering: 'pixelated',
          aspectRatio: '1/1.1',
        }}
      >
        {/* Decorative Header */}
        <div className="h-12 border-b-4 border-[#ffb7c5] flex items-center justify-between px-4 bg-[#ffe4ea]">
          <div className="text-[#ff8fab] font-bold tracking-widest text-lg font-pixel">LOVE</div>
          <div className="flex gap-2">
            <div className="w-4 h-4 bg-[#ffb7c5] rounded-full"></div>
            <div className="w-4 h-4 bg-[#ffb7c5] rounded-full"></div>
          </div>
        </div>

        {/* Content */}
        <div
          ref={containerRef}
          className="absolute inset-0 pt-[25%] px-[8%] pb-[12%] flex flex-col items-center gap-8"
        >
          <PixelCat />

          <p className="text-foreground text-sm md:text-base text-center leading-relaxed font-pixel mt-4">
            Will you be my Valentine?
          </p>

          {/* Buttons */}
          <div className="flex gap-4 w-full justify-center relative h-16 mt-auto mb-8">
            <button
              onClick={onAccept}
              className="bg-pixel-green text-primary-foreground px-6 py-3 text-sm font-pixel pixel-border cursor-pointer hover:brightness-110 active:translate-y-[2px] transition-all z-10 shadow-md"
            >
              YES
            </button>

            {/* Placeholder for NO button to maintain layout */}
            <div className="w-[88px] h-[44px]"></div>
          </div>
        </div>
      </div>

      {/* NO button positioned absolutely relative to viewport */}
      <button
        ref={noButtonRef}
        onClick={handleNoClick}
        style={{
          position: "fixed",
          left: `${noButtonPos.x}px`,
          top: `${noButtonPos.y}px`,
          transition: "all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Snappy movement
          zIndex: 9999,
        }}
        className="bg-primary text-primary-foreground px-6 py-3 text-sm font-pixel pixel-border cursor-pointer hover:brightness-110 transition-all shadow-md active:scale-95"
      >
        NO
      </button>

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
