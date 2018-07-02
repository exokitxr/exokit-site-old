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

        <div className='row'>
          <div className='col p-0 m-0'>
            <h1 className='heading display-4'><i className="fal fa-users p-2"/> Multiplayer</h1>
          </div>
        </div>

        <div className='row servers p-1'>

          <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 pt-5 m-0'>
            <h3>Feel the immersion of true VR/AR multi-player.</h3>
            <p className='lead p-3'>
              Exokit offers built-in support for seamless VR/AR multi-player experiences.
              Our browser offers a unique and simple way to connect worlds and people together through the power of VR/AR and the web.
              Jump into a reality tab with your friends and have a blast!
            </p>
            <p className='lead p-3'>
              Built with Javascript and powered by the web, Exokit aims to challenge the status quo of web browsers.
              Exokit was designed specifically for the purpose of VR/AR. Exokit gets much higher performance than say Chrome or Firefox in a VR/AR application.
            </p>
            <p className='lead p-3'>
              Exokit provides the platform for developers to construct their own multi-player systems using our implementations and API as a guide along the way.
            </p>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 p-3'>
            <h3 className='subheading'>Click to Enter (In Development)</h3>
            <ul className="list-group">
              <li className="list-group-item d-flex">
                <img className="server-img" src={portalImage} alt="Card"/>
                <div className='server-name'>
                  <div className='server-name-title'>Magic server one</div>
                  <p>A place to serve magic</p>
                </div>
                <div className='server-stat'><i className="mpIcon fas fa-user"/>2/8</div>
                <div className='server-stat'><i className="mpIcon fas fa-toggle-on"/>3</div>
              </li>
              <li className="list-group-item d-flex">
                <img className="server-img" src={mushroomImage} alt="Card"/>
                <div className='server-name'>
                  <div className='server-name-title'>Magic server two</div>
                  <p>A place to serve magic</p>
                </div>
                <div className='server-stat'><i className="mpIcon fas fa-user"/>2/8</div>
                <div className='server-stat'><i className="mpIcon fas fa-toggle-on"/>3</div>
              </li>
              <li className="list-group-item d-flex">
                <img className="server-img" src={minecraftAvatarImage} alt="Card"/>
                <div className='server-name'>
                  <div className='server-name-title'>Fail whale zone</div>
                  <p>A place to serve magic</p>
                </div>
                <div className='server-stat'><i className="mpIcon fas fa-user"/>2/8</div>
                <div className='server-stat'><i className="mpIcon fas fa-toggle-on"/>3</div>
              </li>
              <li className="list-group-item d-flex">
                <img className="server-img" src={shapeBuilderImage} alt="Card"/>
                <div className='server-name'>
                  <div className='server-name-title'>Ice cream cone</div>
                  <p>A place to serve magic</p>
                </div>
                <div className='server-stat'><i className="mpIcon fas fa-user"/>2/8</div>
                <div className='server-stat'><i className="mpIcon fas fa-toggle-on"/>3</div>
              </li>
              <li className="list-group-item d-flex">
                <img className="server-img" src={zeoForestImage} alt="Card"/>
                <div className='server-name'>
                  <div className='server-name-title'>Why my alone</div>
                  <p>A place to serve magic</p>
                </div>
                <div className='server-stat'><i className="mpIcon fas fa-user"/>2/8</div>
                <div className='server-stat'><i className="mpIcon fas fa-toggle-on"/>3</div>
              </li>
            </ul>
          </div>

        </div>

      </div>
    );
  }
}
export default MultiplayerPage;
