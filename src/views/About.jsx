import React, { Component } from 'react';
import Layout from './Layout';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import HeadImg from '../images/common/bg_headline_confetti.png';

class About extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <Layout>
        <section className="section_about">
          <div className="headline">
            <div className="headline-image">
              <img src={HeadImg} />
              <FontAwesomeIcon icon={faCompass} size="8x" />
            </div>
            <h2><span className="font-gradient">FE의<br />FE에 의한<br />FE를 위한<br />FE-STAR</span></h2>
            <p><span className="font-gradient">사람과 사람사이를<br />이어주는 축제의 장</span></p>
          </div>
          <article className="contents">
            <p>가나다라마바사아자차카타파하<br />ABCEDFGHIJKLMNOPQRSTUVWXYZ<br />0123456789</p>
          </article>
        </section>
      </Layout>
    );
  };
}

export default About;
