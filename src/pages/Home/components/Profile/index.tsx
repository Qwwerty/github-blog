import { useEffect, useState } from 'react'
import {
  BsBoxArrowUpRight,
  BsBuilding,
  BsFillPeopleFill,
  BsGithub,
} from 'react-icons/bs'
import { api } from '../../../../services/api'
import { Skeleton } from './components/Skeleton'

interface User {
  login: string
  avatar_url: string
  name: string
  followers: number
  company: string
  bio: string
}

export function Profile() {
  const [user, setUser] = useState({} as User)
  const [isLoading, setIsLoading] = useState(false)

  const username = 'qwwerty'
  const countFollowers =
    user.followers === 1
      ? `${user.followers} seguidor`
      : `${user.followers} seguidores`

  async function onGetUser() {
    setIsLoading(true)

    const { data } = await api.get(`/users/${username}`)

    if (data) {
      setUser(data)
    }

    setIsLoading(false)
  }

  function handleNavigateToGithub() {
    const anchor = document.createElement('a')
    anchor.href = `https://github.com/${username}`
    anchor.target = '_blank'
    anchor.click()
  }

  useEffect(() => {
    onGetUser()
  }, [])

  return (
    <Skeleton isLoading={isLoading}>
      <section className="profile-container">
        <aside className="home-profile-image">
          <img src={user.avatar_url} alt="user image" />
        </aside>

        <aside className="home-profile-info">
          <div className="home-profile-info-name">
            <h6>{user.name}</h6>

            <div onClick={handleNavigateToGithub}>
              <span>GITHUB</span>
              <BsBoxArrowUpRight />
            </div>
          </div>

          <p className="home-profile-about">{user.bio}</p>

          <div className="home-profile-location">
            <span className="home-profile-location-item">
              <BsGithub />
              {user.login}
            </span>

            <span className="home-profile-location-item">
              <BsBuilding />
              {user.company}
            </span>

            <span className="home-profile-location-item">
              <BsFillPeopleFill />
              {countFollowers}
            </span>
          </div>
        </aside>
      </section>
    </Skeleton>
  )
}
