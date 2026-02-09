import PixelCat from "./PixelCat";
import FloatingHearts from "./FloatingHearts";
import pixelWindowBg from "@/assets/pixel-window-bg.png";

const AcceptedState = () => {
  return (
    <>
      <FloatingHearts />
      <div style={{ animation: "scaleIn 0.4s ease-out" }}>
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
          <div className="absolute inset-0 pt-[25%] px-[8%] pb-[12%] flex flex-col items-center gap-4">
            <PixelCat happy />

            <p className="text-primary text-sm md:text-base text-center animate-pulse-glow">
              Yippeeee!
            </p>

            <div className="bg-secondary p-4 rounded-sm pixel-border text-center">
              <p className="text-[8px] text-muted-foreground mb-2">
                ♡ VALENTINE DATE ♡
              </p>
              <p className="text-[10px] md:text-xs text-foreground leading-relaxed">
                McDonald's Restaurant
              </p>
              <p className="text-[10px] md:text-xs text-foreground leading-relaxed">
                at 7pm
              </p>
              <p className="text-[10px] md:text-xs text-accent mt-2 font-pixel">
                Dress Fancy! ✨
              </p>
            </div>

            <div className="flex gap-2 text-lg">
              <span className="animate-bounce-soft">💖</span>
              <span className="animate-bounce-soft" style={{ animationDelay: "0.2s" }}>💕</span>
              <span className="animate-bounce-soft" style={{ animationDelay: "0.4s" }}>💗</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scaleIn {
          0% { transform: scale(0.8); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default AcceptedState;
