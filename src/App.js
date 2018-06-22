import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import './css/App.css';
import TopNavbar from './components/navbar';
import TitlePage from "./components/titlePage";
import FeaturesPage from "./components/featuresPage";
import FeaturesPageNav from "./components/featuresPageNav";
import MultiplayerPage from "./components/multiplayerPage";
import NewsPageNav from "./components/newsPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavbar/>
        <TitlePage/>
        {/* <DemoPage/> */}
        <FeaturesPageNav/>
        <FeaturesPage name='feature-1'/>
        <FeaturesPage name='feature-2'/>
        <FeaturesPage name='feature-3'/>
        <MultiplayerPage/>
        <NewsPageNav/>
        <Jumbotron>
          <h1 className="display-4">Exokit</h1>
          <p className='lead'>The fastest and most portable VR/AR toolbox for developers.</p>
        </Jumbotron>
        {/* <AppGrid/> */}
      </div>
    );
  }
}

export default App;
