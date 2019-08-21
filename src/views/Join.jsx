import React, { Component } from 'react';
import Layout from './Layout';
import JoinCard from '../components/JoinCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
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
              <FontAwesomeIcon icon={faStar} size="8x" />
            </div>
            <h2><span className="font-gradient">당신이 바로<br />FE-STAR의<br />주인공입니다</span></h2>
            <p><span className="font-gradient">지금 바로<br />신청하세요</span></p>
          </div>
          <article className="contents">
            <JoinCard />
          </article>
        </section>
      </Layout>
    );
  };
}

export default Join;
