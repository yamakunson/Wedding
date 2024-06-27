// LoveRain Component
import React, { useEffect, useState } from 'react';

const LoveRain = () => {
  const imageList = [
    '/images/flower_1.png',
    '/images/flower_2.png',
    '/images/flower_3.png',
    '/images/flower_4.png',
    '/images/flower_5.png',
  ];
  const [hearts, setHearts] = useState<{ id: number; startX: number; animationDuration: number; imagePath: string; rotation: number; width: number; }[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 20 }).map((_, index) => ({
      id: index,
      startX: Math.random() * 100,
      animationDuration: 5 + Math.random() * 8,
      imagePath: imageList[Math.floor(Math.random() * imageList.length)], // Randomly select an image path
      rotation: Math.random() * 360, // Random rotation between 0 and 360 degrees
      width:  8 + Math.random() * 8, // Random width between 50px and 150px
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="love-rain-container">
      {hearts.map((heart) => (
        <img
          key={heart.id}
          src={heart.imagePath}
          alt="Heart"
          className="heart"
          style={{
            left: `${heart.startX}vw`,
            animationDuration: `${heart.animationDuration}s`,
            zIndex: 99,
            transform: `rotate(${heart.rotation}deg)`, // Apply rotation
            width: `${heart.width}px`, // Apply width
          }}
        />
      ))}
    </div>
  );
};

export default LoveRain;