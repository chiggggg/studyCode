import React, {Component} from 'react';
import './index.scss'

export default class Item extends Component {
    state = {
        state: this.props.state,
        id: this.props.id,
        name: this.props.name
    }

    // 勾选
    changeState = () => {
        return (event) => {
            this.setState({
                state: event.target.checked
            }, () => {
                this.props.changeState(this.state);
            });
        }
    }

    // 删除单个按钮，将需要删除的数据向App组件传递，在App组件中删除后，重新将处理好的数据传入Item组件-重绘
    deleteBtn = () => {
        if (window.confirm('是否确认删除该任务?')) {
            this.props.deleteList(this.state.id)
        }
    }


    render() {
        return (
            <div className="item">
                <input onChange={this.changeState()} checked={this.props.state} className="option" type="checkbox"/>
                <div className="name">{this.props.name}</div>
                <button onClick={this.deleteBtn} className="delete">删除</button>
            </div>
        );
    }
}
