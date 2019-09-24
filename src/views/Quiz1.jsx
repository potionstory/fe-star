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
            <li>쇠귀에 경 읽기</li>
            <li>미운 놈 떡 하나 더 준다</li>
            <li>꼬리가 길면 밟힌다</li>
            <li>마늘 하늘에 날벼락</li>
            <li>고래 싸움에 새우 등 터진다</li>
            <li>개구리</li>
            <li>악어</li>
            <li>코알라</li>
            <li>박쥐</li>
            <li>표범</li>
          </ul>
          {count !== 9 ? <button type="button" onClick={handleCount}>다음</button> : <Link to="/quiz">종료</Link>}
        </div>
      </Layout>
    );
  };
}

export default About;
