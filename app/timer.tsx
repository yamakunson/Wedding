import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

    useEffect(() => {
      const calculateTimeLeft = () => {
        const targetDate = new Date('July 14, 2024 00:00:00').getTime();
        const now = new Date().getTime();
        const difference = targetDate - now;
    
        if (difference > 0) {
          const timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
    
          setTimeLeft(timeLeft);
        } else {
          // Time's up, stop the timer
          clearInterval(timer);
          setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
      };
    
      // Call the function every second
      const timer = setInterval(calculateTimeLeft, 1000);
    
      // Clear interval on component unmount
      return () => clearInterval(timer);
    }, []);

  return (
    <div className="flex justify-center space-x-4 py-4 noto-serif ">
      <div className="text-center border border-white p-2 rounded-md" style={{ backdropFilter: 'blur(20px)' }}>
        <div className="text-xl font-bold">{timeLeft.days}</div>
        <div>Ngày</div>
      </div>
      <div className="text-center border border-white p-2 rounded-md" style={{ backdropFilter: 'blur(20px)' }}>
        <div className="text-xl font-bold">{timeLeft.hours}</div>
        <div>Giờ</div>
      </div>
      <div className="text-center border border-white p-2 rounded-md" style={{ backdropFilter: 'blur(20px)' }}>
        <div className="text-xl font-bold">{timeLeft.minutes}</div>
        <div>Phút</div>
      </div>
      <div className="text-center border border-white p-2 rounded-md" style={{ backdropFilter: 'blur(20px)' }}>
        <div className="text-xl font-bold">{timeLeft.seconds}</div>
        <div>Giây</div>
      </div>
    </div>
  );
};

export default CountdownTimer;