import React from "react";

export function Sum ({numbers}) {
    return (
        <div>
            <h2>The numbers are: {numbers.join(", ")}</h2>
            <h1>The sum of the numbers is: {numbers.reduce((number, sum) => sum + number, 0)}</h1>
        </div>
    )
}