// import Logo from "../assets/logo.jpg";
import { Link, NavLink } from "react-router-dom";

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
            <NavLink to='/Register' className='navbar-link'>
              Register
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink to='/Classes' className='navbar-link'>
              Classes
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink to='/Contact' className='navbar-link active'>
              Contact Us
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink to='/About' className='navbar-link'>
              About Us
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink to='/Faq' className='navbar-link'>
              FAQ
            </NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink to='/Blog' className='navbar-link'>
              Blog
            </NavLink>
          </li>
        </ul>
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
