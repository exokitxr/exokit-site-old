import React, { Component } from 'react';
import '../css/featuresPage.css';
import '../css/appGrid.css'

import portalImage from '../images/portals.png'
import mushroomImage from '../images/mushrooms.png'
import minecraftAvatarImage from '../images/minecraftAvatar.png'

class FeaturesPage extends Component {
  render() {
    return (
      <div className='featuresPage'>
        <div className='row'>
          <div className='links col-sm-4'/>
          <div className='col-sm-8'>
            <div className='appGrid row d-flex'>
              <div className='appCards row col-12 flex-grow-1'>
                <div className='col-2'>
                  <div className='appCard'>
                    <img src={portalImage} alt="Portal Demo" className="img-fluid"/>
                    <div className='title'>Title</div>
                  </div>
                </div>
                <div className='col-2'>
                  <div className='appCard'>
                    <img src={mushroomImage} alt="VR Guy" className="img-fluid"/>
                    <div className='title'>Title</div>
                  </div>
                </div>
                <div className='col-2'>
                  <div className='appCard'>
                    <img src={minecraftAvatarImage} alt="VR Guy" className="img-fluid"/>
                    <div className='title'>Title</div>
                  </div>
                </div>
                <div className='col-2'>
                  <div className='appCard'>
                    <img src={portalImage} alt="Portal Demo" className="img-fluid"/>
                    <div className='title'>Title</div>
                  </div>
                </div>
                <div className='col-2'>
                  <div className='appCard'>
                    <img src={mushroomImage} alt="VR Guy" className="img-fluid"/>
                    <div className='title'>Title</div>
                  </div>
                </div>
                <div className='col-2'>
                  <div className='appCard'>
                    <img src={minecraftAvatarImage} alt="VR Guy" className="img-fluid"/>
                    <div className='title'>Title</div>
                  </div>
                </div>
                <div className='col-2'>
                  <div className='appCard'>
                    <img src={portalImage} alt="Portal Demo" className="img-fluid"/>
                    <div className='title'>Title</div>
                  </div>
                </div>
                <div className='col-2'>
                  <div className='appCard'>
                    <img src={mushroomImage} alt="VR Guy" className="img-fluid"/>
                    <div className='title'>Title</div>
                  </div>
                </div>
                <div className='col-2'>
                  <div className='appCard'>
                    <img src={minecraftAvatarImage} alt="VR Guy" className="img-fluid"/>
                    <div className='title'>Title</div>
                  </div>
                </div>
                <div className='col-2'>
                  <div className='appCard'>
                    <img src={portalImage} alt="Portal Demo" className="img-fluid"/>
                    <div className='title'>Title</div>
                  </div>
                </div>
                <div className='col-2'>
                  <div className='appCard'>
                    <img src={mushroomImage} alt="VR Guy" className="img-fluid"/>
                    <div className='title'>Title</div>
                  </div>
                </div>
                <div className='col-2'>
                  <div className='appCard'>
                    <img src={minecraftAvatarImage} alt="VR Guy" className="img-fluid"/>
                    <div className='title'>Title</div>
                  </div>
                </div>
              </div>
              <div className="alert alert-success">
                <h4 className="alert-heading">Cards footer</h4>
                <p className="mb-0">Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FeaturesPage;
