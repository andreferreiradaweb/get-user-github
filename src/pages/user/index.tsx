import { useEffect, useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import axios from 'axios'

import { Layout } from "../../components/layout"
import 'leaflet/dist/leaflet.css'

import {
  Wrapper,
  HeaderContainer,
  HeaderLeft,
  HeaderList,
  HeaderListRow,
  MapStyledContainer
} from './styled'

import { useUserContext } from "../../contexts/user"

export const User: React.FC = () => {
  const { user } = useUserContext()
  const [position, setPosition] = useState<[number, number] | null>(null)
  const [repos, setRepos] = useState<[{name: string, url: string}] | null>(null)

  useEffect(() => {
    const getCoordenates = async () => {
      if (user === null) return
      const { data } = await axios.get(`http://nominatim.openstreetmap.org/search?q=${user.location}&format=json&polygon=1&addressdetails=1`)
      const { lat, lon } = data[0]
      setPosition([Number(lat), Number(lon)])
    }
    getCoordenates()
  }, [user])

  useEffect(() => {
    const getStarredRepos = async () => {
      if (user === null) return
      const { data } = await axios.get(`https://api.github.com/users/${user.login}/starred`)
      const serializedData = data.map((repo: any) => {
        return {name: repo.name, url: repo.clone_url}
      })
      setRepos(serializedData)
    }
    getStarredRepos()
  },[user])

  return (
    <Layout>
      <>
        {user &&
          <Wrapper>
            <HeaderContainer>
              <HeaderLeft>
                <img src={String(user.avatar_url)} alt="" />
                <strong>{user.name}</strong>
                <p>{user.bio}</p>
                <a href={String(user.blog)} target="_new">{user.blog}</a>
              </HeaderLeft>
              <HeaderList>
                { repos && (
                  repos.map((repo) => (
                    <HeaderListRow>
                      <p>{repo.name}</p>
                      <a href={repo.url}>{repo.url}</a>
                    </HeaderListRow>
                  ))
                )}
              </HeaderList>
            </HeaderContainer>
            <MapStyledContainer className="test-thiago">
              {position && (
                <MapContainer style={{ height: '200px', borderRadius: '0 0 20px 20px' }} center={position} zoom={15}>
                  <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                </MapContainer>
              )}
            </MapStyledContainer>
          </Wrapper>
        }
      </>
    </Layout>
  )
}
