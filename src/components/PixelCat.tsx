interface PixelCatProps {
  happy?: boolean;
}

const PixelCat = ({ happy = false }: PixelCatProps) => {
  if (happy) {
    return (
      <div className="text-center text-4xl md:text-5xl leading-none select-none animate-bounce-soft">
        <div className="flex flex-col items-center gap-1">
          {/* Happy cat with hearts */}
          <div className="text-2xl md:text-3xl">♥‿♥</div>
          <pre className="text-[10px] md:text-xs leading-tight text-foreground font-pixel">
{`  /\\_/\\
 ( ^.^ )
  > ♥ <`}
          </pre>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center leading-none select-none">
      <div className="flex flex-col items-center gap-1">
        <pre className="text-[10px] md:text-xs leading-tight text-foreground font-pixel">
{`  /\\_/\\
 ( o.o )
  > ♥ <`}
        </pre>
      </div>
    </div>
  );
};

export default PixelCat;
