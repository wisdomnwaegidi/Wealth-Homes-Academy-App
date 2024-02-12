import Learn from "../assets/feat-icon-1.png";
import Parent from "../assets/feat-icon-2.png";
import Expert from "../assets/feat-icon-3.png";
import Music from "../assets/feat-icon-4.png";
import About from "../assets/about_1_.jpg";
import { Link } from "react-router-dom";

import "./welcome.css";

const Welcome = () => {
  return (
    <div className='welcome-cont'>
      <div className='wel'>
        <div className='welcome'>
          <h1>Welcome to Wealthy Homes Academy</h1>
          <p className='download'>
            Here is a list of what you can expect from us at Wealthy Homes
            Academy.
          </p>
        </div>
        <div className='activities'>
          <div className='wel-divs1'>
            <div className='img-div1'>
              <img src={Learn} alt='learn icon' className='img-wel' />
            </div>
            <div className='act'>
              <Link to='/'>Trust</Link>
              <div className='div1'></div>
              <p className='act-learn'>
                Trusting us will help foster Link positive and productive
                teaching environment that impacts your wards academically,
                spiritual, mentally and psychologically.
              </p>
            </div>
          </div>
          <div className='wel-divs2'>
            <div className='img-div2'>
              <img src={Parent} alt='learn icon' className='img-wel' />
            </div>
            <div className='pat-day'>
              <Link to=''>Integrity</Link>
              <div className='div2'></div>
              <p className='ptday'>
                We are known for practising uncomprosing adherence to strong
                moral and ethical principles.
              </p>
            </div>
          </div>
          <div className='wel-divs3'>
            <div className='img-div3'>
              <img src={Expert} alt='learn icon' className='img-wel' />
            </div>
            <div className='exp-tch'>
              <Link to=''>Transperency</Link>
              <div className='div3'></div>
              <p className='tch'>
                We operate in such Link way it is easy for you our parents to
                see actions performed in making your children world class.
              </p>
            </div>
          </div>
          <div className='wel-divs4'>
            <div className='img-div4'>
              <img src={Music} alt='learn icon' className='img-wel' />
            </div>
            <div className='mus-lsn'>
              <Link to=''>Collaboration</Link>
              <div className='div4'></div>
              <p className='music'>
                As Link team we collaborate to achieving Link common goal which
                is to give your wards the best education they can get.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='wel-imgvid'>
        <img src={About} alt='child-img' className='child-img' />
        {/* <Link href='../assets/class-details-video.mp4'></Link> */}
      </div>
    </div>
  );
};

export default Welcome;
