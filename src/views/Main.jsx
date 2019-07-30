import React, { Component } from 'react';
import Layout from './Layout';
// import HeadImg from '../images/main/img_main_head.png';

class Main extends Component {

  componentDidMount() {
    // console.log(HeadImg);
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <Layout>
        <section className="section_main">
          <div className="headline">
            <div className="headline-image"><img src='../images/main/img_main_head.png' /></div>
            <h2><span className="font-gradient">FE-star?<br />FE-star!</span></h2>
            <p><span className="font-gradient">사람과 사람사이를<br />연결시켜 주는것</span></p>
          </div>
          <article className="contents">
            <h3>MAIN</h3>
            <p>가나다라마바사아자차카타파하<br />ABCEDFGHIJKLMNOPQRSTUVWXYZ<br />0123456789</p>
          </article>
        </section>
      </Layout>
    );
  };
}

export default Main;
