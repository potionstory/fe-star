import React, { Component } from 'react';
import Layout from './Layout';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import HeadImg from '../images/common/bg_headline_confetti.png';

class Join extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <Layout>
        <section className="section-join">
          <div className="headline">
            <div className="headline-image">
              <img src={HeadImg} />
              <FontAwesomeIcon icon={faPlayCircle} size="8x" />
            </div>
            <h2><span className="font-gradient">당신이 바로<br />FE-STAR의<br />주인공입니다</span></h2>
            <p><span className="font-gradient">지금 바로<br />신청하세요</span></p>
          </div>
          <article className="contents">
            <p>가나다라마바사아자차카타파하<br />ABCEDFGHIJKLMNOPQRSTUVWXYZ<br />0123456789</p>
          </article>
        </section>
      </Layout>
    );
  };
}

export default Join;
