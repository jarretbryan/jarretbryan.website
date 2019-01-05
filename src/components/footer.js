import React, { Component } from 'react';
import Social from './social';
// import Typed from 'typed.js';

class Footer extends Component {

  render() {
    return (
        <footer className="pv3 ph3 ph5-m ph6-l bg-black white code vh-25">
        <Social/>
            <small className="pv2 f6 db tc"> 2018 - {(new Date().getFullYear())} &copy; Jarret Bryan</small> 
            <small className="f6 db tc"><span className="gold">// 🐝 </span> Code + Design by Jarret Bryan</small>
        </footer>
    );
  }
}

export default Footer;
