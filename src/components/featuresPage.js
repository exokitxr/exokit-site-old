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
        <div className='main row'>
          <div className='links col-sm-4'>
            <h1 className='display-4'>Links</h1>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>First</li>
              <li className='list-group-item'>Second</li>
              <li className='list-group-item'>Third</li>
            </ul>
          </div>
          <div className='col-sm-8'/>
        </div>
      </div>
    );
  }
}
export default NewPage;
