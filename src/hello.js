import React from "react";

export class Hello extends React.Component {
  render() {
    return ( <div>
            <h1>Hello World</h1>
           <Message />
      </div>
    )
  }
}

export class Message extends React.Component {
  render() {
    return <p> What a beautiful day!</p>
  }
}

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p> Welcome {this.props.name} </p>
        {<Age age={this.props.age}/>}
      </div>
    );
  }
}

Welcome.defaultProps = {
  name: "Giorgio",
};


export class Age extends React.Component {
    render(){
        return (
            <div> 
             { this.props.age > 18 
             ? <p> Your age is {this.props.age}</p>
             : <p> You are very young</p>    }
            </div>
        )
    }
}