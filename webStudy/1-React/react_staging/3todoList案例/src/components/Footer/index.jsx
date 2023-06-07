import React, {Component} from 'react';
import './index.scss'

export default class Footer extends Component {
    state = {
        all: false
    }
    checkedAll = (event) => {
        this.setState({
            all: event.target.checked
        }, () => {
            this.props.checkedAll(this.state.all)
        })
    }

    getFinish = () => {
        return this.props.allList.filter(e => e.state === true).length
    }

    deleteFinish = () => {
        if(window.confirm('是否删除已完成的任务')){
            this.props.deleteFinish(true)
            this.setState({
                all:false
            })
        }
    }

    render() {
        return (
            <div className="footer">
                <input onChange={this.checkedAll} checked={this.state.all} className="option" type="checkbox"/>
                <div className="statistics">已完成{this.getFinish()} / 全部{this.props.allList.length}</div>
                <button className="deleteBtn" onClick={this.deleteFinish}>清除已完成</button>
            </div>
        );
    }
}
