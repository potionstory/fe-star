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
            <li>천리길도 한걸음부터</li>
            <li>티끌모아 태산</li>
            <li>가는말이 고와야 오는말이 곱다</li>
            <li>매도 먼저 맞는 놈이 낫다</li>
            <li>똥이 무서워 피하나 더러워 피하지</li>
            <li>나무늘보</li>
            <li>상어</li>
            <li>뱀</li>
            <li>코뿔소</li>
            <li>팬더</li>
          </ul>
          {count !== 9 ? <button type="button" onClick={handleCount}>다음</button> : <Link to="/quiz">종료</Link>}
        </div>
      </Layout>
    );
  };
}

export default About;
