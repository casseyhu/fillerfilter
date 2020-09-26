import React, {Component, useState} from 'react'
import Navbar from '../navbar/Navbar'
import Visualizer from '../visualizer/Visualizer'

class Main extends Component {
    render () {
        document.body.style = 'maxWidth:100%; height: 100vh; overflow: hidden;';
        return (
            <div className="app">
                <h1 class="centert glitch is-glitching" data-text="fillerfilter">fillerfilter</h1>
                <Navbar/>
                <Visualizer/>
            </div>
        );
    }
}

export default Main