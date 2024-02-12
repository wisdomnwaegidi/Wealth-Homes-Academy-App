import PropTypes from "prop-types";
import "./buttons.css";

const Buttons = ({ filterButtons, allCategoriesBtn }) => {
  return (
    <div>
      {allCategoriesBtn.map((singleButton, index) => (
        <button
          type="button"
          onClick={() => filterButtons(singleButton)}
          style={{ color: "black" }}
          key={index}
          className="ctg-btns"
        >
          {singleButton}
        </button>
      ))}
    </div>
  );
};

Buttons.propTypes = {
  filterButtons: PropTypes.func.isRequired,
  allCategoriesBtn: PropTypes.array.isRequired,
};

export default Buttons;
