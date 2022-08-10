import { useEffect, useRef } from "react"

export function CarDetails({defaultData}) {

    const _formRef = useRef()

    function handleInputChange(event) {
        const model = event.target.elements.model.value
        const year = event.target.elements.year.value
        const color = event.target.elements.color.value

        console.log({
            model,
            year,
            color
        })
    }

    useEffect (() => {
        _formRef.current.reset()
    }, [defaultData])


    return (
    <form ref={_formRef} onSubmit={handleInputChange} style={{width:'200px', padding:'15px', border:'2px solid black', borderRadius:'15px', display:'flex', flexDirection:'column', }}>
        <h1>Car form</h1>

        <h3>Model</h3>
            <input name="model" defaultValue={defaultData.defaultModel}/>

        <h3>Year</h3>
            <input name="year" type="number" defaultValue={defaultData.defaultYear}/>

        <h3>Color</h3>
            <input name="color" defaultValue={defaultData.defaultColor}/>

        <button type="submit">Submit</button>
    </form>
    )
}