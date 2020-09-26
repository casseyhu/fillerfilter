import React, {Component} from 'react'
import {Link} from "react-router-dom"

class Entry extends Component {
    render () {
        return <div>
            <div class="entry">
            <h1 class="centert glitch is-glitching" data-text="fillerfilter">fillerfilter</h1>
            </div>
            <Link to='/home'>
                <button id="enterbutton" className="btn red waves-effect lighten-1 z-depth-0"> ENTER </button>
            </Link>
        </div>
    }
}

export default Entry