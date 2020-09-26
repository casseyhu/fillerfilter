import React, { Component } from 'react'
import SpeechToText from './components/main/SpeechToText';
import Navbar from './components/navbar/Navbar';
import Stats from './components/stats/Stats';


export class App extends Component {
    render() {
        return (
            <div className="app">
                <Navbar /> 
                <SpeechToText/>
                <Stats />
            </div>
        );
    }
    
}

export default App;