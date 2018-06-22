import React, { Component } from 'react';
import '../css/multiplayerPage.css';

import portalImage from '../images/portals.png'
import mushroomImage from '../images/mushrooms.png'
import minecraftAvatarImage from '../images/minecraftAvatar.png'
import shapeBuilderImage from '../images/shapeBuilder.png'
import zeoForestImage from '../images/zeoForest.png'

class MultiplayerPage extends Component {
  render() {
    return (
      <div className='multiplayerPage'>
        <h1 className='heading display-4'>Multiplayer servers</h1>
        <p>Click one to enter</p>
        <div className='container'>
          <ul className="list-group">
            <li className="list-group-item d-flex">
              <img className="server-img" src={portalImage} alt="Card"/>
              <div className='server-name'>
                <div className='server-name-title'>Magic server one</div>
                <p>A place to serve magic</p>
              </div>
              <div className='server-stat'><i className="fas fa-user"/>2/8</div>
              <div className='server-stat'><i className="fas fa-toggle-on"/>3</div>
            </li>
            <li className="list-group-item d-flex">
              <img className="server-img" src={mushroomImage} alt="Card"/>
              <div className='server-name'>
                <div className='server-name-title'>Magic server two</div>
                <p>A place to serve magic</p>
              </div>
              <div className='server-stat'><i className="fas fa-user"/>2/8</div>
              <div className='server-stat'><i className="fas fa-toggle-on"/>3</div>
            </li>
            <li className="list-group-item d-flex">
              <img className="server-img" src={minecraftAvatarImage} alt="Card"/>
              <div className='server-name'>
                <div className='server-name-title'>Fail whale zone</div>
                <p>A place to serve magic</p>
              </div>
              <div className='server-stat'><i className="fas fa-user"/>2/8</div>
              <div className='server-stat'><i className="fas fa-toggle-on"/>3</div>
            </li>
            <li className="list-group-item d-flex">
              <img className="server-img" src={shapeBuilderImage} alt="Card"/>
              <div className='server-name'>
                <div className='server-name-title'>Ice cream cone</div>
                <p>A place to serve magic</p>
              </div>
              <div className='server-stat'><i className="fas fa-user"/>2/8</div>
              <div className='server-stat'><i className="fas fa-toggle-on"/>3</div>
            </li>
            <li className="list-group-item d-flex">
              <img className="server-img" src={zeoForestImage} alt="Card"/>
              <div className='server-name'>
                <div className='server-name-title'>Why my alone</div>
                <p>A place to serve magic</p>
              </div>
              <div className='server-stat'><i className="fas fa-user"/>2/8</div>
              <div className='server-stat'><i className="fas fa-toggle-on"/>3</div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default MultiplayerPage;
