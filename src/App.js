import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import './css/App.css';
import TopNavbar from './components/navbar';
import AppGrid from './components/appGrid';
import TitlePage from "./components/titlePage";
import DemoPage from "./components/demoPage";

class App extends Component {
    render() {
        return (
            <div className="App">
                <TopNavbar/>
                <TitlePage/>
                <DemoPage/>
                {/*<Jumbotron>*/}
                    {/*<h1 className="display-4">Exokit</h1>*/}
                    {/*<p className='lead'>The fastest and most portable VR/AR toolbox for developers.</p>*/}
                {/*</Jumbotron>*/}
                  {/*<AppGrid/>*/}
                  {/*<br/>*/}
            </div>
        );
    }
}

export default App;
