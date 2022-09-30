import { retry } from '@octokit/plugin-retry'
import type { NextPage } from 'next'
import { Octokit } from 'octokit'
import { useEffect, useState } from 'react'

// replace with your acess token 
const ghAcessToken = "ghp_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
const Home: NextPage = () => {
  const OctokitWithRetryPlugin = Octokit.plugin(retry)
  const ghClient = new OctokitWithRetryPlugin({
    auth: ghAcessToken,
  })
  const [user, setUser] = useState("")
  useEffect(() => {
    const getUser = async () => {
      const response = await ghClient.rest.users.getAuthenticated()
      setUser(response.data.login)
    }
    getUser()
  })

  return (
    <>
      Current User: {user}
    </>
  )
}

export default Home
