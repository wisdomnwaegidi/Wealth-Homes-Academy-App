import { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (newRating) => {
    setRating(newRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starClassName = i <= rating ? "starfilled" : "star";
      stars.push(
        <svg
          key={i}
          onClick={() => handleRatingClick(i)}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <path d='M0 0h24v24H0z' fill='none' />
          <path
            fill={starClassName}
            d='M12 2l2.1 6.38L20 9l-5.19 4.36L16 20l-4.95-3.96L6 20l1.14-4.64L2 9l6.9-.62z'
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className='star-rating'>
      {renderStars()}
      <p>Selected Rating: {rating} stars</p>
    </div>
  );
};

export default Rating;
