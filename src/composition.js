import React from "react";

export class Container extends React.Component {
  render() {
    const containerStyle = {
      backgroundColor: "white",
      border: "2px solid red",
      padding: "10px",
    };

    return (
      <div className="container" style={containerStyle}>
        <div className="title__container"><h1>{this.props.title}</h1></div>
        <hr />
        <div className="children__container">{this.props.children}</div>
      </div>
    )
  }
}
