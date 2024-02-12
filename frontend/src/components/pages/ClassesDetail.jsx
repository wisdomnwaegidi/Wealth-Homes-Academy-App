import PropTypes from "prop-types";
import "./classdetails.css";
import { Link } from "react-router-dom";

const ClassesDetail = ({ classes }) => {
  return (
    <>
      {classes.map((item) => {
        const {
          id,
          img,
          url,
          urlText,
          header,
          time,
          info,
          size: { childClass: sizeChildClass, classSize: sizeClassSize },
          age: { years: ageYears, yearsAge: ageYearsAge },
        } = item;
        return (
          <div className='each-class' key={id}>
            <div className='classimage'>
              <img src={img} alt='classes-image' />
            </div>
            <div className='info-div'>
              <Link to={url} className='eachclass-url'>
                {urlText}
              </Link>
              <h4>
                <Link>{header}</Link>
              </h4>
              <p>{time}</p>
              <p>{info}</p>
              <div className='size-age'>
                <p>
                  {sizeChildClass} <span>{sizeClassSize}</span>
                </p>
                <div className='vertical-box'></div>
                <p>
                  {ageYears} <span>{ageYearsAge}</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

ClassesDetail.propTypes = {
  classes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      urlText: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
      size: PropTypes.shape({
        childClass: PropTypes.string.isRequired,
        classSize: PropTypes.string.isRequired,
      }).isRequired,
      age: PropTypes.shape({
        years: PropTypes.string.isRequired,
        yearsAge: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default ClassesDetail;
