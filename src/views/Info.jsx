import React, { Component } from 'react';
import Layout from './Layout';
import InfoCard from '../components/InfoCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import HeadImg from '../images/common/bg_headline_confetti.png';

class Info extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  };

  render() {

    return (
      <Layout>
        <section className="section-info">
          <div className="headline">
            <div className="headline-image">
              <img src={HeadImg} />
              <FontAwesomeIcon icon={faStar} size="8x" />
            </div>
            <h2><span className="font-gradient">FE-STAR는<br />언제?<br />어디서?<br />어떻게?</span></h2>
            <p><span className="font-gradient">일시/장소/일정을<br />한번에 확인해보자</span></p>
          </div>
          <article className="contents">
            <div className="info-card">
              <InfoCard />
            </div>
          </article>
        </section>
      </Layout>
    );
  };
}

export default Info;
