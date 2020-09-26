import React, {Component, useState} from 'react'
import Navbar from '../navbar/Navbar'
import logo from './logotext2.png'

class Main extends Component {
    render () {
        document.body.style = 'background-color: #B7B7CB; maxWidth:100%; height: 100vh; overflow: auto;';
        return (
            <div className="app">
                <div className="row">
                    <img src={logo} alt="logo" width="100" height="100" style={{margin: "auto 0 auto 15%"}}/>
                    <h1 class="centert glitch is-glitching" data-text="fillerfilter" >fillerfilter</h1>
                    <img src={logo} alt="logo" width="100" height="100" style={{margin: "auto 15% auto 0"}}/>
                </div>
                <Navbar/>
            </div>
        );
    }
}

export default Main