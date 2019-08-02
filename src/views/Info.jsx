import React, { Component } from 'react';
import Layout from './Layout';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import HeadImg from '../images/common/bg_headline_confetti.png';

class Info extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <Layout>
        <section className="section_info">
          <div className="headline">
            <div className="headline-image">
              <img src={HeadImg} />
              <FontAwesomeIcon icon={faInfoCircle} size="8x" />
            </div>
            <h2><span className="font-gradient">FE-STAR는<br />언제?<br />어디서?<br />어떻게?</span></h2>
            <p><span className="font-gradient">일시/장소/일정을<br />한번에 확인해보자</span></p>
          </div>
          <article className="contents">
            <p>가나다라마바사아자차카타파하<br />ABCEDFGHIJKLMNOPQRSTUVWXYZ<br />0123456789</p>
          </article>
        </section>
      </Layout>
    );
  };
}

export default Info;
