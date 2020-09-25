import React, {useEffect, useState} from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const Dictaphone = () => {
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
            <button onClick={startRecording}>Start</button>
            <button onClick={stopRecording}>Stop</button>
            <button onClick={function myfunc() {console.log(transcript)}}>NEW</button>
            <button onClick={resetTranscript}>Reset</button>
            <p>{transcript}</p>
            <p>{message}</p>
        </div>
    )
}
export default Dictaphone