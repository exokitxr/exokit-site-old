import React, { Component } from 'react';
import '../css/featuresPage.css';

class FeaturesPageNav extends Component {
  render() {
    return (
      <div className='featuresPageNav'>
        <div className='heading-wrap'>
          <h1 className='heading display-4'>Features</h1>
        </div>
        <div className='main'>
          <div className='links'>
            <div className='list-group list-group-flush'>
              <a href="#feature-1" className='list-group-item'>Reality tabs</a>
              <a href="#feature-1" className='list-group-item'>Multiplayer</a>
              <a href="#feature-1" className='list-group-item'>Fastest browser</a>
              <a href="#feature-1" className='list-group-item'>Vertically integrated</a>
              <a href="#feature-1" className='list-group-item'>Horizontally integrated</a>
              <a href="#feature-1" className='list-group-item'>Backwards compatible</a>
            </div>
          </div>
          <div className='col-8'/>
        </div>
      </div>
    );
  }
}
export default FeaturesPageNav;
