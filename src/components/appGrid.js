import React, { Component } from 'react';
import '../css/appGrid.css';

import portalImage from '../images/portals.png'
import mushroomImage from '../images/mushrooms.png'
import minecraftAvatarImage from '../images/minecraftAvatar.png'
import girlAvatarImage from '../images/girlAvatar.png'
import shapeBuilderImage from '../images/shapeBuilder.png'
import zeoForestImage from '../images/zeoForest.png'

class AppGrid extends Component {
    render() {
        return (
            <div className="appGrid">
                <h1 className="display-4">Reality Tabs</h1>
                <div className='appGrid'>
                    <div className='row'>
                        <div className='appCards col-lg-4 col-md-4 col-sm-12 col-sx-12'>
                            <img src={portalImage} alt="Portal Demo" className="img-thumbnail"/>
                        </div>
                        <div className='appCards col-lg-4 col-md-4 col-sm-12 col-sx-12'>
                            <img src={mushroomImage} alt="VR Guy" className="img-thumbnail"/>
                        </div>
                        <div className='appCards col-lg-4 col-md-4 col-sm-12 col-sx-12'>
                            <img src={minecraftAvatarImage} alt="VR Guy" className="img-thumbnail"/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='appCards col-lg-4 col-md-4 col-sm-12 col-sx-12'>
                            <img src={girlAvatarImage} alt="VR Guy" className="img-thumbnail"/>
                        </div>
                        <div className='appCards col-lg-4 col-md-4 col-sm-12 col-sx-12'>
                            <img src={shapeBuilderImage} alt="VR Guy" className="img-thumbnail"/>
                        </div>
                        <div className='appCards col-lg-4 col-md-4 col-sm-12 col-sx-12'>
                            <img src={zeoForestImage} alt="VR Guy" className="img-thumbnail"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AppGrid;
