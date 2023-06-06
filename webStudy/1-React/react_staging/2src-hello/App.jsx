import React, {Component} from "react"; // 引入默认暴露的React，同时引入单独暴露的Component
import Hello from "./components/Hello";

export default class App extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="请输入文字"/>
                <Hello/>
            </div>
        )
    }
}
