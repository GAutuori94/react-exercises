import { useParams } from 'react-router-dom'
import { GithubUser } from './apiFetcher'


export function ShowGithubUser () {

    const { username } = useParams()

    return <div>
        <GithubUser username={username}/>
        </div>
}
