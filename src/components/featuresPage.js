import React, { Component } from 'react';
import '../css/featuresPage.css';

import portalImage from '../images/portals.png'
import mushroomImage from '../images/mushrooms.png'
import minecraftAvatarImage from '../images/minecraftAvatar.png'
import girlAvatarImage from '../images/girlAvatar.png'
import shapeBuilderImage from '../images/shapeBuilder.png'
import zeoForestImage from '../images/zeoForest.png'

class NewPage extends Component {
  render() {
    return (
      <div className='featuresPage'>
        <div className='row position-absolute'>
          <h1 className='heading display-4'>Features</h1>
        </div>
        <div className='main row'>
          <div className='links col-sm-4'>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>Reality tabs</li>
              <li className='list-group-item'>Multiplayer</li>
              <li className='list-group-item'>Fastest browser</li>
              <li className='list-group-item'>Vertically integrated</li>
              <li className='list-group-item'>Horizontally integrated</li>
              <li className='list-group-item'>Backwards compatible</li>
            </ul>
          </div>
          <div className='col-sm-8'/>
        </div>
      </div>
    );
  }
}
export default NewPage;
