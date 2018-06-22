import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import '../css/navbar.css';

import exokitLogo from '../images/ExokitLogo.png';

class TopNavbar extends Component {
  render() {
    return (
      <Navbar>
        <div className='row nav d-flex align-items-center'>
          <div className='nav-link flex-grow-1 d-flex align-items-center justify-content-start'>
            <img src={exokitLogo}/>
            <div>Exokit</div>
          </div>
          <a className='nav-link' href='#'>
            Home
          </a>
          <a className='nav-link' href='https://discord.gg/aQhHskF'>
            Discord
          </a>
          <a className='nav-link' href='https://www.twitch.tv/avaer/'>
            Twitch
          </a>
          <a className='nav-link' href='https://get.webmr.io/'>
            Download
          </a>
        </div>
      </Navbar>
    );
  }
}
export default TopNavbar;
