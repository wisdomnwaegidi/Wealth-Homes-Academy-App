import quizData from "../schoolData/item";
import { useState } from "react";
import Faq from "./Faq";
import "./faqs.css";
import { FaQuestion } from "react-icons/fa";

const Faqs = () => {
  // eslint-disable-next-line no-unused-vars
  const [quizes, setQuizes] = useState(quizData);
  return (
    <main className='main'>
      <FaQuestion />
      <div className='quizes-container'>
        <h1 className='qst-quiz'>Frequently Asked Questions?</h1>
        <section>
          {quizes.map((quiz) => {
            return <Faq key={quiz.id} {...quiz} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default Faqs;
