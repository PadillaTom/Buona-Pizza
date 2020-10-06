import React from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { BsBagFill } from 'react-icons/bs';
import { FcSearch } from 'react-icons/fc';
const Navbar = () => {
  return (
    <nav className='mobile-navbar'>
      {/* Mobile */}
      <div className='dd-btn'>
        <IoIosArrowDropdownCircle></IoIosArrowDropdownCircle>
      </div>
      <div className='mobile-searchbox'>
        <input type='text' className='search-box' />
        <FcSearch className='searchbox-icon'></FcSearch>
      </div>
      <div className='mobile-bag'>
        <BsBagFill></BsBagFill>
      </div>
    </nav>
  );
};

export default Navbar;
