import React, { Component } from 'react';
import Social from './social';
// import Typed from 'typed.js';

class Footer extends Component {

  render() {
    return (
        <footer className="pv4 ph3 ph5-m ph6-l bg-near-black white code">
            <Social />
            <small className="f6 db tc">© 2016 <b className="ttu">Jarret Bryan</b>, Code + Design by Jarret Bryan</small>
            <div className="tc mt3 code">
                <small>This site was built using Gatsby & Tachyons. It is hosted p2p with Dat and #_hashbase.</small>
            </div>
        </footer>
    );
  }
}

export default Footer;
