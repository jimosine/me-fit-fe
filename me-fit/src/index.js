import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { initialize } from "./keycloak"
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Display a loading screen when connecting to Keycloak
root.render(<h1>Connecting to keycloak</h1>)

initialize()
    .then(() => { // If No Keycloak Error occurred - Display the App
        root.render(
            <App />
        );
    })
    .catch(() => {
        root.render(
            <p>Could Not Connect To Keycloak.</p>
        );
    });


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
