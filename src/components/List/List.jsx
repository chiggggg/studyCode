import React, {Component} from 'react';
import Item from "../Item/Item";
import './List.scss'
import pubsub from 'pubsub-js'

export default class List extends Component {

    state = {
        lists: [],
        loading: false,
        noList: false,
        first: true,
        err: null
    }

    componentDidMount() {
        pubsub.subscribe('getUserList', (_, state) => {
            this.setState(state)
        })
    }

    show = () => {
        if (this.state.err) {
            return <div className="list">{this.state.err.massage}</div>
        }
        if (this.state.first) {
            return <div className="list">请输入关键字并点击搜索获取用户列表</div>
        }
        if (this.state.loading) {
            return (
                <div className="list">loading...</div>
            )
        } else {
            if (this.state.noList) {
                return <div className="list">暂无数据</div>
            } else {
                return this.state.lists.map(e => {
                    const user = {
                        name: e.login,
                        id: e.id,
                        avatar: e.avatar_url,
                        address: e.html_url
                    }
                    return <Item {...user} key={e.id}/>
                })
            }
        }
    }

    render() {
        return (
            <div className="list">
                {
                    this.show()
                }
            </div>
        );
    }
}
