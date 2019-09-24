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
            <li>칼로 물 베기</li>
            <li>지렁이도 밟으면 꿈틀한다</li>
            <li>작은 고추가 더 맵다</li>
            <li>세 살 버릇 여든까지 간다</li>
            <li>병 주고 약 준다</li>
            <li>닭</li>
            <li>고래</li>
            <li>미어캣</li>
            <li>호랑이</li>
            <li>개미핥기</li>
          </ul>
          {count !== 9 ? <button type="button" onClick={handleCount}>다음</button> : <Link to="/quiz">종료</Link>}
        </div>
      </Layout>
    );
  };
}

export default About;
