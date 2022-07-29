import React from "react";
import { Welcome } from "./hello";

export class InteractiveWelcome extends React.Component {

    state = {
        name: ''
    }

    handleInputChange = (event) => {
       const value = event.target.value

       this.setState ({
        name: value
       })
    }

    render () {
        return (
            <div>
                <Welcome name={this.state.name}/>
                <input 
                    name="name" 
                    value={this.state.name} 
                    onChange={this.handleInputChange}
                />
            </div>
        )
    }
}



export class Login extends React.Component {

    state = {
        username: '',
        password: '',
        remember: false
    }

    handleFormInputs = (event) => {
        const value = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked
       
        this.setState ({
            [name]: type === "checkbox" ? checked : value
        })
    }

    onLogin = () => {
        this.setState({
            username: this.state.username,
            password: this.state.password
        })
    }

    handleResetState = () => {
        this.setState({
            username: "",
            password: "",
            remember: false
        })
    }

    render () {
        return (
            <div>
                <div>
                    <h2> Login Form </h2>
                    <input name="username" value={this.state.username} onChange={this.handleFormInputs} />
                    <input name="password" type="password" value={this.state.password} onChange={this.handleFormInputs} />
                    <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleFormInputs} />
                </div>

                <div>
                    <button type="submit" onClick={this.onLogin} disabled={!(this.state.username && this.state.password)}> Login </button>
                    <button type="reset" onClick={this.handleResetState}> Reset </button>
                </div>
            </div>
            
        )
    }
}