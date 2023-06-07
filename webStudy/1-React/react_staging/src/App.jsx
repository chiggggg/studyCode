import React, {Component} from 'react';
import './App.scss'
import Search from "./components/Search/Search";
import List from "./components/List/List";
import {getAvatar} from "./api";

export default class App extends Component {

    state = {
        lists: []
    }
    getKeyword = (word) => {
        getAvatar(word).then(res => {
            this.setState({
                lists: res.items
            })
        })
    }

    render() {
        return (
            <div className="app">
                <Search getKeyword={this.getKeyword}/>
                <List lists={this.state.lists}/>
            </div>
        );
    }
}
