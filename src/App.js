import React from "react";
import { Counter } from "./counter";
import { Hello, Welcome } from "./hello";

export default class App extends React.Component {
    render () {
        return (
        <div> 
            <Hello />
            <Welcome name={<strong>Giorgio</strong>} age={28} />
            <Counter initialValue={0} incrementAmount={1} incrementInterval={1000} />
             </div>
        )
    }
}