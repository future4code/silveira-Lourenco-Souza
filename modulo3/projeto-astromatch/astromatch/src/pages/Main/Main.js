import React, {useState} from 'react'

import { Container } from './Main-style'

import MatchPage from '../Body/MatchPage/MatchPage'
import ChoosePage from '../Body/ChoosePage/ChoosePage'
import HeaderPage from '../../components/Header/HeaderPage/HeaderPager'


const Main = () => {

  const [Page, setPage] = useState(true)

  const onClickPage = () => {
    setPage(!Page)
  }

  const decidePage = () => {
    if(Page === true){
    return( <>
        <HeaderPage position={""} onClickButton={onClickPage} />
        <ChoosePage />
      </>
    )} else {
      return ( <>
          <HeaderPage position={"right"} onClickButton={onClickPage} />
          <MatchPage />
        </>
      )}
  }


    return (
      <Container>

        {decidePage()}

      </Container>
    )
}

export default Main