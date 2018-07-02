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
        <FeaturesPage name='feature-1' footerHeading='Reality Tabs' footerBody='Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'/>
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
