import "./socials.css";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Socials = () => {
  const date = new Date().getFullYear();

  return (
    <section className='bottom-div'>
      <hr className='hr-line' />
      <div className='socials-container'>
        <p className='all-rights'>
          © Wealhy Homes Academy {date}. All rights reserved
        </p>
        <div className='socials'>
          <a href=''>
            <FaLinkedinIn className='socials-icon' />
          </a>
          <a href=''>
            <FaFacebook className='socials-icon' />
          </a>
          <a href=''>
            <FaInstagram className='socials-icon' />
          </a>
          <a href=''>
            <FaTwitter className='socials-icon' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Socials;
