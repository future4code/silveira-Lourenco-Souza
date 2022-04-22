import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {Container, ContainerPerson, ContainerButton, Button, Img} from './ChoosePage-style'

import {BASE_URL} from '../../../constants/URL'



const ChoosePage = () => {

  const [profile, setProfile] = useState({})

  const getProfile = () => {
    axios
    .get(`${BASE_URL}/person`)
    .then((res) => {
      setProfile(res.data.profile)
    })
    .catch((err) => {
      console.log(err.data.response);
    })
  }

useEffect(() => {
  getProfile()
}, [])

  const onClickYes = () => {
    console.log('Sim...');
  }

  const onClickNo = () => {
    getProfile()
  }


  return (
    <Container>
      <ContainerPerson>
        <Img src={profile.photo} alt={`foto de ${profile.name}`} />
        <p>{profile.bio}</p>
      </ContainerPerson>
      <ContainerButton>
        
        <Button onClick={onClickNo} >No</Button>
        <Button onClick={onClickYes} >Ok</Button>

      </ContainerButton>
    </Container>
  )
}

export default ChoosePage