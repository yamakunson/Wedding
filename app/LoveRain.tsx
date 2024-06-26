// LoveRain Component
import React, { useEffect, useState } from 'react';

const LoveRain = () => {
  const [hearts, setHearts] = useState<{ id: number; startX: number; animationDuration: number; }[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 5 }).map((_, index) => ({
      id: index,
      startX: Math.random() * 100,
      animationDuration: 5 + Math.random() * 8, // Adjusted duration for slower animation
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="love-rain-container">
      {hearts.map((heart) => (
        <img
          key={heart.id}
          src="/images/cupid.png" // Change this path to your image's path
          alt="Heart"
          className="heart w-8"
          style={{
            left: `${heart.startX}vw`,
            animationDuration: `${heart.animationDuration}s`,
            zIndex: 99,
          }}
        />
      ))}
    </div>
  );
};

export default LoveRain;