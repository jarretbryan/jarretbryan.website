import React, { Component } from 'react';
import Typed from 'react-typed';
import Social from './social';
// import Typed from 'typed.js';

class Header extends Component {

  state = {
    adjectives: ['a full-stack web developer', 'a technologist', 'an afrofuturist', 'subscribed to too many podcasts']
  }

  funText = () => {
    return (
      <Typed
        loop={true}
        typeSpeed={90}
        backSpeed={30}
        strings={this.state.adjectives}
        smartBackspace
        shuffle={false}
        backDelay={1000}
        showCursor
        cursorChar="|"
      />
    )

  }

  render() {
    return (
      <article className="vh-75 dt w-100 bg-near-black">
        <div className="dtc v-mid tc white ph3 ph4-l">
          <h1 className="code f2 f1-l fw2 mb0 lh-title "><span className = "gold">// 🐝 </span>Jarret Bryan is <br/> {this.funText()}.</h1> 
          <Social />
          <p className="code">Hi, my name is <span className="gold">jarret</span>. I'm a NYC based full-stack webdeveloper and technologist. I graduated from Brown University in 2014 with a degree in Science & Technology Studies.</p>
        </div>
      </article>
    );
  }
}

export default Header;
