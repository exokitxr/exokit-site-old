import React, { Component } from 'react';
import '../css/appGrid.css';

class AppGrid extends Component {
    render() {
        return (
            <div className="App">
                <div className='appGrid'>
                    <div className='row mb-4 mr-4 ml-4 mt-4'>
                        <div className='col'>
                            <img src="https://softwaredevelopersindia.com/img/virtual-reality/virtual-reality-img.png" alt="VR Guy" className="img-thumbnail"/>
                        </div>
                        <div className='col'>
                            <img src="http://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Internet-chrome-icon.png" alt="VR Guy" className="img-thumbnail"/>
                        </div>
                        <div className='col'>
                            <img src="http://pluspng.com/img-png/logo-instagram-png-instagram-icon-logo-transparent-png-512.png" alt="VR Guy" className="img-thumbnail"/>
                        </div>
                    </div>
                    <div className='row mb-4 mr-4 ml-4 mt-4'>
                        <div className='col'>
                            <img src="http://umsu.ca/wp-content/uploads/2017/07/black-and-white-twitter-icon-transparent_2372885.png" alt="VR Guy" className="img-thumbnail"/>
                        </div>
                        <div className='col'>
                            <img src="https://vignette.wikia.nocookie.net/truecapitalist/images/f/f7/Discord_logo1600.png/revision/latest?cb=20170221133121" alt="VR Guy" className="img-thumbnail"/>
                        </div>
                        <div className='col'>
                            <img src="https://sguru.org/wp-content/uploads/2018/02/facebook-logo-jpg-facebook-logo-1.jpg" alt="VR Guy" className="img-thumbnail"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default AppGrid;
