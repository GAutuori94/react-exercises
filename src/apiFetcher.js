import { useGithubUser } from './useGithubUser'
import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

export function GithubUser ({username}) {

    const { user, error, isLoading } = useGithubUser(username)

    const userStyle = {
        width: "15%",
        height: "100%",
        border: "2px solid black",
        borderRadius: "15px",
        padding: "10px",
        backgroundColor: "lightBlue"
    }

    const imgStyle = {
        width: "150px",
        height: "150px"
    }

    return (<div>
        {isLoading && <h1>Loading ...</h1>}
        {error && <h1>There has been an error</h1>}
        {user && <div style={userStyle}>
        <img src={user.avatar_url} style={imgStyle}/>
        <h1>{user.name}</h1>
        <p>{user.location}</p>
        <p>Public repos: {user.public_repos}</p>
        </div>}
    </div>
    )
}


export function GithubUserList () {

    const [usernamesArray, setUsernamesArray] = useState([])
    const [input, setInput] = useState('')

    function handleInputChange (event) {
        setInput(event.target.value)
    }

    function handleElementSubmit (event) {
        setUsernamesArray([...usernamesArray, input])
    }


    return <div>
        <ul>
            {usernamesArray.map((githubElement, index) => <li key={githubElement + index}> <Link to={`${githubElement}`}>Github user: {githubElement}</Link> </li>)}
        </ul>
        <Outlet />
        <input name="username" onChange={handleInputChange}/>
        <button type="submit" onClick={handleElementSubmit} >Add GitHub Username</button>
    </div>
}