import { useState } from 'react'

import { useGithubUser } from './useGithubUser'

export function GithubUser ({username}) {

    const { data, loading, error } = useGithubUser(username)

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
        {loading && <h1>Loading ...</h1>}
        {error && <h1>There has been an error</h1>}
        {data && <div style={userStyle}>
        <img src={data.avatar_url} style={imgStyle}/>
        <h1>{data.name}</h1>
        <p>{data.location}</p>
        <p>Public repos: {data.public_repos}</p>
        </div>}
    </div>
    )
}