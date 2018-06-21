import React, { Component } from 'react';
import '../css/titlePage.css';
import exokitLogo from '../images/ExokitLogo.png'


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
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <a href='https://threejs.org/'>
                                <button type="button" className="btn btn-outline-primary btn-lg">Demos</button>
                            </a>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                            <a href='https://github.com/webmixedreality/exokit'>
                                <button type="button" className="btn btn-outline-dark btn-lg">Github</button>
                            </a>
                        </div>
                    </div>

                    <br/>

                    <div className='row'>
                        <div className='col-12'>
                            <a href='https://github.com/webmixedreality/exokit'>
                                <i className="fab fa-github fa-3x"/>
                            </a>
                            <a href='https://twitter.com/webmixedreality'>
                                <i className="fab fa-twitter fa-3x"/>
                            </a>
                            <a href=''>
                                <i className="fab fa-facebook fa-3x"/>
                            </a>
                            <a href='https://www.instagram.com/exokitbrowser/?hl=en'>
                                <i className="fab fa-instagram fa-3x"/>
                            </a>
                            <a href=''>
                                <i className="fab fa-linkedin fa-3x"/>
                            </a>
                            <a href=''>
                                <i className="fab fa-youtube fa-3x"/>
                            </a>
                        </div>
                    </div>
                </div>
                <i className="fas fa-angle-down fa-3x"/>
            </div>
        );
    }
}
export default TitlePage;
