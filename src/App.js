import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar>
          <span>Home</span>
          <span>Discord</span>
          <span>Twitch</span>
          <Button>Download</Button>
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
                <p>TESTING CHRIS DEV ENVIRONMENT</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
