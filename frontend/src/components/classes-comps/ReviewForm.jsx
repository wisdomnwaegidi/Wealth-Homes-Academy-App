import StarRating from "./StarRating";
import { useState } from "react";

const ReviewForm = () => {
  const [rating, setRating] = useState(4.5);

  return (
    <form>
      <StarRating rating={rating} onChange={(rating) => setRating(rating)} />
      <textarea placeholder='Write your review here...' />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default ReviewForm;
