import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faGrinStars, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import './JoinCard.scss';

class JoinCard extends Component {

  state = {
    item : [
      {
        title: '카톡방 대화명', 
        name: 'nickname',
        value: '',
        focus: false,
      },
      {
        title: '이름',
        name: 'name',
        value: '',
        focus: false,
      },
      {
        title: '전화번호 ( - 없이 입력해주세요)',
        name: 'mobile',
        value: '',
        focus: false,
      },
      {
        title: '메일주소',
        name: 'email',
        value: '',
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
          title: item[index].title,
          name: item[index].name,
          value: item[index].value,
          focus: !item[index].focus
        },
        ...item.slice(index + 1, item.length)
      ]
    });
  };

  handleChange = (index, e) => {
    const { item } = this.state;
    const { value } = e.target;
    this.setState({
      item: [
        ...item.slice(0, index),
        {
          ...item[index],
          value
        },
        ...item.slice(index + 1, item.length)
      ]
    });
  };

  handleJoin = () => {
    console.log('handleJoin');
  };

  render() {

    let active = 0;
    const { item } = this.state;
    const { handleFocus, handleChange, handleJoin } = this;
    
    item.map(n => {
      active += n.value ? 1 : 0;
    });

    return (
      <>
        <div className="join-wrap">
          <div className="join-card">
            {item.map((value, index) => {
              return (
                <div key={value.name + index} className={value.focus ? "join-item active" : "join-item"}>
                  <span className="title">{value.title}</span>
                  <div className="item-box">
                    <label htmlFor={value.name + index}><FontAwesomeIcon icon={faUserCircle} size="2x" /></label>
                    <input
                      type={value.name !== "mobile" ? "text" : "number"}
                      id={value.name + index}
                      className={value.name === "mobile" ? "number" : null}
                      name={value.name}
                      placeholder=""
                      onFocus={() => handleFocus(index)}
                      onBlur={() => handleFocus(index)}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </div>
                </div>
              )
            })}
          </div>
          <div className="join-submit">
            <button type="button" className={active === item.length ? "active" : null}onClick={handleJoin}>참가하기</button>
          </div>
        </div>
      </>
    );
  };
}

export default JoinCard;