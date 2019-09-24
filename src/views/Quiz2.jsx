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
            <li>금강산도 식후경</li>
            <li>개구리 올챙이 적 생각 못한다</li>
            <li>떡 줄 놈은 생각도 않는데 김칫국부터 마신다</li>
            <li>백지장도 맞들면 낫다</li>
            <li>등잔 밑이 어둡다</li>
            <li>오리</li>
            <li>비둘기</li>
            <li>사자</li>
            <li>여우</li>
            <li>쇠똥구리</li>
          </ul>
          {count !== 9 ? <button type="button" onClick={handleCount}>다음</button> : <Link to="/quiz">종료</Link>}
        </div>
      </Layout>
    );
  };
}

export default About;
