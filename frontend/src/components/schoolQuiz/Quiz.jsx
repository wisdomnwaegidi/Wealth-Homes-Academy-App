import { useEffect, useState } from "react";
import Question from "./Question";
import "./quiz.css";

const getQuestions = async () => {
  const response = await fetch(
    "https://the-trivia-api.com/api/questions?limit=30"
  );
  const questions = await response.json();
  return questions;
};

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  let currentQuestion = questions[currentQuestionIndex];
  const remainingNumberOfQuestions = questions.length - currentQuestionIndex;

  let quizState;
  if (questions.length === 0) {
    quizState = "not ready";
  } else if (remainingNumberOfQuestions > 0) {
    quizState = "in progress";
  } else {
    quizState = "complete";
  }

  const handleGuessAnswer = (guess) => {
    if (showCorrectAnswer) return; // Don't allow clicking when showing the correct answer

    if (guess === currentQuestion.correctAnswer) {
      setScore(score + 1);
      setCurrentQuestionIndex(currentQuestionIndex + 1); 
      console.log("Moved to the next question");
      console.log("New currentQuestionIndex:", currentQuestionIndex + 1);
    } else {
      setShowCorrectAnswer(true);
      setTimeout(() => {
        setShowCorrectAnswer(false);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 2500);
    }
  };

  const resetQuiz = () => {
    setQuestions([]);
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowCorrectAnswer(false); 
    getQuestions().then((res) => {
      setQuestions(res);
    });
  };

  useEffect(() => {
    getQuestions().then((res) => {
      console.log("Fetched questions:", res);
      setQuestions(res);
    });
  }, []);

  return (
    <div className='quiz-container'>
      <header className='quiz-header'>Wealthy Homes Trivia</header>
      <p className='intro-paragraph'>
        Welcome to Wealthy Homes Trivia Quiz. Have some fun while quizzing!
      </p>
      {currentQuestion && (
        <>
          <div className='score-table'>
            <div>
              <h3>Total Questions</h3>
              <p>{questions.length}</p>
            </div>
            <div>
              <h3>Current score</h3>
              <p>{score}</p>
            </div>
            <div>
              <h3>Questions remaining</h3>
              <p>{remainingNumberOfQuestions}</p>
            </div>
          </div>
          <div>
            <div className='con-qst-category'>
              <div className='qst-category-div'>
                <h4>Question Category:</h4>
                <p>{currentQuestion.category}</p>
              </div>
            </div>
          </div>
          <Question
            question={currentQuestion}
            index={currentQuestionIndex}
            onGuessAnswer={handleGuessAnswer}
            showCorrectAnswer={showCorrectAnswer}
          />
          <details>
            <summary>Question JSON</summary>
            <pre className='question-json'>
              {JSON.stringify(currentQuestion, null, 2)}
            </pre>
          </details>
        </>
      )}
      {quizState === "not ready" && (
        <p style={{ fontSize: "2rem", fontWeight: "700" }}>
          Loading Questions...
        </p>
      )}
      {quizState === "complete" && (
        <>
          <p className='comp-quiz'>
            Complete! You scored {score}/{questions.length}
          </p>
          <button className='btn-play' onClick={resetQuiz}>
            Play again
          </button>
        </>
      )}
    </div>
  );
};

export default Quiz;
