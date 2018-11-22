import React, { Component } from 'react';
import Techstack from '../components/techstack';
import ProjectContainer from '../components/projectcontainer';
import Social from '../components/social'


import Layout from '../components/layout'
import Header from '../components/header';


class IndexPage extends Component {

  state = {
    displaying: 'about'
  }

  renderComp = () => {
    switch (this.state.displaying){
      case 'about':
        return (<Techstack/>);
      case 'social':
        return (<Social/>);
      case 'projects':
        return (<ProjectContainer />);
    }
  }

  setComp = (str) => {
    this.setState({
      displaying: str
    })
  }

  render() {
    return (
      <Layout className="bg-black">
        <Header handleHover={this.setComp}/>
        {this.renderComp()}
        {/* <ProjectContainer /> */}
      </Layout>
    );
  }
}

export default IndexPage;
