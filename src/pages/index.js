import React, { Component } from 'react';
import Content from '../components/content';
import ProjectContainer from '../components/projectcontainer';
import Social from '../components/social'


import Layout from '../components/layout'
import Header from '../components/header';


class IndexPage extends Component {

  state = {
    displaying: 'about'
  }

  renderComp = () => {
    
    if (this.state.displaying === 'about' || this.state.displaying === 'contact' ) {
      return(<Content textContent={this.state.displaying}/>)
    } else {
      return(<ProjectContainer />)
    }
    // switch (this.state.displaying){
    //   case 'about':
    //     return (<Content/>);
    //   case 'social':
    //     return (<Social/>);
    //   case 'projects':
    //     return (<ProjectContainer />);
    // }
  }

  setComp = (str) => {
    this.setState({
      displaying: str
    })
  }

  render() {
    return (
      <Layout>
        <Header handleHover={this.setComp}/>
        {this.renderComp()}
        {/* <ProjectContainer /> */}
      </Layout>
    );
  }
}

export default IndexPage;
