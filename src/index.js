import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import AppRouter from "./routers/AppRouter";

import {createStore} from "redux";


const initialState = {
    count: 0
}
const store = createStore((state=initialState) => {
    return state;
});




ReactDOM.render(
    <AppRouter/>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
