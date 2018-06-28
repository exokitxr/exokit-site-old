import React, { Component } from 'react';
import 'twitch-embed';
import PropTypes from 'prop-types';
import '../css/twitchPage.css';

export default class TwitchPage extends Component {
  constructor(props) {
    super(props);
    this.player = null;
    this.state = {
      id: null
    };
  }

  static propTypes = {
    channel: PropTypes.string,
    video: PropTypes.string,
    play: PropTypes.bool
  };

  componentWillMount() {
    this.setId();
  }

  componentDidMount() {
    this.setPlayer();
  }

  componentDidUpdate() {
    this.setPlayer();
  }

  componentWillReceiveProps(nextProps) {
    this.setId();
    this.setPlayer();

    //can check for props and call player functions here
  }

  setId() {
    if (!this.state.id) {
      if (this.props.channel) {
        this.channel = true;
        this.setState({
          id: `twitch-${this.props.channel}`
        });
      }
      if (this.props.video) {
        this.channel = false;
        this.setState({
          id: `twitch-${this.props.video}`
        });
      }
    }
  }

  setPlayer() {
    if (!this.player) {
      const options = {};
      if (this.channel) {
        options.channel = this.props.channel;
      } else {
        options.video = this.props.video;
      }
      if (typeof window !== 'undefined' && window.Twitch) {
        this.player = new window.Twitch.Player(this.state.id, options);
      }
    }
  }

  render() {
    return (
      <div className='twitchPage'>
        <div className='headingRow row'>
          <h1 className='heading display-4'><i className="fab fa-twitch p-2"/> Twitch</h1>
        </div>
        <div id={this.state.id || ''} className="twitchStream mb-5"/>
      </div>
    );
  }
}
