import React, { Component } from 'react';
import Layout from './Layout';
import { Link } from 'react-router-dom';
import '../style/quiz.scss';

class About extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <Layout>
        <div className="quiz-menu">
          <ul>
            <li><Link to="/quiz/1" className="number">1</Link></li>
            <li><Link to="/quiz/2" className="number">2</Link></li>
            <li><Link to="/quiz/3" className="number">3</Link></li>
            <li><Link to="/quiz/4" className="number">4</Link></li>
            <li><Link to="/quiz/5" className="number">5</Link></li>
            <li><Link to="/quiz/6" className="number">6</Link></li>
            <li><Link to="/quiz/7" className="number">7</Link></li>
            <li><Link to="/quiz/8" className="number">8</Link></li>
          </ul>
        </div>
      </Layout>
    );
  };
}

export default About;
