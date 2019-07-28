import React, { Component } from 'react';
import Layout from './Layout';

class Member extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  };
  
  render() {
    return (
      <Layout>
        <h2>MEMBER PAGE</h2>
        <article className="contents">
          <h3>MEMBER</h3>
          <p>가나다라마바사아자차카타파하<br />ABCEDFGHIJKLMNOPQRSTUVWXYZ<br />0123456789</p>
        </article>
      </Layout>
    );
  };
}

export default Member;
