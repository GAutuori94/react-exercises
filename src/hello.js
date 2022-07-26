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
        <p> Welcome {this.props.name} </p>
        <p> Your age is {this.props.age}</p>
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: "Giorgio",
};
