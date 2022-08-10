import { useMemo } from "react"

export function FilteredList ({list}){

    const filteredList = useMemo(() => {
        return list.filter((person) => person.age > 18)
    }, [list])

    return (
    <div style={{padding: '10px', border: '1px solid black', height: '100%', width: '20%'}}>
        <h1>List</h1>
        <div>
            {filteredList.map((person) => (<li style={{marginBottom: '20px', display: 'flex', flexDirection: 'column'}} key={person.name + person.id}><span>Name: {person.name}</span><span>Age: {person.age}</span></li>))}
        </div>
    </div>
    )
}