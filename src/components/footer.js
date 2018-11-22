import React, { Component } from 'react';
import Social from './social';
// import Typed from 'typed.js';

class Footer extends Component {

  render() {
    return (
        <footer className="pv3 ph3 ph5-m ph6-l bg-black white code vh-25">
        <Social/>
            <small className="f6 db tc">  {(new Date().getFullYear())} &copy; Jarret Bryan <br /> <span className="gold">// 🐝 </span> Code + Design by Jarret Bryan</small>
        </footer>
    );
  }
}

export default Footer;
