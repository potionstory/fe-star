import React, { Component } from 'react';
import Layout from './Layout';
import HeadImg from '../images/main/img_main_head.png';

class Main extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <Layout>
        <section className="section_main">
          <div className="headline">
            <div className="headline-image"><img src={HeadImg} /></div>
            <h2><span className="font-gradient">FE-STAR<br />2019</span></h2>
            <p><span className="font-gradient">2019.10.05<br />서울 파티룸명</span></p>
          </div>
        </section>
      </Layout>
    );
  };
}

export default Main;
