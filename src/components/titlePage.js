import React, { Component } from 'react';
import '../css/titlePage.css';
import exokitLogo from '../images/ExokitLogo.png'


class TitlePage extends Component {
    render() {
        return (
            <div className="titlePage">
                <img className='exokitLogo' src={exokitLogo}/>
                <div className='titleText'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1 className='display-4'>Exokit is a new, fast post-screen era browser.</h1>
                        </div>
                    </div>
                    <br/>
                    <div className='row'>
                        <div className='col-3'>

                        </div>
                        <div className='col-3'>
                            <button type="button" className="btn btn-outline-primary btn-lg">Demos</button>
                        </div>

                        <div className='col-3'>
                            <button type="button" className="btn btn-outline-dark btn-lg">Github</button>
                        </div>
                        <div className='col-3'>

                        </div>
                    </div>
                    <br/>
                    <div className='row'>
                        <div className='col-12'>
                            <i className="fab fa-github fa-3x"/>
                            <i className="fab fa-twitter fa-3x"/>
                            <i className="fab fa-facebook fa-3x"/>
                            <i className="fab fa-instagram fa-3x"/>
                            <i className="fab fa-linkedin fa-3x"/>
                            <i className="fab fa-youtube fa-3x"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default TitlePage;
