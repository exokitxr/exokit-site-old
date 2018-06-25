import React, { Component } from 'react';
import nodeJSImage from '../images/nodeJS.png';
import devicesImage from '../images/allDevices.png';
import docsImage from '../images/books.png';
import '../css/docsPage.css';

class DocsPage extends Component {
  render() {
    return (
      <div className="docsPage">

        <div className='titleRow row pt-4'>
          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-4'>
            <h1 className="display-4">Exokit</h1>
            <p className='lead'>The fastest and most portable VR/AR toolbox for developers.</p>
          </div>
        </div>

        <div className='row pt-4'>
          <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 p-3'>
            <img src={nodeJSImage} alt='Built in Javascript'/>
            <hr className='mr-4 ml-4'/>
            <p className='lead'>
              Calling all web-devs!
            </p>
            <p className='lead'>
              Exokit is built in Javascript.
            </p>
            <p className='lead'>
              Enjoy the eco-system of the web.
            </p>
            <a href='https://github.com/webmixedreality/exokit'>
              <button type="button" id='leftButton' className="btn btn-dark btn-lg mb-3">Exokit Github</button>
            </a>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 p-3'>
            <img src={devicesImage} alt='All Devices Work'/>
            <hr className='mr-4 ml-4'/>
            <p className='lead'>
              Amazing portability due to Javascript.
            </p>
            <p className='lead'>
              Compatible with 100% of devices.
            </p>
            <p className='lead'>
              Download for your device today!
            </p>
            <a href='https://get.webmr.io'>
              <button type="button" id='leftButton' className="btn btn-dark btn-lg mb-3">Download Exokit</button>
            </a>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12 p-3'>
            <img src={docsImage} alt='Our Documentation' />
            <hr className='mr-4 ml-4'/>
            <p className='lead'>
              Tech for both Junior and Senior Developers.
            </p>
            <p className='lead'>
              Complaint about Exokit? Let us know.
            </p>
            <p className='lead'>
              Get started today! Read our documentation.
            </p>
            <a href='https://docs.webmr.io/#/'>
              <button type="button" id='leftButton' className="btn btn-dark btn-lg mb-3">Exokit Docs</button>
            </a>
          </div>
        </div>

      </div>
    );
  }
}
export default DocsPage;