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
          <div className='col-3'>
            <div className="card">
              <img className="card-img-top" src={portalImage} alt="Card image cap"/>
              <div className="card-body">Card title</div>
            </div>
            <div className='card-footer d-flex justify-content-flex-start'>Apr 1st</div>
          </div>
          <div className='col-3'>
            <div className="card">
              <img className="card-img-top" src={mushroomImage} alt="Card image cap"/>
              <div className="card-body">Card title</div>
            </div>
            <div className='card-footer d-flex justify-content-flex-start'>Apr 1st</div>
          </div>
          <div className='col-3'>
            <div className="card">
              <img className="card-img-top" src={minecraftAvatarImage} alt="Card image cap"/>
              <div className="card-body">Card title</div>
            </div>
            <div className='card-footer d-flex justify-content-flex-start'>Apr 1st</div>
          </div>
          <div className='col-3'>
            <div className="card">
              <img className="card-img-top" src={girlAvatarImage} alt="Card image cap"/>
              <div className="card-body">Card title</div>
            </div>
            <div className='card-footer d-flex justify-content-flex-start'>Apr 1st</div>
          </div>
          <div className='col-3'>
            <div className="card">
              <img className="card-img-top" src={shapeBuilderImage} alt="Card image cap"/>
              <div className="card-body">Card title</div>
            </div>
            <div className='card-footer d-flex justify-content-flex-start'>Apr 1st</div>
          </div>
          <div className='col-3'>
            <div className="card">
              <img className="card-img-top" src={zeoForestImage} alt="Card image cap"/>
              <div className="card-body">Card title</div>
            </div>
            <div className='card-footer d-flex justify-content-flex-start'>Apr 1st</div>
          </div>
        </div>
      </div>
    );
  }
}
export default NewPage;
