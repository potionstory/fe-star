import React, { Component } from 'react';
import MemberItem from '../components/MemberItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as memberActions from '../store/modules/member';

class Member extends Component {
  state = {
    name: '',
    nickname: '',
    password: '',
    mobile: ''
  };

  componentDidMount() {
    const { MemberActions } = this.props;
    MemberActions.find();
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({
      [name]: value
    });
  };

  handleCreate = async () => {
    const { name, nickname, password, mobile } = this.state;
    const { MemberActions } = this.props;
    const data = {
      name,
      nickname,
      password,
      mobile
    };
    await MemberActions.create(data);
    await MemberActions.find();
    this.setState({
      name: '',
      nickname: '',
      password: '',
      mobile: ''
    });
  };

  handleUpdate = async (id, data) => {
    const { MemberActions } = this.props;
    await MemberActions.update(id, data);
    await MemberActions.find();
  };

  handleRemove = async (id) => {
    const { MemberActions } = this.props;
    await MemberActions.remove(id);
    await MemberActions.find();
  };

  render() {
    const { name, nickname, password, mobile } = this.state;
    const { list } = this.props;
    const { handleChange, handleCreate, handleUpdate, handleRemove } = this;
    return (
      <>
        {list.map(member => (
          <MemberItem
            key={member._id}
            memberId={member._id}
            name={member.name}
            nickname={member.nickname}
            password={member.password}
            mobile={member.mobile}
            onUpdate={handleUpdate}
            onRemove={handleRemove}
          />
        ))}
        <div><label htmlFor="id_name">이름</label><input type="text" name="name" onChange={handleChange} id="id_name" value={name} /></div>
        <div><label htmlFor="id_nickname">닉네임</label><input type="text" name="nickname" onChange={handleChange} id="id_nickname" value={nickname} /></div>
        <div><label htmlFor="id_password">비밀번호</label><input type="password" name="password" onChange={handleChange} id="id_password" value={password} /></div>
        <div><label htmlFor="id_mobile">전화번호</label><input type="text" name="mobile" onChange={handleChange} id="id_mobile" value={mobile} /></div>
        <button type="button" onClick={handleCreate}>create</button>
      </>
    );
  };
}

const mapStateToProps = state => {
  return {
    list: state.member.list
  }
};

const mapDispatchToProps = dispatch => {
  return {
    MemberActions: bindActionCreators(memberActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Member);

