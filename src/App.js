import React from "react";
import { Hello, Message, Welcome } from "./hello";

export default class App extends React.Component {
    render () {
        return (
        <div> 
            <Hello />
            <Message />
            <Welcome name="Giorgio" />
             </div>
        )
    }
}