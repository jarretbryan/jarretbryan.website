import React, { Component } from 'react';
import Social from './social';
// import Typed from 'typed.js';

class Footer extends Component {

  render() {
    return (
   
        <footer class="pv4 ph3 ph5-m ph6-l bg-near-black white">
            <Social />
            <small class="f6 db tc">© 2016 <b class="ttu">SOME COMPANY Inc</b>., All Rights Reserved</small>
            <div class="tc mt3">
                <a href="/language/" title="Language" class="f6 dib ph2 link mid-gray dim">Language</a>
                <a href="/terms/" title="Terms" class="f6 dib ph2 link mid-gray dim">Terms of Use</a>
                <a href="/privacy/" title="Privacy" class="f6 dib ph2 link mid-gray dim">Privacy</a>
            </div>
        </footer>
    );
  }
}

export default Footer;
