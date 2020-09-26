import React, { Component } from 'react'

export class LiveTranscript extends Component {
    render() {
        return (
            <div className="live_transcript_box">
                <h5 className="live_transcript_header">
                    LIVE TRANSCRIPT
                </h5>
                <div className="transcript">
                    <p>{this.props.transcript}</p>
                </div>
            </div>
        )
    }
}

export default LiveTranscript