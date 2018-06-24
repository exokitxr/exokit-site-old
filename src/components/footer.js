import React, { Component } from 'react';
import '../css/footer.css';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>

        <div className='row pt-5 pb-5 pl-3'>
          <div className='col-6'>
            <h3>Contact</h3>
            <h3>Download</h3>
            <h3>Blog</h3>
          </div>
            <div className='col-6'>
              <h2>Newsletter</h2>
              <p className='lead'>Sign up for our newsletter for the latest Exokit news and updates!</p>
                <input type="text" className="emailForm form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
        </div>

        <div className='row'>
          <div className='col-6'>
            <div className='row p-2'>
              <div className='col-4'>
                <h5><i className="fab fa-facebook fa-3x"/>Facebook</h5>
              </div>
              <div className='col-4'>
                <h5><i className="fab fa-twitter fa-3x"/>Twitter</h5>
              </div>
              <div className='col-4'>
                <h5><i className="fab fa-instagram fa-3x"/>Instagram</h5>
              </div>
            </div>
          </div>
          <div className='col-6 mt-5'>
            <p className='copyright lead'>Exokit &copy; 2018</p>
          </div>
        </div>

      </div>
    );
  }
}
export default Footer;
