import React, { Component } from 'react';
import Layout from './Layout';
import MemberCard from '../components/MemberCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import HeadImg from '../images/common/bg_headline_confetti.png';

class Member extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  };
  
  render() {
    return (
      <Layout>
        <section className="section-member">
          <div className="headline">
            <div className="headline-image">
              <img src={HeadImg} />
              <FontAwesomeIcon icon={faStar} size="8x" />
            </div>
            <h2><span className="font-gradient">FE-STAR의<br />주인공들을<br />소개합니다</span></h2>
            <p><span className="font-gradient">아래에서 참가자들을<br />만나보세요</span></p>
          </div>
          <article className="contents">
            <MemberCard />
          </article>
        </section>
      </Layout>
    );
  };
}

export default Member;
