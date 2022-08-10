import { FilteredList } from "./list.js";


const list = [
    {name: 'Giorgio', id: 1, age: 20},
    {name: 'Luca', id: 2, age: 26},
    {name: 'Alberto', id: 3, age: 12},
    {name: 'Filippo', id: 4, age: 17},
    {name: 'Marika', id: 5, age: 18},
    {name: 'Francesca', id: 6, age: 27},
    {name: 'Maria', id: 7, age: 20},
    {name: 'Emiliano', id: 8, age: 14},
    {name: 'Lucia', id: 9, age: 11},
    {name: 'Emanuele', id: 10, age: 30},
]


export function App() {

  return (
    <div>
      <FilteredList list={list} />
    </div>
  )
}
