import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import '../css/navbar.css';

import exokitLogo from '../images/ExokitLogo.png';

class TopNavbar extends Component {
  render() {
    return (
      <Navbar>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href=" . ">
            <img src={exokitLogo} width="30"
                 height="30" className="d-inline-block align-top" alt=""/>
              <span className='brandName'>Exokit</span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav align-items-center">
              <a className="nav-item nav-link justify-content-center active" href="https://discord.gg/aQhHskF">Discord</a>
              <a className="nav-item nav-link justify-content-center active" href="https://www.twitch.tv/avaer">Twitch</a>
              <a className="nav-item nav-link justify-content-center active" href="https://github.com/webmixedreality/exokit">Github</a>
              <a className="nav-item nav-link justify-content-center active" href="https://get.webmr.io">Download</a>
            </div>
          </div>
        </nav>
      </Navbar>
    );
  }
}
export default TopNavbar;
