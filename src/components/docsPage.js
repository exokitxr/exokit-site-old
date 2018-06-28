import React, { Component } from 'react';
import '../css/docsPage.css';

class DocsPage extends Component {

  render() {
    return (
      <div className="docsPage">

        <div className='headingRow row'>
          <h1 className='heading display-4'><i className="fal fa-code p-2"/> Developers</h1>
        </div>

        <div className='titleRow row pt-3'>
          <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
            <h1 className="title display-3">Exokit</h1>
            <p className='lead'>The fastest and most portable VR/AR toolbox for developers.</p>
          </div>
        </div>

        <div className='row pt-5 pb-3'>

          <div className='infoSection col-lg-4 col-md-12 col-sm-12 col-xs-12 pb-5 pt-5'>
            <i className="fab fa-node-js fa-5x hvr-bob"/>
            <hr className='mr-5 ml-5'/>
            <p className='lead'>
              Calling all web-devs!
            </p>
            <p className='lead'>
              Exokit is built in Javascript.
            </p>
            <p className='lead'>
              Enjoy the eco-system of the web.
            </p>
            <a href='https://github.com/webmixedreality/exokit' className='btnContainer hvr-bounce-in'>
              <button type="button" id='leftButton' className="btn btn-primary btn-lg mb-3 mt-2 hvr-icon">Exokit Github</button>
            </a>
          </div>

          <div className='infoSection col-lg-4 col-md-12 col-sm-12 col-xs-12 pb-5 pt-5'>
            <i className="fal fa-project-diagram fa-5x hvr-wobble-skew"/>
            <hr className='mr-5 ml-5'/>
            <p className='lead'>
              Amazing portability due to Javascript.
            </p>
            <p className='lead'>
              Compatible with 100% of devices.
            </p>
            <p className='lead'>
              Download for your device today!
            </p>
            <a href='https://get.webmr.io' className='btnContainer hvr-bounce-in'>
              <button type="button" id='leftButton' className="btn btn-primary btn-lg mb-3 mt-2 hvr-icon">Download Exokit</button>
            </a>
          </div>

          <div className='infoSection col-lg-4 col-md-12 col-sm-12 col-xs-12 pb-5 pt-5'>
            <i className="fal fa-code fa-5x hvr-pop"/>
            <hr className='mr-5 ml-5'/>
            <p className='lead'>
              Tech for both Junior and Senior Developers.
            </p>
            <p className='lead'>
              Complaint about Exokit? Let us know.
            </p>
            <p className='lead'>
              Get started today! Read our documentation.
            </p>
            <a href='https://docs.webmr.io/#/' className='btnContainer hvr-bounce-in'>
              <button type="button" id='leftButton' className="btn btn-primary btn-lg mt-2 hvr-icon">Exokit Docs</button>
            </a>
          </div>

        </div>

      </div>
    );
  }
}
export default DocsPage;