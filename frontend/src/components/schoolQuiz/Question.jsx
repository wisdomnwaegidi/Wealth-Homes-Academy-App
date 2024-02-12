import PropTypes from "prop-types";
import "./question.css";

const Question = ({ question, index, onGuessAnswer, showCorrectAnswer }) => {
  const allAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ].sort((a, b) => (a < b ? -1 : 1));

  const handleClick = (answer) => {
    onGuessAnswer(answer);
  };

  return (
    <div className='answer-question'>
      <p className='answer-question__question'>
        {index + 1}: {question.question}
      </p>
      <ul className='answer-question__answers'>
        {allAnswers.map((answer) => (
          <li key={answer}>
            <button
              onClick={() => handleClick(answer)}
              className={`answer-button ${
                showCorrectAnswer && answer === question.correctAnswer
                  ? "correct-answer"
                  : showCorrectAnswer && answer !== question.correctAnswer
                  ? "incorrect-answer"
                  : "correct-answer"
              }`}
            >
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;

Question.propTypes = {
  question: PropTypes.shape({
    correctAnswer: PropTypes.string.isRequired,
    incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
    question: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onGuessAnswer: PropTypes.func.isRequired,
  showCorrectAnswer: PropTypes.bool.isRequired,
};

