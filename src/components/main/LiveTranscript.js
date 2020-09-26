import React, { Component } from 'react'

export class LiveTranscript extends Component {
    render() {
        return (
            <div className="live_transcript_box">
                <header className="live_transcript_header">
                    Live Transcript
                </header>
                <div className="transcript">
                    <p>{this.props.transcript}</p>
                </div>
            </div>
        )
    }
}

export default LiveTranscript