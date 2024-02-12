/* eslint-disable no-unused-vars */
import "./studentclasses.css";
import { useState, useEffect } from "react";
import ClassesDetail from "./ClassesDetail";
import Buttons from "./Buttons";
import classesDetails from "../schoolData/classesDetails";

const allButtons = [
  ...new Set(classesDetails.map((eachClass) => eachClass.category)),
];

const StudentClasses = () => {
  const [classes, setClasses] = useState(classesDetails);
  const [allCategoriesBtn, setAllCategoriesBtn] = useState({
    allButtons: allButtons,
  });

  console.log(allCategoriesBtn.allButtons);
  
  const [displayCount, setDisplayCount] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState("See All");

  const filterButtons = (category) => {
    if (category === selectedCategory) {
      setClasses(classesDetails);
      return;
    }
    const newData = classesDetails.filter((item) => item.category === category);
    setClasses(newData);
  };

  const handleSeeMore = () => {
    setDisplayCount((prevCount) => prevCount + 3);
  };

  // useEffect(() => {
  //   // Set initial display on mount
  //   setClasses(classesDetails.slice(0, displayCount));
  // }, [selectedCategory, displayCount]);

  return (
    <>
      <div className="container">
        <div>
          <h1 className="classes-popular">Our Popular Classes</h1>
          <p className="classes-p">
            Here is a section of classes in our great citadel of learning. This
            is where we <br /> take your wards on destination wow!
          </p>
        </div>
        <Buttons
          allCategoriesBtn={allCategoriesBtn.allButtons}
          filterButtons={filterButtons}
          id={allCategoriesBtn.id}
        />
        <div className="grid-classes">
          <ClassesDetail classes={classes} />
        </div>
        {/* {selectedCategory &&
          classes.slice(0, displayCount).map((clas) => {
            return <ClassesDetail key={clas.id} classes={classes} />;
          })} */}
        {selectedCategory
          ? displayCount < classes.length && (
              <div className="more-div">
                <button className="see-more" onClick={() => handleSeeMore()}>
                  See More Classes
                </button>
              </div>
            )
          : null}
      </div>
    </>
  );
};

export default StudentClasses;
