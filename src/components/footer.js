import React, { Component } from 'react';
import Social from './social';
// import Typed from 'typed.js';

class Footer extends Component {

  render() {
    return (
        <footer className="pv4 ph3 ph5-m ph6-l bg-near-black white code">
            <Social />
            <small className="f6 db tc">  {(new Date().getFullYear())} &copy; Jarret Bryan <br /> <span className="gold">// 🐝 </span> Code + Design by Jarret Bryan</small>
            <div className="tc mt3 code">
                <small>This site was built using <a href="https://gatsbyjs.org" className="link dim gold">Gatsby</a> & <a href="http://tachyons.io/" className="link dim gold">Tachyons</a>. It is hosted p2p with <a href="https://datproject.org/" className="link dim gold">Dat</a> and <a href="https://hashbase.io/" className="link dim gold">#_hashbase</a>.</small>
            </div>
        </footer>
    );
  }
}

export default Footer;
