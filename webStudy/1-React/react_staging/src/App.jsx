import React, {Component} from 'react';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="enclosure"></div>
            </div>
        );
    }
}
