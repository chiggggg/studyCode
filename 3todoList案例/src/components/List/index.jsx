import React, {Component} from 'react';
import './index.scss'
import Item from '../Item'

export default class List extends Component {
    render() {
        const {listsArr, changeState, deleteList} = this.props
        if (listsArr.length === 0) {
            return (
                <div className="noList">
                    暂无代办任务
                </div>
            );
        } else {
            return (
                <div className="list">
                    {
                        listsArr.map((item) => {
                            return <Item {...item} changeState={changeState} deleteList={deleteList} key={item.id}/>
                        })
                    }
                </div>
            );
        }

    }
}
