import { useEffect, useState } from "react";
import Trivia from "./components/Trivia";
import { moneyPyramid } from "../data";
import Timer from "./components/Timer";
import Start from "./components/Start";

const App = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("0");
  const [username, setUsername] = useState(null);

  const [timerIsStart, setTimerIsStart] = useState(false);

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(
        moneyPyramid.find((money) => money.id === questionNumber - 1).amount
      );
  }, [questionNumber]);

  const handleBackBtn = () => {
    setEarned("0");
    setStop(false);
    setQuestionNumber(1);
    setUsername(null);
    setTimerIsStart(false);
  };

  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              <>
                <h1 className="endText">You earned: {earned}</h1>
                <button className="backBtn" onClick={handleBackBtn}>
                  Back
                </button>
              </>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setStop={setStop}
                      questionNumber={questionNumber}
                      timerIsStart={timerIsStart}
                      setTimerIsStart={setTimerIsStart}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimerIsStart={setTimerIsStart}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid
                .map((money) => (
                  <li
                    key={money.id}
                    className={`moneyListItem ${
                      questionNumber === money.id && "active"
                    } `}
                  >
                    <span className="moneyListItemNumber">{money.id}</span>
                    <span className="moneyListItemAmount">{money.amount} </span>
                  </li>
                ))
                .reverse()}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
};

export default App;
