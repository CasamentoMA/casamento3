import { useEffect, useState } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

const WEDDING_DATE = new Date('2025-05-15T18:00:00');

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      
      setTimeLeft({
        days: differenceInDays(WEDDING_DATE, now),
        hours: differenceInHours(WEDDING_DATE, now) % 24,
        minutes: differenceInMinutes(WEDDING_DATE, now) % 60,
        seconds: differenceInSeconds(WEDDING_DATE, now) % 60
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-8 text-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col">
          <span className="text-4xl font-bold text-rose-600">{value}</span>
          <span className="text-sm uppercase tracking-wider text-rose-700">{unit}</span>
        </div>
      ))}
    </div>
  );
}