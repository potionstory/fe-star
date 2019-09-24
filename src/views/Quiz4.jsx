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
            <li>원숭이도 나무에서 떨어진다</li>
            <li>원수는 외나무 다리에서 만난다</li>
            <li>열 번 찍어 아니 넘어가는 나무 없다</li>
            <li>아니 땐 굴뚝에 연기 나랴</li>
            <li>사공이 많으면 배가 산으로 올라간다</li>
            <li>거북이</li>
            <li>하마</li>
            <li>고슴도치</li>
            <li>곰</li>
            <li>돌고래</li>
          </ul>
          {count !== 9 ? <button type="button" onClick={handleCount}>다음</button> : <Link to="/quiz">종료</Link>}
        </div>
      </Layout>
    );
  };
}

export default About;
