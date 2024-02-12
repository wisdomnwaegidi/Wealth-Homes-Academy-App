import "./android.css";
import Appstore from "../assets/appstore.png";
import Playstore from "../assets/playstore.png";

/* import { FaGooglePlay } from "react-icons/fa";
import { SiApple } from "react-icons/si"; */
import Iphone from "../assets/iphone.png";

const Andriod = () => {
  return (
    <>
      <div className='dis-cont'>
        <div className='join'>
          <h1>Install our Mobile Apps to get more.</h1>
          <p className='dwn'>Download our Android and IOS App on Playstore and Apple store</p>
          <div className='icons'>
            <div className='icons-div'>
              <a href=''>
                <img src={Appstore} alt='appstore' />
              </a>
            </div>
            <div className='icons-div'>
              <a href=''>
                <img src={Playstore} alt='playstore' className='playstore' />
              </a>
            </div>
          </div>
        </div>
        <img src={Iphone} alt='phone' className='iphone' />
      </div>
    </>
  );
};

export default Andriod;
