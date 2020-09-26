import React, { useEffect, useState } from 'react';
import LiveTranscript from '../main/LiveTranscript'
import Stats from "../stats/Stats"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const Navbar = () => {
    const [startTime, setStartTime] = useState();
    const [timeElapsed, setTimeElapsed] = useState(0);
    const { transcript, interimTranscript, resetTranscript } = useSpeechRecognition(/*{commands}*/);


    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }

    function stopRecording() {
        const stopTime = new Date();
        SpeechRecognition.stopListening();
        console.log(startTime, stopTime);
        setTimeElapsed((stopTime - startTime) / 1000);
    }
    function startRecording() {
        setStartTime(new Date());
        console.log("Start recording", startTime);
        SpeechRecognition.startListening({ continuous: true });
    }
    
    return (
        <div>
            <div class="row">
                <div class="col s3">
                    <LiveTranscript transcript={transcript} />
                </div>
                <div class="col s9">
                    <Stats transcript={transcript} timeElapsed={timeElapsed} />
                    <p>Time Elapsed: {timeElapsed} seconds</p>
                </div>
            </div>
            <nav className="navbar fixed-bottom ">
                <button className="button" id="stopButton" onClick={stopRecording}>Stop</button>
                <button className="button" id="startButton" onClick={startRecording}>Start</button>
                {/* <button className="button" id="newButton" onClick={function myfunc() { console.log(transcript) }}>NEW</button> */}
                <button className="button" id="resetButton" onClick={resetTranscript}>Reset</button>
            </nav>
        </div>
    )
}

export default Navbar