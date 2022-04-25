import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Like from '../../../components/Loading/Loading'

import {Container, ContainerPerson, ContainerButton, Button, Img, DivParent, DivChild} from './ChoosePage-style'

import {BASE_URL} from '../../../constants/URL'

const headers = {
  "Content-Type": "application/json"
}

const ChoosePage = (props) => {

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
        props.setNoPerson(true)
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

  // const clear = () => {
  //   axios
  //     .put(`${BASE_URL}/clear`, headers)
  //     .then((res) => {
  //       console.log("cleared");
  //       console.log(res.data.message);
  //       // getProfile()
  //       document.location.reload(true);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }

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
        <>
          <Like />
          <p>Carregando...</p>
        </>

      )
    } else {
      return (  
        <DivParent>
          <Img src={profile.photo} alt={`foto de ${profile.name}`} />
          <DivChild>
            <p className='Name'><span>{`${profile.name}, `}</span>{profile.age}</p>
            <p className='Info'>{profile.bio}</p>
          </DivChild>
        </DivParent>
      )
    }
  }

  const personNull = () => {
    if (props.noPerson === true){
      return (
        <>
          <Container>
            <ContainerPerson>
              <Like />
              <p>A sua lista de sugestões acabou...</p>
            </ContainerPerson>

            <ContainerButton>
              <Button onClick={() => onClickNo()} disabled >No</Button>
              <Button onClick={() => choosePerson(profile.id)} disabled >Ok</Button>
            </ContainerButton>



          </Container>
        </>
      )
    } else {
      return (
        <>
          <Container>
            <ContainerPerson>
              {loadingTest()}
            </ContainerPerson>

            <ContainerButton>
              <Button onClick={() => onClickNo()} >No</Button>
              <Button onClick={() => choosePerson(profile.id)} >Ok</Button>
            </ContainerButton>



          </Container>
        </>
      )
    }
  }

  return (
    <>
      {personNull()}
    </>
  )
}

export default ChoosePage