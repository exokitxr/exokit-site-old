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
          <div className='col-12'>
            <h1 className='heading display-4'>Multiplayer servers</h1>
          </div>
        </div>

        <div className='row servers p-3'>

          <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
              <h3 className='subheading'>Click to enter</h3>
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
          <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 pt-5'>
            <p className='lead pt-5 pb-3'>
              Lorem ipsum dolor sit amet, doctus accumsan inimicus id pri. Ei salutatus intellegebat duo, no dolorum appellantur voluptatibus quo. Corpora menandri suscipiantur quo ea. Laudem abhorreant at his, no diam primis sit, has an cibo aliquip. No nec aperiam vituperata.
            </p>
              <p className='lead pt-3 pb-3'>
                Impetus volumus te sea, eu eum mutat periculis consequat, has an erat meis. Ponderum vivendum invenire ei mei, nec dicam delicata delicatissimi ne. At wisi aliquid duo, ut partiendo hendrerit elaboraret quo.
              </p>
            <p className='lead pt-3'>
              Impetus volumus te sea, eu eum mutat periculis consequat, has an erat meis. Ponderum vivendum invenire ei mei, nec dicam delicata delicatissimi ne. At wisi aliquid duo, ut partiendo hendrerit elaboraret quo.
            </p>

          </div>

        </div>

      </div>
    );
  }
}
export default MultiplayerPage;
