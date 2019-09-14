import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk, faPen } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as memberActions from '../../store/modules/member';
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

  handleJoin = async () => {
    const value = this.state.item.map(v => {
      return v.value;
    });
    const { MemberActions } = this.props;
    const data = {
      name: value[1],
      nickname: value[0],
      mobile: value[2],
      email: value[3]
    };
    await MemberActions.create(data);
    const reset = this.state.item.map(v => {
      return {
        ...v,
        value: ''
      }
    });
    this.setState({
      item: reset
    });
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
            <div className="card-head">
              <FontAwesomeIcon icon={faAsterisk} size="2x" />
              <h3>주의사항</h3>
            </div>
            <div className="card-body">
              <ul>
                <li>FE-STAR는 최대 40명까지만 모집합니다.</li>
                <li>FE-STAR는 선금(1만원)을 받고서 진행하며, 선금을 먼저 입금한 인원부터 등록됩니다.</li>
                <li>FE-STAR의 참석은 언제든지 취소할 수 있으며, 시작일시로부터 3일전까지만 환불해드립니다.</li>
                <li>위 모임의 예상 회비는 약 3만원입니다.</li>
                <li>개인적인 상품 및 선물등은 협찬 가능하며, 이벤트를 진행하고 싶다면 스텝들에게 미리 알려주시기 바랍니다.</li>
                <li>참가하기 버튼을 누르면 정모톡방의 주소가 메일로 전달되며, 정모톡방에 입장시 프론트개발자방의 대화명과 일치시켜 주시기 바랍니다.</li>
                <li>정모톡방에 입장하면 공지사항의 설문조사를 먼저 진행해주시기 바랍니다.</li>
                <li>정모톡방에 입장해도 입금자가 40명이 되면 정모참석이 어렵습니다.</li>
              </ul>
            </div>
          </div>
          <div className="join-card">
            <div className="card-head">
              <FontAwesomeIcon icon={faPen} size="2x" />
              <h3>참가신청서</h3>
            </div>
            <div className="card-body">
              {item.map((value, index) => {
                return (
                  <div key={value.name + index} className={value.focus ? "join-item active" : "join-item"}>
                    <label htmlFor={value.name + index} className="title">{value.title}</label>
                    <div className="item-box">
                      <input
                        type={value.name !== "mobile" ? "text" : "number"}
                        id={value.name + index}
                        className={value.name === "mobile" ? "number" : null}
                        name={value.name}
                        value={value.value}
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
          </div>
          <div className="join-submit">
            <button type="button" className={active === item.length ? "active" : null} onClick={handleJoin}>참가하기</button>
          </div>
        </div>
      </>
    );
  };
}

const mapDispatchToProps = dispatch => {
  return {
    MemberActions: bindActionCreators(memberActions, dispatch)
  }
};

export default connect(null, mapDispatchToProps)(JoinCard);