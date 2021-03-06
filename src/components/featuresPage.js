import React, { Component } from 'react';
import '../css/featuresPage.css';

import portalImage from '../images/portals.png'
import mushroomImage from '../images/mushrooms.png'
import menuImage from '../images/menu.png'
import lightsaberImage from '../images/lightsaber.png'

import mountainsImage from '../images/mountains.png'
import lavaImage from '../images/lava.png'
import snakeImage from '../images/snake.png'
import startZoneImage from '../images/startZone.png'

class FeaturesPage extends Component {
  render() {
    return (
      <div className='featuresPage'>
        <a className='name' name={this.props.name}/>
                <div className='featuresRow row'>
                  <div className='col-6 p-0'>
                    <div className='row p-0'>
                      <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 p-0'>
                        <div className='appCard'>
                          <img src={portalImage} alt="Portal Demo" className="img-fluid"/>
                          <div className='title'>Title</div>
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 p-0'>
                        <div className='appCard'>
                          <img src={mushroomImage} alt="VR Guy" className="img-fluid"/>
                          <div className='title'>Title</div>
                        </div>
                      </div>
                    </div>
                    <div className='row p-0'>
                      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 p-0'>
                        <div className='appCard'>
                          <img src={menuImage} alt="Portal Demo" className="img-fluid"/>
                          <div className='title'>Title</div>
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 p-0'>
                        <div className='appCard'>
                          <img src={lightsaberImage} alt="VR Guy" className="img-fluid"/>
                          <div className='title'>Title</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-6 p-0'>
                    <div className='row p-0'>
                      <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 p-0'>
                        <div className='appCard'>
                          <img src={mountainsImage} alt="Portal Demo" className="img-fluid"/>
                          <div className='title'>Title</div>
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-12 col-sm-12 col-xs-12 p-0'>
                        <div className='appCard'>
                          <img src={lavaImage} alt="VR Guy" className="img-fluid"/>
                          <div className='title'>Title</div>
                        </div>
                      </div>
                    </div>
                    <div className='row p-0'>
                      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 p-0'>
                        <div className='appCard'>
                          <img src={snakeImage} alt="Portal Demo" className="img-fluid"/>
                          <div className='title'>Title</div>
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 p-0'>
                        <div className='appCard'>
                          <img src={startZoneImage} alt="VR Guy" className="img-fluid"/>
                          <div className='title'>Title</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              <div className="alert alert-success">
                <h4 className="alert-heading">{this.props.footerHeading}</h4>
                <p className="mb-0 text-left">{this.props.footerBody}</p>
              </div>
      </div>
    );
  }
}
export default FeaturesPage;
