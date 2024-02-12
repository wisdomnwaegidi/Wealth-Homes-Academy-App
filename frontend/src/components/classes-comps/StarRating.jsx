import { useState } from "react";
import "./starRating.css";

// eslint-disable-next-line react/prop-types
const StarRating = ({ rating }) => {
  const [stars, setStars] = useState(rating);

  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className='rating'>
      {numbers.map((star, index) => (
        <svg
          key={index}
          onClick={() => setStars(star)}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <path d='M0 0h24v24H0z' fill='none' />
          <path
            fill={star <= stars ? "#FFC107" : "#E5E5E5"}
            d='M12 2l2.1 6.38L20 9l-5.19 4.36L16 20l-4.95-3.96L6 20l1.14-4.64L2 9l6.9-.62z'
          />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
