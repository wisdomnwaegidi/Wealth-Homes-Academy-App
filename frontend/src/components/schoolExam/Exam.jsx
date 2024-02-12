import { useState } from "react";
import { examQuestions } from "../schooldata/examQuestions";
import "./exam.css";
import ExamTimer from './ExamTimer'

const Exam = () => {
  const [userAnswers, setUserAnswers] = useState(
    new Array(examQuestions.length).fill(null)
  );
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerSelection = (questionIndex, answerIndex) => {
    if (!submitted) {
      const newAnswers = [...userAnswers];
      newAnswers[questionIndex] = answerIndex;
      setUserAnswers(newAnswers);
    }
  };

  const handleSubmitExam = () => {
    if (submitted) return;

    const userScore = userAnswers.reduce((score, userAnswer, index) => {
      if (userAnswer === examQuestions[index].correctAnswer) {
        score++;
      }
      return score;
    }, 0);

    setScore(userScore);
    setSubmitted(true);
  };

  // Determine if the user passed or failed
  const isPassed = score !== null && score >= 10;

  return (
    <div className="exam-con">
      <div className="exm-hd">
        <ExamTimer duration={60 *  30}/>
        <h1 className="exam-header">
          2022/2023 Examination of Wealthy Homes Academy.
        </h1>
        <h1 className="exm-eng">English language</h1>
        <h4 className="exam-info">
          Please endeavor to read all information before answering the
          questions.
        </h4>
      </div>
      <ul className="qst">
        {examQuestions.map((question, questionIndex) => (
          <li key={question.id}>
            {question.text}
            <ul className="con-li">
              {question.answers.map((answer, answerIndex) => (
                <li key={answer}>
                  <input
                    type="radio"
                    name={`question${questionIndex}`}
                    value={answerIndex}
                    checked={userAnswers[questionIndex] === answerIndex}
                    onChange={() =>
                      handleAnswerSelection(questionIndex, answerIndex)
                    }
                    disabled={submitted}
                  />
                  {answer}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <button onClick={handleSubmitExam} className="exam-btn">
        Submit Exam
      </button>

      {submitted && (
        <div className="score">
          {isPassed ? (
            <h1>Congratulations! You passed the exam.</h1>
          ) : (
            <h1>Sorry, you failed the exam.</h1>
          )}
          <h1>
            Your score is {score} out of {examQuestions.length}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Exam;
