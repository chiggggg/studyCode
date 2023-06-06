import React, {Component} from 'react';

export default class Header extends Component {
    state = {

    }
    render() {
        return (
            <div className="header">
                <input type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }
}
