import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faBorderNone, faLock } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as memberActions from '../../store/modules/member';
import './MemberCard.scss';

class MemberCard extends Component {

  state = {
    id: '',
    password: '',
    admin: false,
    login: false
  };

  componentDidMount() {
    const { MemberActions } = this.props;
    MemberActions.find();
  };

  handleMember = async (id) => {
    const { MemberActions } = this.props;
    await MemberActions.update(id, { "deposit": true, "depositDate": new Date() });
    await MemberActions.find();
  };

  handleAdmin = () => {
    this.setState({
      admin: true
    });
  };

  handleLogin = () => {
    const { id, password } = this.state;
    if (id === 'potionstory' && password === 'tionnii7&') {
      this.setState({
        admin: false,
        login: true
      });
      alert("로그인 되었습니다.");
    } else {
      alert("로그인 할 수 없습니다.");
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {

    const { handleMember, handleAdmin, handleLogin, handleChange } = this;

    const { list } = this.props;
    const { id, password, admin, login } = this.state;
    const money_on_list = list.filter(value => {
      return value.deposit === true;
    });
    const money_off_list = list.filter(value => {
      return value.deposit === false;
    });

    const admin_box = () => {
      const { id, password } = this.state;
      return (
        <div className="admin-box">
          <input type="text" name="id" value={ id } onChange={(e) => handleChange(e)} />
          <input type="password" name="password" value={ password } onChange={(e) => handleChange(e)} />
        </div>
      );
    };

    return (
      <>
        <div className="member-wrap">
          <div className="member-card">
            <div className="card-head">
              <FontAwesomeIcon icon={faBorderAll} size="2x" />
              <h3>참가 확정</h3>
            </div>
            <div className="card-body">
              {money_on_list.map((value, index) => {
                return (
                  <div key={value.nickname + index} className="card-inner">
                    <div className="card-box">
                      <span className="number">{index + 1}</span>
                      <span className="nickname">{value.nickname}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="member-card">
            <div className="card-head">
              <FontAwesomeIcon icon={faBorderNone} size="2x" />
              <h3>참가 대기</h3>
              <FontAwesomeIcon icon={faLock} size="2x" className="admin-login" onClick={ admin ? handleLogin : handleAdmin } />
            </div>
            <div className="card-body card-off">
              {money_off_list.map((value, index) => {
                return (
                  <div key={value.nickname + index} className="card-inner">
                    <div className="card-box" onClick={ login ? () => handleMember(value._id) : null }>
                      <span className="number">{index + 1}</span>
                      <span className="nickname">{value.nickname}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          { admin && admin_box() }
        </div>
      </>
    );
  }
};

const mapStateToProps = state => {
  return {
    admin: state.member.admin,
    list: state.member.list,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    MemberActions: bindActionCreators(memberActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberCard);