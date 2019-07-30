import React, { Component } from 'react';
import Layout from './Layout';
import HeadImg from '../images/main/img_main_head.png';

class Member extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  };
  
  render() {
    return (
      <Layout>
        <section className="section_member">
          <div className="headline">
            <div className="headline-image"><img src={HeadImg} /></div>
            <h2><span className="font-gradient">FE-STAR의<br />주인공들을<br />소개합니다</span></h2>
            <p><span className="font-gradient">아래에서 참석자들을<br />확인해 보세요</span></p>
          </div>
          <article className="contents">
            <p>가나다라마바사아자차카타파하<br />ABCEDFGHIJKLMNOPQRSTUVWXYZ<br />0123456789</p>
          </article>
        </section>
      </Layout>
    );
  };
}

export default Member;
