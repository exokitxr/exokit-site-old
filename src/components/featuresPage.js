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
        <a className='name' name={this.props.name}/>
                <div className='featuresRow row'>
                  <div className='col-6'>
                    <div className='row pt-4'>
                      <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-2'>
                        <div className='appCard'>
                          <img src={portalImage} alt="Portal Demo" className="img-fluid"/>
                          <div className='title'>Title</div>
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <div className='appCard'>
                          <img src={mushroomImage} alt="VR Guy" className="img-fluid"/>
                          <div className='title'>Title</div>
                        </div>
                      </div>
                    </div>
                    <div className='row pt-4'>
                      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 pb-2'>
                        <div className='appCard'>
                          <img src={portalImage} alt="Portal Demo" className="img-fluid"/>
                          <div className='title'>Title</div>
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                        <div className='appCard'>
                          <img src={mushroomImage} alt="VR Guy" className="img-fluid"/>
                          <div className='title'>Title</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='row pt-4'>
                      <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 pb-2'>
                        <div className='appCard'>
                          <img src={portalImage} alt="Portal Demo" className="img-fluid"/>
                          <div className='title'>Title</div>
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                        <div className='appCard'>
                          <img src={mushroomImage} alt="VR Guy" className="img-fluid"/>
                          <div className='title'>Title</div>
                        </div>
                      </div>
                    </div>
                    <div className='row pt-4'>
                      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 pb-2'>
                        <div className='appCard'>
                          <img src={portalImage} alt="Portal Demo" className="img-fluid"/>
                          <div className='title'>Title</div>
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                        <div className='appCard'>
                          <img src={mushroomImage} alt="VR Guy" className="img-fluid"/>
                          <div className='title'>Title</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              <div className="alert alert-success">
                <h4 className="alert-heading">Cards footer</h4>
                <p className="mb-0">Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
              </div>
      </div>
    );
  }
}
export default FeaturesPage;
