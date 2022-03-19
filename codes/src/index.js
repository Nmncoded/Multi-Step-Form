import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./stylesheets/style.css";
import MainForm from './components/main.js';

function App(){
    return(
        <>
            <MainForm />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById(`root`));