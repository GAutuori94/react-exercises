import { useEffect, useState } from "react"


export function GithubUser ({username}) {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            return response.json()
        })
        .then (json => {
            console.log(json)

            setLoading(false)
            setData(json)
        })
    }, [username])


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
        {data && <div style={userStyle}>
        <img src={data.avatar_url} style={imgStyle}/>
        <h1>{data.name || data.login}</h1>
        <p>{data.location}</p>
        <p>Public repos: {data.public_repos}</p>
        </div>}
    </div>
    )
}