import React from "react";
import { Hello, Welcome } from "./hello";

export default class App extends React.Component {
    render () {
        return (
        <div> 
            <Hello />
            <Welcome name={<strong>Giorgio</strong>} age={28} />
             </div>
        )
    }
}