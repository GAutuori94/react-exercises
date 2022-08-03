import React from "react";
import { ClickCounter } from "./clickCounter";
import { ClickTracker } from "./clickTracker";
import { Container } from "./composition";
import { Counter } from "./counter";
import { InteractiveWelcome, Login, UncontrolledLogin } from "./forms";
import { Hello, Welcome } from "./hello";
import { TodoList } from "./lists";

export default class App extends React.Component {
    render () {
        return (
        <Container title="My Awesome Application"> 
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
            <TodoList 
            
                render={
                    (items, handleRemoveItem) => {

                    return (
                        items.map((item, index) => <li key={item + index}>{item} 
                        <button onClick={() => handleRemoveItem(item)}>Remove</button>
                        </li>)
                    )
                }
                }
            >

            </TodoList>
             </Container>
        )
    }
}