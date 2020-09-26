import React, {useEffect, useState} from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import LiveTranscript from './LiveTranscript'

const SpeechToText = () => {
    const [startTime, setStartTime] = useState();
    const [timeElapsed, setTimeElapsed] = useState(0);
    // const [message, setMessage] = useState('');
    // const commands = [
    //     {
    //       command: 'hello',
    //       callback: (food) => setMessage(`Your order is for: ${food}`)
    //     }
    // ]
    const { transcript, interimTranscript, resetTranscript } = useSpeechRecognition(/*{commands}*/);
    

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }

    function stopRecording() {
        const stopTime = new Date();
        SpeechRecognition.stopListening();
        console.log(startTime, stopTime);
        setTimeElapsed((stopTime - startTime)/1000);
    }
    function startRecording() {
        setStartTime(new Date());
        console.log("Start recording", startTime);
        SpeechRecognition.startListening({continuous: true});
    }

    return (
        <div>
            <button onClick={startRecording}>Start</button>
            <button onClick={stopRecording}>Stop</button>
            <button onClick={console.log(transcript)}>NEW</button>
            <button onClick={resetTranscript}>Reset</button>
            <LiveTranscript transcript={transcript}/>
        </div>
    )
}
export default SpeechToText