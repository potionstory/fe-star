import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faInfoCircle, faGrinStars, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import Logo from './Logo';
import './Header.scss';

class Header extends Component {

  state = {
    menu: [{
      path: '/about',
      name: 'ABOUT',
      icon: faCompass
    },
    {
      path: '/info',
      name: 'INFO',
      icon: faInfoCircle
    },
    {
      path: '/member',
      name: 'MEMBER',
      icon: faGrinStars
    },
    {
      path: '/join',
      name: 'JOIN',
      icon: faPlayCircle
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
          <span className="box-tracker"></span>
          <ul>
            {menu.map((value, index) => (
              <li key={index} className={`menu${index + 1}`} onMouseOver={() => handleMenuActive(index + 1)} onFocus={() => handleMenuActive(index + 1)}>
                <Link to={value.path}>
                  <FontAwesomeIcon icon={value.icon} size="10x" />
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