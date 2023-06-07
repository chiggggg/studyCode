import React, {Component} from 'react';
import './index.scss'

export default class Header extends Component {

    // 回车事件，向App传递需要添加的对象
    onKeyup = (e) => {
        if (e.keyCode === 13) {
            this.props.add(this.input.value)
            this.input.value = ''
        }
    }

    render() {
        return (
            <div className="header">
                <input type="text" ref={inputValue => this.input = inputValue} onKeyUp={this.onKeyup}
                       className="layout headerInput" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }
}
