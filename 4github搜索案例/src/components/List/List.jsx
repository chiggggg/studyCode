import React, {Component} from 'react';
import Item from "../Item/Item";
import './List.scss'

export default class List extends Component {
    render() {
        return (
            <div className="list">
                {
                    this.props.lists.map(e => {
                        const user = {
                            name: e.login,
                            id: e.id,
                            avatar: e.avatar_url,
                            address: e.html_url
                        }
                        return <Item {...user} key={e.id} />
                    })
                }
            </div>
        );
    }
}
