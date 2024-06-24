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

        let timeLeft = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };

        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }

        return timeLeft;
      };

      // Update time left immediately and every second
      setTimeLeft(calculateTimeLeft());
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      // Cleanup on component unmount
      return () => clearInterval(timer);
    }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div className="flex justify-center space-x-4 py-4">
      <div className="text-center">
        <div className="text-2xl">{timeLeft.days}</div>
        <div>Ngày</div>
      </div>
      <div className="text-center">
        <div className="text-2xl">{timeLeft.hours}</div>
        <div>Giờ</div>
      </div>
      <div className="text-center">
        <div className="text-2xl">{timeLeft.minutes}</div>
        <div>Phút</div>
      </div>
      <div className="text-center">
        <div className="text-2xl">{timeLeft.seconds}</div>
        <div>Giây</div>
      </div>
    </div>
  );
};

export default CountdownTimer;