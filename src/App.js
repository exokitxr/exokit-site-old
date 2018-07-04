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

import PropTypes from 'prop-types'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

import reducer from "./reducers/multiplayerReducer";
const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavbar/>
        <TitlePage/>
        <FeaturesPageNav/>
        <FeaturesPage name='feature-1' footerHeading='Reality Tabs' footerBody='Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'/>
        <Provider store={store}>
          <MultiPlayerPageWithData playerCount={0}/>
        </Provider>
        <NewsPage/>
        <TwitchPage channel="avaer"/>
        <DocsPage/>
        <Footer/>
      </div>
    );
  }
}

export default App;

// Actions
const playerJoinAction = { type: 'playerJoin' };
const playerLeaveAction = { type: 'playerLeave' };

MultiplayerPage.propTypes = {
  playerCount: PropTypes.number.isRequired,
  playerJoinAction: PropTypes.func.isRequired,
  playerLeaveAction: PropTypes.func.isRequired
};

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    playerCount: state.playerCount
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    playerJoinAction: () => dispatch(playerJoinAction),
    playerLeaveAction: () => dispatch(playerLeaveAction)
  }
}

// Connected Component
const MultiPlayerPageWithData = connect(
  mapStateToProps,
  mapDispatchToProps
)(MultiplayerPage);

