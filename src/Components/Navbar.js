import React from 'react';
import { Link } from 'react-router-dom';
// Icons:
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { BsBagFill } from 'react-icons/bs';
import { FcSearch } from 'react-icons/fc';
// Context:
import { useStateValue } from '../Context/CartContext';

// Main:
const Navbar = () => {
  // Cart Context:
  const [{ basket }] = useStateValue();

  // Show DropDown:
  const [isOpen, setIsOpen] = React.useState(false);
  // Main:
  return (
    <React.Fragment>
      {/* Mobile */}
      <nav className='mobile-navbar'>
        <div className='dd-btn' onClick={() => setIsOpen(!isOpen)}>
          <IoIosArrowDropdownCircle></IoIosArrowDropdownCircle>
        </div>
        <div className='mobile-searchbox'>
          <input type='text' className='search-box' />
          <FcSearch className='searchbox-icon'></FcSearch>
        </div>
        <div className='mobile-bag'>
          <BsBagFill></BsBagFill>
          <p className='nav-amount-number'>{basket?.length}</p>
        </div>
      </nav>
      <div className={isOpen ? `dd-menu show-dd` : `dd-menu`}>
        <ul onClick={() => setIsOpen(!isOpen)}>
          <li>
            <Link to='/login' className='dd-single-item'>
              Login
            </Link>
          </li>
          <li className='dd-amount-container'>
            <Link to='/cart' className='dd-single-item'>
              Cart:
            </Link>
            <p className='dd-amount-number'>{basket?.length}</p>
          </li>
        </ul>
        <div className='dd-menu-division'></div>
        <ul onClick={() => setIsOpen(!isOpen)}>
          <li>
            <Link to='/' className='dd-single-item'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' className='dd-single-item'>
              About
            </Link>
          </li>
          <li>
            <Link to='/menu' className='dd-single-item'>
              Menu
            </Link>
          </li>
          <li>
            <Link to='/contact' className='dd-single-item'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      {/* End Mobile */}
    </React.Fragment>
  );
};

export default Navbar;
