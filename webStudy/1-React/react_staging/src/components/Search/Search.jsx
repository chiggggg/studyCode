import React, {Component} from 'react';

export default class Search extends Component {

    search = () => {
        const {keyword: {value}} = this
        this.props.getKeyword(value.trim())
    }

    render() {
        return (
            <div className="search">
                <h2>搜索github用户</h2>
                <div>
                    <input ref={e => this.keyword = e} type="text" placeholder="请输入关键字"/>
                    <button onClick={this.search}>搜索</button>
                </div>
            </div>
        );
    }
}
