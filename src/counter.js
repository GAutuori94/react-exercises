import React from "react";

export class Counter extends React.Component {

    state = {
        count: this.props.initialValue,
    }

    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + this.props.incrementAmount
                }
            })
        }, this.props.incrementInterval)
    }

    render () {
        return <div>
            <CounterDisplay count={this.state.count} />
        </div>
    }
}


export class CounterDisplay extends React.Component {
    render () {
        return <h1> Count: {this.props.count} </h1>
    }
}