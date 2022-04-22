import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {Container, ContainerPerson, ContainerButton, Button, Img} from './ChoosePage-style'

import {BASE_URL} from '../../../constants/URL'

const headers = {
  "Content-Type": "application/json"
}

const ChoosePage = () => {

  const [profile, setProfile] = useState({})

  const getProfile = () => {
    axios
    .get(`${BASE_URL}/person`)
    .then((res) => {
      setProfile(res.data.profile)
      if(res.data.profile === null){
        clear()
        console.log("reconhecido!");
      }
    })
    .catch((err) => {
      console.log(err.data.response);
      clear()
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

  const loading = () => {
    if(profile === null){
      return (
        <p>Carregando...</p>
      )
    } else {
      return (  
        <>
          <Img src={profile.photo} alt={`foto de ${profile.name}`} />
          <p>{profile.name}</p>
          <p>{profile.bio}</p>
        </>
      )
    }
  }

  return (
    <>
      <Container>
        <ContainerPerson>
          {loading()}
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