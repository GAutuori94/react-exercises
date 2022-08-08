import React from "react";
import { useState, useEffect } from "react";

export function Counter ({initialValue = 0, incrementAmount = 1, incrementInterval = 1000}) {

    const [counter, setCounter] = useState (initialValue)

    useEffect(() => {
        console.log('I have mounted')
        const interval = setInterval(() => {
            setCounter((counter) => counter + incrementAmount)
        }, incrementInterval)

        return () => {
            clearInterval(interval)
            console.log('I have unmounted')
        }
    }, [counter])

    return (
        <div>
            <h2>Counter: {counter} </h2>
        </div>
    )
}