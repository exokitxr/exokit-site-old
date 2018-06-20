import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
            <div className='row nav justify-content-center' >
                <div className='col'>
                    <a href='#'>
                        <span id='homeNavItem' className='nav-link'>Home</span>
                    </a>
                </div>
                <div className='col'>
                    <a href='https://discord.gg/aQhHskF'>
                        <span id='discordNavItem' className='nav-link'>Discord</span>
                    </a>
                </div>
                <div className='col'>
                    <a href='https://www.twitch.tv/avaer/'>
                        <span id='twitchNavItem' className='nav-link'>Twitch</span>
                    </a>
                </div>
                <div className='col'>
                    <span id='downloadNavItem' className='nav-link'>Download</span>
                </div>
            </div>
        </Navbar>
        <Jumbotron>
          <h1>Hello Exokit!</h1>
          {/* hero video */}
        </Jumbotron>
        <div className='features'>
          <div>WebXR on all devices, even not XR</div>
          <div>Reality tabs</div>
          <div>Multiplayer</div>
        </div>
        <div className='multiplayer-servers'>
          <h3>List of parties currently playing</h3>
          <ul>
            <li>
              <ul className='apps-loaded'>
                <li>Painter</li>
                <li>Crafter</li>
                <li>Twitter</li>
              </ul>
              <div className='num-players'>2/8</div>
            </li>
          </ul>
        </div>
        <div className='apps'>
          <h3>Grid of clickable apps deployed to Exokit</h3>
          <ul>
            <li>
              <img className='screenshot'/>
              <div className='app-name'>My amazing app</div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
