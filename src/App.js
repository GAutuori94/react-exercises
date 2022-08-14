import { React } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
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
        <Route path='*' element={<div>
          <h2>Page not found</h2>
          <Link to='/'>Return to Home</Link>
        </div>} />
      </Routes>

      <Link to="/">Home</Link> | <Link to="/counter">Counter</Link> | <Link to="/user/:username">Github User</Link>

    </div>
  )
}
