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

            const removebleElements = [...this.state.items]
    
            removebleElements.splice(index, 1)
    
            this.setState({
                items: removebleElements
            })
        }

    render () {

        return (
            <div>
                <h2>My List</h2>
            <div>
                <ul>
                {this.state.items.map((item, index) => <li key={item + index}>{item} 
                <button onClick={this.handleRemoveItem}>Remove</button>
                </li>)}
                
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