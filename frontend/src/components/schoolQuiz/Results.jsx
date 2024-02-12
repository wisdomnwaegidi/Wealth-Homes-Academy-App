import PropTypes from "prop-types";

const Results = ({ score, question }) => {
  return (
    <div className='Results'>
      <h1>Your Results</h1>
      <p>
        You scored {score} out of {question.length} questions.
      </p>
    </div>
  );
};

export default Results;

Results.propTypes = {
  score: PropTypes.number.isRequired,
  question: PropTypes.array.isRequired,
};
