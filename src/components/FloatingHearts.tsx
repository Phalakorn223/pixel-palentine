import { useEffect, useState } from "react";

interface Heart {
  id: number;
  left: number;
  delay: number;
  size: number;
  duration: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const initial: Heart[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      size: 12 + Math.random() * 20,
      duration: 3 + Math.random() * 4,
    }));
    setHearts(initial);

    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev,
        {
          id: Date.now(),
          left: Math.random() * 100,
          delay: 0,
          size: 12 + Math.random() * 20,
          duration: 3 + Math.random() * 4,
        },
      ]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute bottom-0 text-primary animate-float-heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
