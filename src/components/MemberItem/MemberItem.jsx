import React, { Component } from 'react';

class MemberItem extends Component {
  state = {
    name: '',
    nickname: '',
    password: '',
    mobile: ''
  };

  componentDidMount() {
    const { memberId, name, nickname, password, mobile } = this.props;
    this.setState({
      name,
      nickname,
      password,
      mobile
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleUpdate = () => {
    const { memberId } = this.props;
    this.props.onUpdate(memberId, this.state);
  };

  handleRemove = () => {
    const { memberId } = this.props;
    this.props.onRemove(memberId);
  };

  render() {
    const { memberId, name, nickname, password, mobile } = this.state;
    const { handleChange, handleUpdate, handleRemove } = this;
    return (
      <div>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <input type="text" name="nickname" value={nickname} onChange={handleChange} />
        <input type="text" name="password" value={password} onChange={handleChange} />
        <input type="text" name="mobile" value={mobile} onChange={handleChange} />
        <button type="button" onClick={handleUpdate}>수정</button>
        <button type="button" onClick={handleRemove}>삭제</button>
      </div>
    );
  };
}

export default MemberItem;