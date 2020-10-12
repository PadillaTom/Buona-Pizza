import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className='header'>
      <div className='logo-container'>
        <Link to='/'>
          <h1> Buona Pizza !</h1>
        </Link>
      </div>
       </header>
  );
};

export default Header;
