import React, {useState} from 'react'
import axios from 'axios'

import { BASE_URL } from '../../constants/URL'
import { Container } from './Main-style'
import Button from '@mui/material/Button';


import MatchPage from '../Body/MatchPage/MatchPage'
import ChoosePage from '../Body/ChoosePage/ChoosePage'
import HeaderPage from '../../components/Header/HeaderPage/HeaderPager'

const headers = {
  "Content-Type": "application/json"
}


const Main = () => {

  const [Page, setPage] = useState(true)
  const [noPerson, setNoPerson] = useState(false)


  const onClickPage = () => {
    setPage(!Page)
  }

  const decidePage = () => {
    if(Page === true){
    return( <>
        <HeaderPage position={""} onClickButton={onClickPage} />
        <ChoosePage 
          setNoPerson={setNoPerson}
          noPerson={noPerson}
        />
      </>
    )} else {
      return ( <>
          <HeaderPage position={"right"} onClickButton={onClickPage} />
          <MatchPage />
        </>
      )}
  }

  const clear = () => {
    axios
      .put(`${BASE_URL}/clear`, headers)
      .then((res) => {
        console.log("cleared");
        console.log(res.data.message);
        // getProfile()
        document.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      })
  }


    return (
      <>
        <Container>

          {decidePage()}
          <Button variant='outlined' color='error' style={{margin: "5px"}} onClick={clear}>Limpar swipes e matches</Button>

        </Container>
      </>

    )
}

export default Main