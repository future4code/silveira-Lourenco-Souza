import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {Container, ContainerPerson, ContainerButton, Button, Img} from './ChoosePage-style'

import {BASE_URL} from '../../../constants/URL'

const headers = {
  "Content-Type": "application/json"
}

const ChoosePage = () => {

  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(true)

  const getProfile = () => {
    setLoading(true)
    axios
    .get(`${BASE_URL}/person`)
    .then((res) => {
      setLoading(false)
      setProfile(res.data.profile)
      if(res.data.profile === null){
        clear()
        console.log("reconhecido!");
      }
    })
    .catch((err) => {
      console.log(err.data.response);
      setLoading(true)
    })
  }

  const choosePerson = (id) => {
    const body = {
      "id": id,
      "choice": true
    }

    axios
      .post(`${BASE_URL}/choose-person`, body, headers)
      .then((res) => {
        getProfile()
        console.log(res.data.isMatch);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const clear = () => {
    axios
      .put(`${BASE_URL}/clear`, headers)
      .then((res) => {
        console.log("cleared");
        console.log(res.data.message);
        getProfile()
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getProfile()
    console.log("ok");
  }, [])

  const onClickNo = () => {
    getProfile()
  }

  const loadingTest = () => {
    if(loading){
      return (
        <p>Carregando...</p>
      )
    } else {
      return (  
        <div>
          <Img src={profile.photo} alt={`foto de ${profile.name}`} />
          <div>
            <p>{profile.name}</p>
            <p>{profile.bio}</p>
          </div>
        </div>
      )
    }
  }

  return (
    <>
      <Container>
        <ContainerPerson>
          {loadingTest()}
        </ContainerPerson>

        <ContainerButton>       
          <Button onClick={() =>  onClickNo()} >No</Button>
          <Button onClick={() => choosePerson(profile.id)} >Ok</Button>
        </ContainerButton>

        <button onClick={clear}>Limpar</button>
      </Container>
    </>
  )
}

export default ChoosePage