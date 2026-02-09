import pixelCatImage from "@/assets/pixel-cat.png";
import pixelCatHappyImage from "@/assets/pixel-cat-happy.png";

interface PixelCatProps {
  happy?: boolean;
}

const PixelCat = ({ happy = false }: PixelCatProps) => {
  return (
    <div className={`select-none relative ${happy ? "animate-bounce-soft" : "animate-sway"}`}>

      {/* Cat Image */}
      <img
        src={happy ? pixelCatHappyImage : pixelCatImage}
        alt={happy ? "Happy pixel cat celebrating" : "Pixel cat holding a heart"}
        className="w-48 h-48 md:w-56 md:h-56 object-contain relative z-10"
        style={{ imageRendering: "pixelated" }}
      />

      {/* Floating Hearts Animation for Initial State (to make it lively) */}
      {!happy && (
        <>
          <div className="absolute -top-4 -right-2 text-pink-400 text-xl animate-float-1">♥</div>
          <div className="absolute top-10 -right-6 text-pink-300 text-lg animate-float-2">♥</div>
          <div className="absolute -top-2 left-0 text-pink-300 text-sm animate-float-3">♥</div>
          <div className="absolute bottom-4 -left-4 text-pink-300 text-xs animate-float-4">♥</div>
        </>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes sway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        .animate-sway {
          animation: sway 3s ease-in-out infinite;
        }
        
        @keyframes float-up {
          0% { transform: translateY(0) scale(0.8); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-20px) scale(1.2); opacity: 0; }
        }

        .animate-float-1 { animation: float-up 2s ease-out infinite; animation-delay: 0s; }
        .animate-float-2 { animation: float-up 2.5s ease-out infinite; animation-delay: 0.5s; }
        .animate-float-3 { animation: float-up 3s ease-out infinite; animation-delay: 1s; }
        .animate-float-4 { animation: float-up 2.2s ease-out infinite; animation-delay: 1.5s; }
      `}</style>
    </div>
  );
};

export default PixelCat;
