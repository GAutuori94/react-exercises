import React from "react";

export class Hello extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

export class Message extends React.Component {
  render() {
    return <p> What a beautiful day!</p>;
  }
}

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        {this.props.name 
        ? <p> Welcome {this.props.name} </p>
        : <p> Welcome, new user </p>}
      </div>
    )
  }
}
