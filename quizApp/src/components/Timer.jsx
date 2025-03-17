import { useEffect, useRef, useState } from "react";
import timeSound from "../sounds/timer.mp3";
import useSound from "use-sound";

const Timer = ({ setStop, questionNumber, timerIsStart, setTimerIsStart }) => {
  const [timer, setTimer] = useState(30);
  const [timerSound, { stop: timerSoundStop }] = useSound(timeSound, {
    interrupt: false,
  });
  // Track if sound started
  const intervalRef = useRef(null);

  useEffect(() => {
    // Play sound first, then start the timer after 2 second
    const timeOut = setTimeout(() => {
      setTimerIsStart(true);
      timerSound();
    }, 2000);

    return () => clearTimeout(timeOut);
  }, [timerSound, questionNumber, setTimerIsStart]); // Runs only when question changes

  useEffect(() => {
    if (!timerIsStart) {
      clearInterval(intervalRef.current);
      timerSoundStop();
      return;
    } // Wait until sound has played before starting timer

    if (timer === 0) {
      timerSoundStop();
      setStop(true);
      return;
    }

    intervalRef.current = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [timer, setStop, timerSoundStop, timerIsStart, setTimerIsStart]); // Timer only starts after isPlaying is true

  useEffect(() => {
    setTimer(30);
    setTimerIsStart(false); // Reset play state when question changes
  }, [questionNumber, setTimerIsStart]);

  return <div>{timer}</div>;
};

export default Timer;
