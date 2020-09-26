import React, { Component } from 'react'
import Highlighter from 'react-highlight-words'
import FillerWords from '../stats/FillerWords'

export class LiveTranscript extends Component {
    render() {
        return (
            <div className="live_transcript_box">
                <header className="live_transcript_header">
                    Live Transcript
                </header>
                <div className="transcript">
                <Highlighter
                    searchWords={FillerWords}
                    autoEscape={true}
                    textToHighlight={this.props.transcript}
                />
                </div>
            </div>
        )
    }
}

export default LiveTranscript