import React, { Component } from 'react'
import Highlighter from 'react-highlight-words'
import FillerWords from '../stats/FillerWords'

export class LiveTranscript extends Component {
    render() {
        return (
            <div className="live_transcript_box">
                <h5 className="live_transcript_header">
                    LIVE TRANSCRIPT
                </h5>
                <div className="transcript">
                <Highlighter
                    searchWords={FillerWords}
                    autoEscape={true}
                    textToHighlight={this.props.transcript}
                    highlightStyle={{backgroundColor: "white"}}
                />
                </div>
            </div>
        )
    }
}

export default LiveTranscript