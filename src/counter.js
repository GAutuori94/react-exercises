import React from "react";
import { useState } from "react";

export function ClickCounter ({initialValue = 0}) {

    const [counter, setCounter] = useState (initialValue)

    function handleCounterIncrement() {
        setCounter(counter => counter + 1)
    }

    function handleCounterReset () {
        setCounter(initialValue)
    }

    return (
        <div>
            <h2>Counter: {counter} </h2>
            <button onClick={handleCounterIncrement}> Increment </button>
            <button onClick={handleCounterReset}> Reset </button>
        </div>
    )
}