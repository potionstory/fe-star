import React from 'react';
import Logo from './Logo';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <h1><a href="#none"><Logo /></a></h1>
      <nav>
        <ul>
          <li><a href="#none">ABOUT</a></li>
          <li><a href="#none">INFO</a></li>
          <li><a href="#none">MEMBER</a></li>
          <li><a href="#none">FAQ</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;