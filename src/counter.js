import { useState } from "react"

function useCounter (intialValue = 0) {

    const [counter, setCounter] = useState(intialValue)

    function handleCounterIncrement () {
        setCounter ((c) => c + 1)
    }

    function handleCounterDecrement () {
        setCounter ((c) => c - 1)
    }

    function handleCounterReset () {
        setCounter (intialValue)
    }

    return {
        counter: counter,
        onIncrement: handleCounterIncrement,
        onDecrement: handleCounterDecrement,
        onReset: handleCounterReset
    }
}

export function Counter ({intialValue = 0}) {

    const  {counter, onIncrement, onDecrement, onReset } = useCounter(intialValue)

    
    return (
    <div>
        <h2>Counter: {counter} </h2>
        <button onClick={onIncrement} >Increment</button>
        <button onClick={onDecrement} >Decrement</button>
        <button onClick={onReset} >Reset</button>
    </div>
    )
}