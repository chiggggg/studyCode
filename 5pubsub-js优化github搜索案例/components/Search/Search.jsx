import React, {Component} from 'react';
import {getAvatar} from "../../api";
import pubsub from 'pubsub-js'

export default class Search extends Component {

    search = () => {
        const {keyword: {value}} = this
        pubsub.publish('getUserList', {loading: true, first: false})
        getAvatar(value.trim()).then(res => {
            if (res.items.length > 0) {
                pubsub.publish('getUserList', {
                    lists: res.items,
                    loading: false,
                    first: false,
                    noList: false,
                    err: null
                })
            } else {
                pubsub.publish('getUserList', {lists: res.items, loading: false, noList: true, err: null})
            }

        }).catch(err => {
            console.error(err.message)
            pubsub.publish('getUserList', {err})
        })
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
