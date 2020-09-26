import React, {Component} from 'react'
import {Link} from "react-router-dom"
import '../../css/style.css'

class Entry extends Component {
    render () {
        return <div>
            <div className="entry">
            <h1 className="centert glitch is-glitching" data-text="fillerfilter">fillerfilter</h1>
            </div>
            <Link to='/home'>
                <button id="enterbutton" className="btn red waves-effect lighten-1 z-depth-0"> ENTER </button>
            </Link>
        </div>
    }
}

export default Entry