import React, {Component} from 'react'
import Dictaphone from '../main/Dictaphone'
import Navbar from '../navbar/Navbar'

class Main extends Component {
    render () {
        return (
            <div className="app">
                <h1 class="centert glitch is-glitching" data-text="fillerfilter">fillerfilter</h1>
                <Dictaphone />
                <Navbar />
            </div>
        );
    }
}

export default Main