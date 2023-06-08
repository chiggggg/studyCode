import React, {Component} from 'react';
import './item.scss'

export default class Item extends Component {
    render() {
        const {avatar, name, address} = this.props
        return (
            <a className="item" href={address} target="_blank" rel="noreferrer">
                <div className="avatar" style={{backgroundImage: `url(${avatar})`}}></div>
                <div className="name">{name}</div>
            </a>
        );
    }
}
