import pixelCatImage from "@/assets/pixel-cat.png";

interface PixelCatProps {
  happy?: boolean;
}

const PixelCat = ({ happy = false }: PixelCatProps) => {
  return (
    <div className={`select-none ${happy ? "animate-bounce-soft" : ""}`}>
      <img 
        src={pixelCatImage} 
        alt="Pixel cat holding a heart" 
        className="w-32 h-32 md:w-40 md:h-40 object-contain"
        style={{ imageRendering: "pixelated" }}
      />
    </div>
  );
};

export default PixelCat;
