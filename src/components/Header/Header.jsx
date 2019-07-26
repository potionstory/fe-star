import React, { Component } from 'react';
import Logo from './Logo';
import './Header.scss';

class Header extends Component {

  state = {
    menuName: [
      'ABOUT',
      'INFO',
      'MEMBER',
      'FAQ'
    ],
    index: 0
  };

  handleMenuActive = (index) => {
    this.setState({
      index
    });
  };

  render() {
    const { menuName, index } = this.state;
    const { handleMenuActive } = this;

    return (
      <header>
        <h1 onMouseOver={() => handleMenuActive(0)}><a href="#none"><Logo /></a></h1>
        <nav className={`active${index}`} onMouseOut={() => handleMenuActive(0)}>
          <span className="bg-active__bar">
            <span className="menu-gradient"></span>
          </span>
          <ul>
            {menuName.map((value, index) => (
              <li key={index} onMouseOver={() => handleMenuActive(index + 1)}><a href="#none">{value}</a></li>
            ))};
          </ul>
        </nav>
      </header>
    );
  };
}

export default Header;