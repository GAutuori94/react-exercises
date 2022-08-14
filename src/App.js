import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { ClickCounter } from './counter'
import { Welcome } from './hello'

export function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Welcome name='Giorgio' />} />
        <Route path='/counter' element={<ClickCounter />} />
      </Routes>
    </div>
  )
}
