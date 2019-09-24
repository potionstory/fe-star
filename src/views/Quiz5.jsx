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
            <li>소 잃고 외양간 고친다</li>
            <li>배보다 배꼽이 더 크다</li>
            <li>바늘 도둑이 소 도둑 된다</li>
            <li>콩 심은 데 콩 나고 팥 심은 데 팥 난다</li>
            <li>오르지 못할 나무는 쳐다보지도 말아라</li>
            <li>수달</li>
            <li>캥거루</li>
            <li>독수리</li>
            <li>낙타</li>
            <li>사마귀</li>
          </ul>
          {count !== 9 ? <button type="button" onClick={handleCount}>다음</button> : <Link to="/quiz">종료</Link>}
        </div>
      </Layout>
    );
  };
}

export default About;
