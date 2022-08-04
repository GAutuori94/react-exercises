import React from "react";

export class TodoList extends React.Component {

    state = {
        items: [],
        newItem: ""
    }

    handleInputRead = (event) => {
        const value = event.target.value

        this.setState ({
            newItem: [value]
        })
    }

    handlerAddNewItem = () => {
        this.setState({
            items: [...this.state.items, this.state.newItem],
            newItem: ""
        })
    }

    handleResetList = () => {
        this.setState({
            items: []
        })
    }

    handleRemoveItem = (index) => {

        const removableElements = [...this.state.items]

        const removedItem = removableElements.splice(index, 1)
        console.log(removedItem)
        this.setState({
            items: removableElements
        })
    } 


    render () {

        return (
            <div>
                <h2>My List</h2>
            <div>
                <ul>
                {this.props.render(this.state.items, this.handleRemoveItem)}
                
                </ul>
            </div>
            <div>
                <input type="text" name="item" value={this.state.newItem} onChange={this.handleInputRead}/>
                <button type="submit" onClick={this.handlerAddNewItem}>Add</button>
                <button type="reset" onClick={this.handleResetList}>Reset</button>
            </div>
            </div>
        )
    }
}