import React, {Component} from 'react';
import './App.scss'
import {nanoid} from 'nanoid'
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default class App extends Component {

    state = {
        listsArr: []
    }

    // 随机id
    static randomId = () => {
        return nanoid(10)
    }

    // 将Header传入的数据做处理后添加到总list中
    add = (arg) => {
        const newList = {
            id: App.randomId(),
            state: false,
            name: arg
        }
        this.setState({
            listsArr: [newList, ...this.state.listsArr]
        })
    }

    // 选中
    changeList = (arg) => {
        this.setState({
            listsArr: this.state.listsArr.map((item) => {
                if (item.id === arg.id) {
                    return {
                        ...item,
                        state: arg.state
                    };
                }
                return item;
            })
        })
    }

    // 删除单个任务
    deleteList = (id) => {
        this.setState({
            listsArr: this.state.listsArr.filter((item) => {
                return item.id !== id;
            })
        })
    }

    // 选中全部
    checkedAll = (flag) => {
        this.setState({
            listsArr: this.state.listsArr.map(e => {
                return {
                    ...e,
                    state: flag
                }
            })
        })
    }

    // 删除选中
    deleteFinish = (flag) => {
        if(flag) {
            this.setState({
                listsArr: this.state.listsArr.filter(e=>e.state === false)
            })
        }
    }

    render() {
        return (
            <div className="app">
                <div className="layout enclosure">
                    <Header add={this.add}/>
                    <List changeState={this.changeList} deleteList={this.deleteList} listsArr={this.state.listsArr}/>
                    <Footer allList={this.state.listsArr} checkedAll={this.checkedAll} deleteFinish={this.deleteFinish}/>
                </div>
            </div>
        );
    }
}
