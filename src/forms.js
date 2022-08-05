import React from "react";
import { useState } from "react";

export function Login () {

    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false
    })

function handleInputChange (event) {
    const {name, type, value, checked} = event.target

    setData((data) => {
        return {
            ...data,
            [name]: type === "checkbox" ? checked : value
        }
    })
} 

console.log(data)

    return (
        <form>
            <input value={data.username} name="username" onChange={handleInputChange} />
            <input value={data.password} name="password" type="password" onChange={handleInputChange} />
            <input value={data.remember} name="remember" type="checkbox" onChange={handleInputChange} />
        </form>
    )
}