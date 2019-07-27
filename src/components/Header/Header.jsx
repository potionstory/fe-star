import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faInfoCircle, faGrinStars, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import Logo from './Logo';
import './Header.scss';

class Header extends Component {

  state = {
    menu: [{
      name: 'ABOUT',
      icon: faCompass
    },
    {
      name: 'INFO',
      icon: faInfoCircle
    },
    {
      name: 'MEMBER',
      icon: faGrinStars
    },
    {
      name: 'FAQ',
      icon: faQuestionCircle
    }],
    index: 0
  };

  handleMenuActive = (index) => {
    this.setState({
      index
    });
  };

  render() {
    const { menu, index } = this.state;
    const { handleMenuActive } = this;

    return (
      <header className={`active${index}`}>
        <h1><Link to="/" onMouseOver={() => handleMenuActive(0)} onFocus={() => handleMenuActive(0)}><Logo /></Link></h1>
        <nav onMouseOut={() => handleMenuActive(0)} onBlur={() => handleMenuActive(0)}>
          <span className="bg-active__bar">
            <span className="menu-gradient"></span>
          </span>
          <ul>
            {menu.map((value, index) => (
              <li key={index} className={`menu${index}`} onMouseOver={() => handleMenuActive(index + 1)} onFocus={() => handleMenuActive(index + 1)}>
                <Link to="/">
                  <FontAwesomeIcon icon={value.icon} size="8x" />
                  <div>{value.name}</div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  };
}

export default Header;