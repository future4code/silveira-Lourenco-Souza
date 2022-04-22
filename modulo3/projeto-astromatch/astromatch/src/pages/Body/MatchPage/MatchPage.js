import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

import {BASE_URL} from '../../../constants/URL'
import {Container} from './MatchPage-style'

const ContainerPerson = styled.div`
  border: dotted 1px black;
  display: flex;
  align-items: center;
  margin: 10px;
`
const Img = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 90px;
`
const Name = styled.p`
  font-size: 20px;
  margin: 10px;
`

const MatchPage = () => {

  const [listaMatch, setListaMatch] = useState([])

  useEffect(() => {
    getMatch()
  }, [])

  const getMatch = () => {
    axios
    .get(`${BASE_URL}/matches`)
    .then((res) => {
      // console.log(res.data.profile);
      setListaMatch(res.data.matches)
    })
    .catch((err) => {
      console.log(err.response.data);
    })
  }

  const mapMatches = listaMatch.map((person) => {
    return (
      <ContainerPerson>
        <Img src={person.photo} alt={`foto de ${person.name}`} />
        <Name>{person.name}</Name>
      </ContainerPerson>
    )
  })

  console.log(listaMatch);
  return (
    <Container>
      {mapMatches}
    </Container>
  )
}

export default MatchPage