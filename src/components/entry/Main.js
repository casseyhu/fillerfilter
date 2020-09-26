import React, {Component, useState} from 'react'
import Navbar from '../navbar/Navbar'

class Main extends Component {
    render () {
        return (
            <div className="app">
                <h1 class="centert glitch is-glitching" data-text="fillerfilter">fillerfilter</h1>
                <Navbar/>
            </div>
        );
    }
}

export default Main