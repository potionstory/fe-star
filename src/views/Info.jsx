import React, { Component } from 'react';
import Layout from './Layout';

class Info extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <Layout>
        <h2>INFO PAGE</h2>
        <article className="contents">
          <h3>INFO</h3>
          <p>가나다라마바사아자차카타파하<br />ABCEDFGHIJKLMNOPQRSTUVWXYZ<br />0123456789</p>
        </article>
      </Layout>
    );
  };
}

export default Info;
