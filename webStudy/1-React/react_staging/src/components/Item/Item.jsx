import React, {Component} from 'react';
import './item.scss'

export default class Item extends Component {
    render() {
        const {avatar,name} = this.props
        return (
            <div className="item">
                <div className="avatar" style={{backgroundImage: `url(${this.props.avatar})`}}></div>
                <div className="name">{this.props.name}</div>
            </div>
        );
    }
}
