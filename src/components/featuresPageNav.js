import React, { Component } from 'react';
import '../css/featuresPage.css';

class FeaturesPageNav extends Component {
  render() {
    return (
      <div className='featuresPageNav'>
        <div className='row position-absolute'>
          <h1 className='heading display-4'>Features</h1>
        </div>
        <div className='main row'>
          <div className='links col-sm-4'>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>Reality tabs</li>
              <li className='list-group-item'>Multiplayer</li>
              <li className='list-group-item'>Fastest browser</li>
              <li className='list-group-item'>Vertically integrated</li>
              <li className='list-group-item'>Horizontally integrated</li>
              <li className='list-group-item'>Backwards compatible</li>
            </ul>
          </div>
          <div className='col-sm-8'/>
        </div>
      </div>
    );
  }
}
export default FeaturesPageNav;
