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
            <div class="row" style={{display:'flex', justifyContent:'center', margin:'1% 3%'}}>
                <div style={{height: '500px', float:'left', width:'38%', marginRight:'4%'}}>
                    <LiveTranscript transcript={transcript} />
                </div>
                <div style={{height: '500px', float:'left', width:'58%'}}>
                    <Stats transcript={transcript} timeElapsed={timeElapsed} />
                </div>
            </div>
            <nav className="navbar fixed-bottom ">
                <button className="button" id="stopButton" onClick={stopRecording} title="Stop Recording">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/709/709714.svg" width="40px" height="40px"/>
                </button>
                <button className="button" id="startButton" onClick={startRecording} title="Start Recording">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/907/907856.svg" width="40px" height="40px"/>
                </button>
                <button className="button" id="resetButton" onClick={resetTranscript} title="Restart Recording">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/2/2046.svg" width="40px" height="40px"/>
                </button>
            </nav>
        </div>
    )
}

export default Navbar