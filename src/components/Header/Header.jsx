import React from 'react';
import Logo from './Logo';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <h1><a href="#none"><Logo /></a></h1>
    </header>
  );
};

export default Header;