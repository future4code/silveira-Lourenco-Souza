import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {BASE_URL} from '../../../constants/URL'
import {Container, ContainerPerson, Img, Name, ContainerLoading} from './MatchPage-style'
import Like from '../../../components/Loading/Loading'



const MatchPage = () => {

  const [listaMatch, setListaMatch] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMatch()
  }, [])

  const getMatch = () => {
    axios
    .get(`${BASE_URL}/matches`)
    .then((res) => {
      setListaMatch(res.data.matches)
      setLoading(false)
    })
    .catch((err) => {
      console.log(err.response.data);
      setLoading(true)
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

  const LoadingInterface = () => {
    if(loading === true){
      return(
        <ContainerLoading>
          <Like />
          <p>Carregando...</p>
        </ContainerLoading>
      )
    } else {
      if(listaMatch.length === 0){
        return (
          <ContainerLoading>
            <Like />
            <p>Não há nenhum Match na sua lista...</p>
          </ContainerLoading>
        )

      } else {
        return (
          <Container>
            {mapMatches}
          </Container>
        )
      }
    } 
  }

  return (
    <>
        {LoadingInterface()}
    </>
  )
}

export default MatchPage