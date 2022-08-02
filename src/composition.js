import React from "react";

export class Container extends React.Component{
    render () {

        const containerStyle = {
            backgroundColor: "white",
            border: "2px solid red",
            padding: "10px"
        }

        return (
        <div className="container" style={containerStyle}>
            {this.props.children}
        </div>
        )
    }
}