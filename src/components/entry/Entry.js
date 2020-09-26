import React, {Component} from 'react'
import {Link} from "react-router-dom"
import '../../css/style.css'

class Entry extends Component {
    render () {
        return <div>
            <div className="entry">
            <h1 className="centert glitch is-glitching" data-text="fillerfilter" style={{float:"left"}}>fillerfilter</h1>
            <Link to='/home'>
                <button id="enterbutton" className="btn red waves-effect lighten-1 z-depth-0"> <img src="http://www.elitek911.com/images/right-arrows-2x.png" width="50px" height="50px"></img> </button>
            </Link>
            </div>
            
        </div>
    }
}

export default Entry