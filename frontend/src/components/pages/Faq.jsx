import PropTypes from "prop-types";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import "./faq.css";

const Faq = ({ question, answer }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <article className='quiz-cont'>
        <header>
          <h1 className='quizh1'>{question}</h1>
          <button onClick={() => setShowInfo(!showInfo)} className='btn-quiz'>
            {showInfo ? (
              <AiOutlineMinus className='out-minus' />
            ) : (
              <AiOutlinePlus className='out-plus' />
            )}
          </button>
        </header>
        {showInfo && <p className='quiz-info'>{answer}</p>}
      </article>
    </>
  );
};

export default Faq;

Faq.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};
