import React, {Component} from 'react'
import {Link} from "react-router-dom"
import Dictaphone from '../main/Dictaphone'

class Main extends Component {
    render () {
        return (
            <div className="app">
                <h1 class="centert glitch is-glitching" data-text="fillerfilter">fillerfilter</h1>
                <Dictaphone />
            </div>
        );
    }
}

export default Main