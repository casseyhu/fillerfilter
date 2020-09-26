import React, {Component, useState} from 'react'
import Navbar from '../navbar/Navbar'
import logo from './logotext2.png'

class Main extends Component {
    render () {
        document.body.style = 'background-color: #B7B7CB; maxWidth:100%; height: 100vh; overflow: hidden;';
        return (
            <div className="app">
                <div style={{float: "left", paddingLeft: "200px", marginRight: "-400px"}}><img src={logo} alt="logo" width="100" height="100"/></div>
                <h1 class="centert glitch is-glitching" data-text="fillerfilter">fillerfilter</h1>
                <div style={{float: "right", marginTop:"-100px", paddingRight: "200px"}}><img src={logo} alt="logo" width="100" height="100"/></div>
                <Navbar/>
            </div>
        );
    }
}

export default Main