import "./bottom.css";
import { FaPhone, FaEnvelope, FaHome } from "react-icons/fa";

const Bottom = () => {
  return (
    <div className='discover'>
      <div className='call-us'>
        <FaPhone className='phone-icon' style={{ color: "white" }} />
        <div className='phone-call'>
          <p className='call'>Give us a Call</p>
          <a href='tel:+2348035388627' className='number'>
            +234-803-538-8627
          </a>
        </div>
      </div>
      <div className='line'></div>
      <div className='send-msg'>
        <FaEnvelope className='envelope-icon' style={{ color: "white" }} />
        <div className='msg-us'>
          <p className='msg'>Send us a message</p>
          <a
            href='wealthyhomesacademy@gmail.com'
            className='email'
            target='_blank'
          >
            wealthyhomesacademy@gmail.com
          </a>
        </div>
      </div>
      <div className='line'></div>
      <div className='visit'>
        <FaHome style={{ color: "white" }} className='home-icon' />
        <div className='see-us'>
          <p className='location'>Visit our location</p>
          <a href='#' className='sch-address'>
            #39 Ojo Barracks Street Lagos Mainland
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
