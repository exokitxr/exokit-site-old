import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import '../css/navbar.css';

class TopNavbar extends Component {
    render() {
        return (
            <div className="App">
                <Navbar>
                    <div className='row nav justify-content-center' >
                        <div className='col'>
                            <a href='#'>
                                <span id='homeNavItem' className='nav-link'>Home</span>
                            </a>
                        </div>
                        <div className='col'>
                            <a href='https://discord.gg/aQhHskF'>
                                <span id='discordNavItem' className='nav-link'>Discord</span>
                            </a>
                        </div>
                        <div className='col'>
                            <a href='https://www.twitch.tv/avaer/'>
                                <span id='twitchNavItem' className='nav-link'>Twitch</span>
                            </a>
                        </div>
                        <div className='col'>
                            <span id='downloadNavItem' className='nav-link'>Download</span>
                        </div>
                    </div>
                </Navbar>
            </div>
        );
    }
}
export default TopNavbar;
