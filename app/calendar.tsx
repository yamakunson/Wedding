import React from 'react';
const Calendar = () => {
  const startDay = new Date(2024, 6, 1).getDay(); // July 1, 2024 - Remember, months are 0-indexed
  const totalDays = 31; // July has 31 days

  // Calculate the days to be displayed from the previous month
  const prevMonthDays = startDay;
  const days = [];
  for (let i = 0; i < prevMonthDays; i++) {
    days.push(<div key={`prev-${i}`} className="border p-2 opacity-50">-</div>);
  }

  // Days of July
  for (let i = 1; i <= totalDays; i++) {
    const dayClass = i === 14 ? "font-bold text-[#ffffff] p-2 bg-heart rounded-md flex items-center justify-center" : " p-2 rounded-md flex items-center justify-center";
    days.push(<div key={`current-${i}`} className={dayClass}>{i}</div>);
}

  return (
<div className='h-full flex flex-col items-center text-[#fff] ' >
  {/* Header displaying the month and year */}
  <div className="text-2xl noto-serif py-4">
    THÁNG 7 / 2024
  </div>
  <div className='border border-white w-full mx-4 mb-4'></div>
  <div className="grid grid-cols-7 gap-1 w-full bg-cover bg-center text-center quicksand" >
    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
      <div key={day} className="border p-2 font-bold">{day}</div>
    ))}
    {days}
  </div>
</div>
  );
};

export default Calendar;