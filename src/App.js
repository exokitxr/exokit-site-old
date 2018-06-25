import React, { Component } from 'react';
import './css/App.css';
import TopNavbar from './components/navbar';
import TitlePage from "./components/titlePage";
import FeaturesPage from "./components/featuresPage";
import FeaturesPageNav from "./components/featuresPageNav";
import MultiplayerPage from "./components/multiplayerPage";
import NewsPage from "./components/newsPage";
import Footer from "./components/footer";
import DocsPage from "./components/docsPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavbar/>
        <TitlePage/>
        <FeaturesPageNav/>
        <FeaturesPage name='feature-1'/>
        <FeaturesPage name='feature-2'/>
        <FeaturesPage name='feature-3'/>
        <MultiplayerPage/>
        <NewsPage/>
        <DocsPage/>
        <Footer/>
      </div>
    );
  }
}

export default App;
