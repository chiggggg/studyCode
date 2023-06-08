import React, {Component} from 'react';
import './Left.scss'
import {Link} from "react-router-dom";

export default class Left extends Component {
    render() {
        return (
            <div className="left">
                <Link className="item" to="/home">Home</Link>
                <Link className="item" to="/about">About</Link>
            </div>
        );
    }
}
