import React, {useState} from 'react'

import { Container } from './Main-style'

import HeaderPageOne from '../../components/Header/HeaderPageOne/HeaderPageOne'
import HeaderPageTwo from '../../components/Header/HeadePageTwo/HeaderPageTwo'
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
        <HeaderPage position={"right"} onClickButton={onClickPage} />
        <ChoosePage />
      </>
    )} else {
      return ( <>
          <HeaderPage position={""} onClickButton={onClickPage} />
          <MatchPage />
        </>
      )}
  }


    return (
      <Container>

        {/* {Page === true ? (
          <>
            <HeaderPageOne onClickButton={onClickPage} />
            <ChoosePage />
          </>
          ) : (
          <>
              <HeaderPageTwo onClickButton={onClickPage} />
            <MatchPage />
          </>
        )} */}

        {decidePage()}

      </Container>
    )
}

export default Main