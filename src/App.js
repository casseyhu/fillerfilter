import React from 'react';
import Dictaphone from './components/main/Dictaphone';
import Navbar from './components/navbar/Navbar';



const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Dictaphone />
        </div>
    );
}

export default App;