import React, {Component} from 'react';
import './App.scss'
import Header from "./components/Header/Header";
import Left from "./components/Left/Left";
import About from "./pages/About/About";
import Home from './pages/Home/Home'
import {Route} from "react-router-dom";


export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Header/>
                <Left/>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
            </div>
        );
    }
}
