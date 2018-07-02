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
import TwitchPage from "./components/twitchPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavbar/>
        <TitlePage/>
        <FeaturesPageNav/>
        <FeaturesPage name='feature-1' footerHeading='Reality Tabs' footerBody='Reality tabs are the new and powerful way to explore VR/AR worlds through the power of the Javascript. Drop in and drop out of seamless worlds made by anyone and everyone. The possibilities are endless with the amount of ideas and experiences Exokit can deliver.'/>
        <MultiplayerPage/>
        <NewsPage/>
        <TwitchPage channel="avaer"/>
        <DocsPage/>
        <Footer/>
      </div>
    );
  }
}

export default App;
