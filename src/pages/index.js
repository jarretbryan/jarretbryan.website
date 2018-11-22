import React, { Component } from 'react';
import Content from '../components/content';
import Layout from '../components/layout'
import Header from '../components/header';


class IndexPage extends Component {

  state = {
    displaying: 'about'
  }

  setComp = (str) => {
    this.setState({
      displaying: str
    })
  }

  render() {
    return (
      <Layout>
        <Header handleHover={this.setComp} />
        <Content textContent={this.state.displaying} />
      </Layout>
    );
  }
}

export default IndexPage;
