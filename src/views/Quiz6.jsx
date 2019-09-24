import React, { Component } from 'react';
import Layout from './Layout';
import { Link } from 'react-router-dom';
import '../style/quiz.scss';

class About extends Component {

  state = {
    count: 0
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  };

  handleCount = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1
    });
  };

  render() {

    const { count } = this.state;
    const { handleCount } = this;

    return (
      <Layout>
        <div className="quiz-cont">
          <ul className={"quiz" + count}>
            <li>믿는 도끼에 발등 찍힌다</li>
            <li>땅 짚고 헤엄치기</li>
            <li>돌다리도 두드려보고 건넌다</li>
            <li>호랑이도 제 말 하면 온다</li>
            <li>하늘이 무너져도 솟아날 구멍이 있다</li>
            <li>돼지</li>
            <li>토끼</li>
            <li>양</li>
            <li>염소</li>
            <li>사슴</li>
          </ul>
          {count !== 9 ? <button type="button" onClick={handleCount}>다음</button> : <Link to="/quiz">종료</Link>}
        </div>
      </Layout>
    );
  };
}

export default About;
