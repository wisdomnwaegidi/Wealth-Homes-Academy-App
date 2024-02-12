import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./blogs.css";

const Blogs = ({ id, deptLogo, dept, dmy, img, headerInfo, info }) => {
  return (
    <div>
      <div className="blog-post">
        <div className="dept">
          <img src={deptLogo} alt="dept-logo" className="dept-logo" loading="lazy"/>
          <h4 className="dept-h4">{dept}</h4>
        </div>
        <div className="blog-detail">
          <img src={img} alt="blog-image" className="img-blog" />
          <div className="mainblog-detail">
            <h1>{headerInfo}</h1>
            <h4 className="dmy">Written by WealthHomeAcademy Admin | {dmy}</h4>
            <p className="info-p">{`${info.substring(0, 90)}...` }</p>
            <button type="button" className="read-more-btn">
              <Link to={`/Eachblogpost/${id}`} className="read-more">
                Read More
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Blogs.propTypes = {
  id: PropTypes.number.isRequired,
  deptLogo: PropTypes.string.isRequired,
  dept: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  headerInfo: PropTypes.string.isRequired,
  dmy: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};

export default Blogs;
