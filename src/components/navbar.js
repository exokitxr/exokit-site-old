import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import '../css/navbar.css';

import exokitLogo from '../images/ExokitLogo.png';

class TopNavbar extends Component {
  render() {
    return (
      <Navbar>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src={exokitLogo} width="30"
                 height="30" className="d-inline-block align-top" alt=""/>
              <span className='brandName'>Exokit</span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">Home<span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="https://discord.gg/aQhHskF">Discord</a>
              <a className="nav-item nav-link" href="https://www.twitch.tv/avaer">Twitch</a>
              <a className="nav-item nav-link" href="https://get.webmr.io">Download</a>
            </div>
          </div>
        </nav>

      </Navbar>



    );
  }
}
export default TopNavbar;
