import React, { useState, useEffect } from 'react';
import styles from './style.module.css'; // Assuming you use CSS Modules

const OfferCount = ({ endTime }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const difference = new Date(endTime) - new Date();
    let time = {};
    if (difference > 0) {
      time = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return time;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, [endTime]);

  return (
    <div className={styles.offer_count}>
      <p>Hurry! Offer ends in:</p>
      {timeLeft.days !== undefined ? (
        <div className={styles.countdown}>
          <span>{timeLeft.days}<span>days</span></span>
          <span>{timeLeft.hours}<span>hours</span></span>
          <span>{timeLeft.minutes}<span> minuts</span></span>

          <span>{timeLeft.seconds}<span> sec</span></span> 
        </div>
      ) : (
        <p>Offer has ended!</p>
      )}
    </div>
  );
};

export default OfferCount;
