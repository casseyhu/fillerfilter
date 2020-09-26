import React,  {useEffect, useState}  from 'react';

// import * as ReactBootStrap from 'react-bootstrap';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

function Navbar(){
    var stopTime;
    var startTime;
    const [message, setMessage] = useState('');
    const commands = [
        {
          command: 'hello',
          callback: (food) => setMessage(`Your order is for: ${food}`)
        }
    ]
    const { transcript, interimTranscript, resetTranscript } = useSpeechRecognition({commands});
    

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }
    function stopRecording() {
        SpeechRecognition.stopListening();
        stopTime = new Date();
        console.log(stopTime, startTime);
    }
    function startRecording() {
        startTime = new Date();
        console.log("Start recording");
        SpeechRecognition.startListening({continuous: true});
    }
    return (
        <div>        
             <nav className="navbar fixed-bottom ">
                 {/* <a class="navbar-brand"></a> */}
                 <button id="stopButton" onClick={stopRecording}>Stop</button>
                 <button id="startButton" onClick={startRecording}>Start</button>
                 <button id="newButton" onClick={function myfunc() {console.log(transcript)}}>NEW</button>
                 <button id="resetButton" onClick={resetTranscript}>Reset</button>
             </nav>
        </div>
    )
}

export default Navbar