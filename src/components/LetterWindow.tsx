import { useState, useRef, useCallback, useEffect } from "react";
import PixelCat from "./PixelCat";

interface LetterWindowProps {
  onAccept: () => void;
}

const LetterWindow = ({ onAccept }: LetterWindowProps) => {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [isNoButtonMoving, setIsNoButtonMoving] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  // Initialize No button position on mount
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

<<<<<<< HEAD
    const containerRect = container.getBoundingClientRect();
    // Position button initially at its default location within the window
    setNoButtonPos({
      x: containerRect.left + containerRect.width / 2 + 40, // Offset to the right of YES button
      y: containerRect.top + containerRect.height - 80, // Near bottom of window
=======
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
>>>>>>> 7475f5f8e8a5ed1512e0fad318f5fb865ec10a0f
    });
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const noButton = noButtonRef.current;
    if (!noButton) return;

    const buttonRect = noButton.getBoundingClientRect();

    // Get mouse position (viewport coordinates)
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Get button center position (viewport coordinates)
    const buttonCenterX = buttonRect.left + buttonRect.width / 2;
    const buttonCenterY = buttonRect.top + buttonRect.height / 2;

    // Calculate distance between mouse and button center
    const distance = Math.sqrt(
      Math.pow(mouseX - buttonCenterX, 2) +
      Math.pow(mouseY - buttonCenterY, 2)
    );

    // If mouse is within 150px of button, move it away
    const evadeRadius = 150;
    if (distance < evadeRadius) {
      setIsNoButtonMoving(true);

      // Calculate direction away from mouse
      const angle = Math.atan2(buttonCenterY - mouseY, buttonCenterX - mouseX);

      // Move button away from mouse
      const moveDistance = 100;
      let newX = buttonCenterX + Math.cos(angle) * moveDistance;
      let newY = buttonCenterY + Math.sin(angle) * moveDistance;

      // Keep button within viewport bounds
      const padding = 20;
      const maxX = window.innerWidth - buttonRect.width - padding;
      const maxY = window.innerHeight - buttonRect.height - padding;

      newX = Math.max(padding, Math.min(maxX, newX));
      newY = Math.max(padding, Math.min(maxY, newY));

      setNoButtonPos({ x: newX, y: newY });
    }
  }, []);

  // Add global mouse move listener
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div className="animate-scale-in" style={{ animation: "scaleIn 0.4s ease-out" }}>
      {/* Retro window */}
<<<<<<< HEAD
      <div
        className="relative w-[480px] md:w-[560px] overflow-visible"
        style={{
          backgroundImage: `url(${pixelWindowBg})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          imageRendering: 'pixelated',
          aspectRatio: '1/1.1',
          filter: 'contrast(1.1) brightness(1.05)',
        }}
      >
        {/* Content */}
        <div
          ref={containerRef}
          className="absolute inset-0 pt-[25%] px-[8%] pb-[12%] flex flex-col items-center gap-8"
=======
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
>>>>>>> 7475f5f8e8a5ed1512e0fad318f5fb865ec10a0f
        >
          <PixelCat />

          <p className="text-foreground text-sm md:text-base text-center leading-relaxed font-pixel">
            Will you be my Valentine?
          </p>

          {/* Buttons */}
          <div className="flex gap-4 w-full justify-center relative h-16">
            <button
              onClick={onAccept}
              className="bg-pixel-green text-primary-foreground px-6 py-3 text-sm font-pixel pixel-border cursor-pointer hover:brightness-110 active:translate-y-[2px] transition-all z-10"
            >
              YES
            </button>

<<<<<<< HEAD
            {/* Placeholder for NO button to maintain layout */}
            {!isNoButtonMoving && (
              <div className="w-[88px] h-[44px]"></div>
            )}
=======
            <button
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              style={noButtonStyle}
              className="bg-primary text-primary-foreground px-5 py-2 text-[10px] font-pixel pixel-border cursor-pointer hover:brightness-110 active:translate-y-[2px] transition-all z-10"
            >
              NO
            </button>
>>>>>>> 7475f5f8e8a5ed1512e0fad318f5fb865ec10a0f
          </div>
        </div>
      </div>

      {/* NO button positioned absolutely relative to viewport */}
      <button
        ref={noButtonRef}
        style={{
          position: "fixed",
          left: `${noButtonPos.x}px`,
          top: `${noButtonPos.y}px`,
          transition: "all 0.3s ease-out",
          zIndex: 9999,
        }}
        className="bg-primary text-primary-foreground px-6 py-3 text-sm font-pixel pixel-border cursor-pointer hover:brightness-110 transition-all"
      >
        ❌ NO
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
