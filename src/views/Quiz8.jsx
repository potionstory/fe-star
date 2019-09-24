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
            <li>가재는 게 편이다</li>
            <li>벼는 익을수록 고개를 숙인다</li>
            <li>쥐구멍에도 볕들 날이 있다</li>
            <li>비 온 뒤에 땅이 굳어진다</li>
            <li>빈 수레가 요란하다</li>
            <li>물개</li>
            <li>원숭이</li>
            <li>도마뱀</li>
            <li>침팬지</li>
            <li>부엉이</li>
          </ul>
          {count !== 9 ? <button type="button" onClick={handleCount}>다음</button> : <Link to="/quiz">종료</Link>}
        </div>
      </Layout>
    );
  };
}

export default About;
