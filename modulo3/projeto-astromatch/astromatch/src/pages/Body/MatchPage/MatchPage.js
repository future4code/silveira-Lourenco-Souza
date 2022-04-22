import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {BASE_URL} from '../../../constants/URL'
import {Container, ContainerPerson, Img, Name} from './MatchPage-style'



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
      <ContainerPerson key={person.id}>
        <Img src={person.photo} alt={`foto de ${person.name}`} />
        <Name>{person.name}</Name>
      </ContainerPerson>
    )
  })

  return (
    <Container>
      {mapMatches}
    </Container>
  )
}

export default MatchPage