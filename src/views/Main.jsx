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
            <p><span className="font-gradient">더 지니어스<br />15:00 - 20:00</span></p>
          </div>
        </section>
      </Layout>
    );
  };
}

export default Main;
