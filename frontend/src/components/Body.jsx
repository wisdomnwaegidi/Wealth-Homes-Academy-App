import "./body.css";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <>
      <div className='bg-img'>
        <div className='body-con'>
          <p className='discover-teach'>
            Discover how we teach your child to become brilliant.{" "}
          </p>
          <Link to='/Register'>Get started</Link>
        </div>
      </div>
    </>
  );
};

export default Body;
