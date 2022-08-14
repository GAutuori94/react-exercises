import { React } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ClickCounter } from './counter'
import { ShowGithubUser } from './githubSearch.js'
import { Welcome } from './hello'

export function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Welcome name='Giorgio' />} />
        <Route path='/counter' element={<ClickCounter />} />
        <Route path='/users/:username' element={<ShowGithubUser />} />
      </Routes>
    </div>
  )
}
