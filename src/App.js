import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Welcome } from './hello'

export function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Welcome name='Giorgio' />} />
      </Routes>
    </div>
  )
}
