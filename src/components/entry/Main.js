import React, {Component, useState} from 'react'
import Navbar from '../navbar/Navbar'

class Main extends Component {
    render () {
        document.body.style = 'background-color: #B7B7CB; maxWidth:100%; height: 100vh; overflow: hidden;';
        return (
            <div className="app">
                <h1 class="centert glitch is-glitching" data-text="fillerfilter">fillerfilter</h1>
                <Navbar/>
            </div>
        );
    }
}

export default Main