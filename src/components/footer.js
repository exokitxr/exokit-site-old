import React, { Component } from 'react';
import '../css/footer.css';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>

        <div className='row pt-5 pb-5 pl-3'>
          <div className='col-6'>
            <a href=''><h3>Contact</h3></a>
            <a href='https://get.webmr.io'><h3>Download</h3></a>
            <a href='https://medium.com/webmr'><h3>Blog</h3></a>
          </div>
            <div className='col-6'>
              <form action="https://zeo.us15.list-manage.com/subscribe/post?u=36aa5e8f4bdde311ec69edc63&amp;id=ea3c05ce33" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
              <h2>Newsletter</h2>
              <p className='lead'>Sign up for our newsletter for the latest Exokit news and updates!</p>
                <input name='EMAIL' type="email" className="emailForm form-control" placeholder="Email" aria-label="Email"/>
              <button type="submit" value="Subscribe" name="subscribe" className="btn btn-success mt-3">Sign-Up</button>
              </form>
            </div>
        </div>

        <div className='row'>
          <div className='socials col-6'>
            <div className='row p-2'>
              <div className='col-4'>
                <a href=''>
                  <i className="fab fa-facebook fa-2x"/><h5>Facebook</h5>
                </a>
              </div>
              <div className='col-4'>
                <a href='https://twitter.com/webmixedreality'>
                  <i className="fab fa-twitter fa-2x"/><h5>Twitter</h5>
                </a>
              </div>
              <div className='col-4'>
                <a href='https://www.instagram.com/exokitbrowser/?hl=en'>
                  <i className="fab fa-instagram fa-2x"/><h5>Instagram</h5>
                </a>
              </div>
            </div>
          </div>
          <div className='col-6 mt-5'>
            <p className='copyright'>Exokit &copy; 2018</p>
          </div>
        </div>

      </div>
    );
  }
}
export default Footer;
