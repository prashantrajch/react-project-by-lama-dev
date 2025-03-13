import { useEffect, useState } from "react";
import { questions } from "../../data";
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";

const Trivia = ({
  questionNumber,
  setQuestionNumber,
  setStop,
  setTimerIsStart,
}) => {
  const currentQuestion = questions[questionNumber - 1]; // Fixed variable name
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState(null);

  // Sound Hooks
  const [letsPlay, { stop: letsPlayStop }] = useSound(play);
  const [correctAnswer, { stop: correctAnswerStop }] = useSound(correct);
  const [wrongAnswer, { stop: wrongAnswerStop }] = useSound(wrong);

  // Delayed action helper
  const delay = (duration, callback) => {
    setTimeout(callback, duration);
  };

  // Handle Answer Selection
  function handleAnswerClick(e) {
    if (selectedAnswer) return; // Prevent multiple clicks

    const value = e.target.innerText;
    setSelectedAnswer(value);
    setClassName("active");
    setTimerIsStart(false);

    delay(1000, () => {
      setClassName(currentQuestion.answer === value ? "correct" : "wrong");
    });

    delay(3000, () => {
      if (currentQuestion.answer === value) {
        correctAnswer(); // Play correct answer sound
        delay(2000, () => {
          setQuestionNumber((prev) => prev + 1);
          setStop(false);
          correctAnswerStop();
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer(); // Play wrong answer sound
        delay(2000, () => {
          setStop(true);
          wrongAnswerStop();
          setSelectedAnswer(null);
        });
      }
    });
  }

  // Play intro sound on question change
  useEffect(() => {
    letsPlay();
    const timeout = setTimeout(() => {
      // Stops the sound after 2 seconds
      letsPlayStop();
    }, 2000);

    return () => clearTimeout(timeout);
  }, [questionNumber, letsPlay, letsPlayStop]); // Play only when question changes

  return (
    <div className="trivia">
      <div className="question">{currentQuestion?.question}</div>
      <div className="answers">
        {currentQuestion?.options?.map((answer, ind) => (
          <div
            key={ind}
            className={`answer ${selectedAnswer === answer ? className : ""}`}
            onClick={handleAnswerClick}
          >
            {answer}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trivia;
