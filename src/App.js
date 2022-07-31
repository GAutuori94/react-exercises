import React from "react";
import { ClickCounter } from "./clickCounter";
import { ClickTracker } from "./clickTracker";
import { Counter } from "./counter";
import { InteractiveWelcome, Login, UncontrolledLogin } from "./forms";
import { Hello, Welcome } from "./hello";
import { TodoList } from "./lists";

export default class App extends React.Component {
    render () {
        return (
        <div> 
            <Hello />
            <Welcome name={<strong>Giorgio</strong>} age={28} />
            <Counter initialValue={0} incrementAmount={1} incrementInterval={1000} />
            <ClickCounter />
            <ClickTracker />
            <br></br>
            <br></br>
            <InteractiveWelcome />
            <Login />
            <br></br>
            <br></br>
            <UncontrolledLogin />
            <br></br>
            <br></br>
            <TodoList />
             </div>
        )
    }
}