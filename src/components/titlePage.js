import React, { Component } from 'react';
import '../css/titlePage.css';
import '../css/Hover-master/css/hover-min.css';

class TitlePage extends Component {
    render() {
        return (
            <div className="titlePage">
                <div className='titleText'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1 className='display-4'>Exokit is a new, fast, post-screen era browser.</h1>
                        </div>
                    </div>

                    <br/>

                    <div className='row buttonRow'>
                      <div className='buttonCol col-12'>
                        <a href='https://get.webmr.io' className='btnContainer'>
                          <button type="button" id='leftButton' className="btn btn-primary btn-lg">Download</button>
                        </a>
                        <a href='https://docs.webmr.io/docs/StartHere.html' className='btnContainer'>
                          <button id='rightButton' type="button" className="btn btn-dark btn-lg">Demos</button>
                        </a>
                      </div>
                    </div>

                    <br/>

                    <div className='iconsRow row'>
                        <div className='titleIconsCol col-12'>
                            <a href='https://github.com/webmixedreality/exokit'>
                                <i className="fab fa-github fa-3x hvr-bob"/>
                            </a>
                            <a href='https://twitter.com/webmixedreality'>
                                <i className="fab fa-twitter fa-3x hvr-bob"/>
                            </a>
                            <a href='https://www.facebook.com/webmixedreality/'>
                                <i className="fab fa-facebook fa-3x hvr-bob"/>
                            </a>
                            <a href='https://www.instagram.com/exokitbrowser/?hl=en'>
                                <i className="fab fa-instagram fa-3x hvr-bob"/>
                            </a>
                            <a href='https://www.twitch.tv/avaer/'>
                                <i className="fab fa-twitch fa-3x hvr-bob"/>
                            </a>
                            <a href='https://www.youtube.com/channel/UCbeboI7dMETmnUro91AxJZA'>
                                <i className="fab fa-youtube fa-3x hvr-bob"/>
                            </a>

                        </div>
                    </div>

                  <div className='arrow row'>
                    <div className='arrowCol col-12'>
                      <i className="fas fa-angle-down fa-3x mb-4"/>
                    </div>
                  </div>

                </div>
            </div>
        );
    }
}
export default TitlePage;
