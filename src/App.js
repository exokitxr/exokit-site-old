import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import './css/App.css';
import TopNavbar from './components/navbar';
import AppGrid from './components/appGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavbar/>
        <Jumbotron>
            <h1 className="display-4">Exokit</h1>
            <p className='lead'>The fastest and most portable VR/AR toolbox for developers.</p>
        </Jumbotron>
          <AppGrid/>
          <br/>
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
