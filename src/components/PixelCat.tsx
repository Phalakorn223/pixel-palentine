import pixelCatImage from "@/assets/pixel-cat.png";
import pixelCatHappyImage from "@/assets/pixel-cat-happy.png";

interface PixelCatProps {
  happy?: boolean;
}

const PixelCat = ({ happy = false }: PixelCatProps) => {
  return (
    <div className={`select-none ${happy ? "animate-bounce-soft" : ""}`}>
      <img 
        src={happy ? pixelCatHappyImage : pixelCatImage} 
        alt={happy ? "Happy pixel cat celebrating" : "Pixel cat holding a heart"}
        className="w-48 h-48 md:w-56 md:h-56 object-contain"
        style={{ imageRendering: "pixelated" }}
      />
    </div>
  );
};

export default PixelCat;
