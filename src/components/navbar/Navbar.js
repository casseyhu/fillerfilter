import React, { useEffect, useState } from 'react';
import LiveTranscript from '../main/LiveTranscript'
import Stats from "../stats/Stats"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import Visualizer from '../visualizer/Visualizer'

const Navbar = () => {
    const [startTime, setStartTime] = useState();
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [wpm, setWpm] = useState(0);
    const [playing, setPlaying] = useState(false);
    const { transcript, interimTranscript, resetTranscript } = useSpeechRecognition(/*{commands}*/);


    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }

    function stopRecording() {
        let stopButton = document.getElementById('stopButton');
        if(!stopButton.disabled) {
            console.log('testing')
            const stopTime = new Date();
            setPlaying(false);
            SpeechRecognition.stopListening();
            if (timeElapsed + (stopTime - startTime) / 1000)
                setWpm(Math.round(60*transcript.split(' ').length/(timeElapsed + (stopTime - startTime) / 1000) * 10) / 10);
            else
                setWpm(0);
            setTimeElapsed(timeElapsed + (stopTime - startTime) / 1000);
            stopButton.disabled = true;
            stopButton.style.backgroundColor = '#A1A4A5';
            let startButton = document.getElementById('startButton');
            startButton.disabled = false;
            startButton.style.backgroundColor = '#F7F3ED';
        }
    }
    function startRecording() {
        let startButton = document.getElementById('startButton');
        if(!startButton.disabled) {
            setPlaying(true);
            setStartTime(new Date());
            console.log("Start recording", startTime);
            SpeechRecognition.startListening({ continuous: true });
            startButton.disabled = true;
            startButton.style.backgroundColor = '#A1A4A5';
            let stopButton = document.getElementById('stopButton');
            stopButton.disabled = false;
            stopButton.style.backgroundColor = '#F7F3ED';
        }
    }
    function reset() {
        setTimeElapsed(0);
        setWpm(0);
        resetTranscript();
        let startButton = document.getElementById('startButton');
        startButton.disabled = false;
        startButton.style.backgroundColor = '#F7F3ED';
        let stopButton = document.getElementById('stopButton');
        stopButton.disabled = true;
        stopButton.style.backgroundColor = '#A1A4A5';
    }
    
    return (
        <div>
            <div class="row" style={{display:'flex', justifyContent:'center', margin:'1% 3%'}}>
                <div style={{height: '500px', float:'left', width:'38%', marginRight:'4%'}}>
                    <LiveTranscript transcript={transcript} />
                </div>
                <div style={{height: '500px', float:'left', width:'58%'}}>
                    <Stats transcript={transcript} wpm={wpm} />
                </div>
                
            </div>
            <Visualizer playing={playing}/>
            <nav className="navbar fixed-bottom ">
                <button className="button" id="stopButton" onClick={stopRecording} title="Stop Recording" style={{backgroundColor:'#A1A4A5'}}>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/709/709714.svg" width="40px" height="40px"/>
                </button>
                <button className="button" id="startButton" onClick={startRecording} title="Start Recording">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/907/907856.svg" width="40px" height="40px"/>
                </button>
                <button className="button" id="resetButton" onClick={reset} title="Restart Recording">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/2/2046.svg" width="40px" height="40px"/>
                </button>
            </nav>
        </div>
    )
}

export default Navbar