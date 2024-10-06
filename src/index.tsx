import React from 'react';
import ReactDom from 'react-dom';
// import { Provider } from 'react-redux';
import App from './app';

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);