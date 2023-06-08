import React, {Component} from 'react';
import './App.scss'
import Search from "./components/Search/Search";
import List from "./components/List/List";


export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Search/>
                <List/>
            </div>
        );
    }
}
