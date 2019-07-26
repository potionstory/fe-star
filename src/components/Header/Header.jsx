import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <h1 onMouseOver={() => handleMenuActive(0)}><Link to="/"><Logo /></Link></h1>
        <nav className={`active${index}`} onMouseOut={() => handleMenuActive(0)}>
          <span className="bg-active__bar">
            <span className="menu-gradient"></span>
          </span>
          <ul>
            {menuName.map((value, index) => (
              <li key={index} className={`menu${index}`} onMouseOver={() => handleMenuActive(index + 1)}><Link to="/">{value}</Link></li>
            ))}
          </ul>
        </nav>
      </header>
    );
  };
}

export default Header;