import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faBorderNone } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as memberActions from '../../store/modules/member';
import './MemberCard.scss';

class MemberCard extends Component {

  componentDidMount() {
    const { MemberActions } = this.props;
    MemberActions.find();
  };

  render() {

    const { list } = this.props;
    const money_on_list = list.filter(value => {
      return value.deposit === true;
    });
    const money_off_list = list.filter(value => {
      return value.deposit === false;
    });

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
                  <div key={value._id} className="card-inner">
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
            </div>
            <div className="card-body card-off">
              {money_off_list.map((value, index) => {
                return (
                  <div key={value._id} className="card-inner">
                    <div className="card-box">
                      <span className="number">{index + 1}</span>
                      <span className="nickname">{value.nickname}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
};

const mapStateToProps = state => {
  return {
    list: state.member.list,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    MemberActions: bindActionCreators(memberActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberCard);