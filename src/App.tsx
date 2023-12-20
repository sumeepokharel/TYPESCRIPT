import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

interface GitHubUser {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string // Note: This URL includes a placeholder for other_user
  gists_url: string // Note: This URL includes a placeholder for gist_id
  starred_url: string // Note: This URL includes placeholders for owner and repo
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string // Note: This URL includes a placeholder for privacy
  received_events_url: string
  type: string
  site_admin: boolean
}
function App() {
  const [users, setUsers] = useState([])
  useEffect(function () {
    //then method
    //fetch('https://api.github.com/users')
    // .then((res) => res.json())
    //.then((data) => {

    //  setUsers(data)
    //async await
    async function getUsers() {
      const response = await axios('https://api.github.com/users')
      setUsers(response.data)
    }
    getUsers()

  }, [])

  return users.map((user: GitHubUser) => {
    return (
      <div className="container" key={user.id}>
        <img className="userImage" src={user.avatar_url} alt="" />
        <h1>{user.login}</h1>
      </div>
    )
  })
}

export default App