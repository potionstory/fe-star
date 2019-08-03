import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faInfoCircle, faGrinStars, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import Logo from './Logo';
import './Header.scss';

class Header extends Component {

  state = {
    index: 0,
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
  };

  handleMenuActive = (index) => {
    this.setState({
      index
    });
  };

  render() {
    const { index, menu } = this.state;
    const { handleMenuActive } = this;

    return (
      <header className={`active${index}`}>
        <h1 onClick={() => handleMenuActive(0)}><Link to="/"><Logo /></Link></h1>
        <nav>
          <span className="box-tracker"></span>
          <ul>
            {menu.map((value, index) => (
              <li key={index}
                className={`menu${index + 1}`}
                onClick={() => handleMenuActive(index + 1)}
                >
                <Link to={value.path}>
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