/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

function ExamTimer({ duration }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(timer);
        // You can add code here to handle what happens when the timer reaches 0.
        alert("Time is up!");
      }
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);

  // Convert seconds to seconds,minutes and seconds
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const secondsString =
    seconds < 10 ? `0${seconds} seconds` : `${seconds} seconds`;

  const minutesString =
    minutes < 10 ? `0${minutes} minutes` : `${minutes} minutes`;

  const hoursString = hours < 10 ? `0${hours} hours` : `${hours} hours`;

  return (
    <div>
      <h1>Exam Timer</h1>
      <div
        style={{
          padding: "10px",
          backgroundColor: "green",
          color: "white",
        }}
      >
        Time Left: {hoursString} : {minutesString} : {secondsString}
      </div>
    </div>
  );
}

export default ExamTimer;
