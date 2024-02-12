// import Logo from "../assets/logo.jpg";
import { Link, NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

// custom styles
import "./Navbar.css";

const Navbar = () => {
  // const [menu, setMenu] = (false);

  return (
    <header className='navbar-container'>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          Wealthy Homes Academy
        </Link>
        <ul className='navbar-menu'>
          <li className='navbar-item'>
            <NavLink to='/Register'>Register</NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink to='/StudentClasses'>Classes</NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink to='/Contact'>Contact Us</NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink to='/About'>About Us</NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink to='/Faq'>FAQ</NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink to='/Blogposts'>Blog & Articles</NavLink>
          </li>
        </ul>
        <div className='socials-nav'>
          <a href=''>
            <FaLinkedinIn className='socials-navicon' />
          </a>
          <a href=''>
            <FaFacebook className='socials-navicon' />
          </a>
          <a href=''>
            <FaInstagram className='socials-navicon' />
          </a>
          <a href=''>
            <FaTwitter className='socials-navicon' />
          </a>
        </div>
      </nav>
      <div className='hamburger'>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>
    </header>
  );
};

export default Navbar;
