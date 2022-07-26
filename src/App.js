import React from "react";
import { Hello, Message, Welcome } from "./hello";

export default class App extends React.Component {
    render () {
        return (
        <div> 
            <Hello />
            <Message />
            <Welcome name={<strong>Giorgio</strong>} age={28} />
             </div>
        )
    }
}