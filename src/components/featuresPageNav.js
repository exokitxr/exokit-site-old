import React, { Component } from 'react';
import '../css/featuresPage.css';

class FeaturesPageNav extends Component {
  render() {
    return (
      <div className='featuresPageNav'>
        <div className='heading-wrap'>
          <h1 className='heading display-4'>Features</h1>
        </div>
        <div className='main row col-3'>
          <div className='links'>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'><a href="#feature-1">Reality tabs</a></li>
              <li className='list-group-item'><a href="#feature-1">Multiplayer</a></li>
              <li className='list-group-item'><a href="#feature-1">Fastest browser</a></li>
              <li className='list-group-item'><a href="#feature-1">Vertically integrated</a></li>
              <li className='list-group-item'><a href="#feature-1">Horizontally integrated</a></li>
              <li className='list-group-item'><a href="#feature-1">Backwards compatible</a></li>
            </ul>
          </div>
          <div className='col-8'/>
        </div>
      </div>
    );
  }
}
export default FeaturesPageNav;
