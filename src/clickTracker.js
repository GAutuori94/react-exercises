import React from "react";

export class ClickTracker extends React.Component {

    state = {
        state: 'No button clicked'
    }

    handleButtonClick = (event) => {
        console.log(event.target.name)

        this.setState({
            button: event.target.name
        })
    }

    render (){
        return (
            <div>
                <h1> Button clicked: {this.state.button} </h1> 
                <button name="Button 1" onClick={this.handleButtonClick}>Button 1</button>
                <button name="Button 2" onClick={this.handleButtonClick}>Button 2</button>
                <button name="Button 3" onClick={this.handleButtonClick}>Button 3</button>
            </div>
        )
    }
}