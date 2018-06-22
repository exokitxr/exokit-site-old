import React, { Component } from 'react';
import '../css/newsPage.css';

import portalImage from '../images/portals.png'
import mushroomImage from '../images/mushrooms.png'
import minecraftAvatarImage from '../images/minecraftAvatar.png'
import girlAvatarImage from '../images/girlAvatar.png'
import shapeBuilderImage from '../images/shapeBuilder.png'
import zeoForestImage from '../images/zeoForest.png'

class NewPage extends Component {
  render() {
    return (
      <div className='newsPage'>
        <h1 className='heading display-4'>News</h1>
        <div className='row'>
          <div className='appGrid row d-flex'>
            <div className='appCards row col-12 flex-grow-1'>
              <div className='appCard col-2'>
                <img src={portalImage} alt="Portal Demo" className="img-fluid"/>
              </div>
              <div className='appCard col-2'>
                <img src={mushroomImage} alt="VR Guy" className="img-fluid"/>
              </div>
              <div className='appCard col-2'>
                <img src={minecraftAvatarImage} alt="VR Guy" className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NewPage;
