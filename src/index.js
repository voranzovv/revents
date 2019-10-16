import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

Sentry.init({dsn: "https://1f8e44542b1948f5be2d9ad2e15edf6f@sentry.io/1781488"});

const rootEl = document.getElementById('root');

let render=()=>{
    ReactDOM.render(<App />, rootEl);
}

if (module.hot){
    module.hot.accept('./App', ()=>{
        setTimeout(render)
    })
}

render()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
