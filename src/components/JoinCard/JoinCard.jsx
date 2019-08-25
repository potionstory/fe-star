import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faGrinStars, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import './JoinCard.scss';

class JoinCard extends Component {

  state = {
    item : [
      {
        name: '카톡방 대화명',
        focus: false,
      },
      {
        name: '이름',
        focus: false,
      },
      {
        name: '전화번호',
        focus: false,
      },
      {
        name: '메일주소',
        focus: false,
      }
    ]
  };

  handleFocus = (index) => {
    const { item } = this.state;
    this.setState({
      item: [
        ...item.slice(0, index),
        {
          name: item[index].name,
          focus: !item[index].focus
        },
        ...item.slice(index + 1, item.length)
      ]
    });
  };

  render() {

    const { item } = this.state;
    const { handleFocus } = this;
    
    return (
      <>
        <div className="join-wrap">
          <div className="join-card">
            {item.map((value, index) => {
              return (
                <div key={value.name + index} className={value.focus ? "join-item active" : "join-item"}>
                  <span className="title">{value.name}</span>
                  <div className="item-box">
                    <label htmlFor="01"><FontAwesomeIcon icon={faUserCircle} size="2x" /></label>
                    <input type="text" id="01" name="nickname" placeholder="" onFocus={() => handleFocus(index)} onBlur={() => handleFocus(index)} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </>
    );
  };
}

export default JoinCard;