import React, {useState} from 'react'

import { Container } from './Main-style'

import HeaderPageOne from '../../components/Header/HeaderPageOne/HeaderPageOne'
import HeaderPageTwo from '../../components/Header/HeadePageTwo/HeaderPageTwo'
import MatchPage from '../Body/MatchPage/MatchPage'
import ChoosePage from '../Body/ChoosePage/ChoosePage'



const Main = () => {

  const [Page, setPage] = useState(true)

  const onClickPage = () => {
    setPage(!Page)
  }


    return (
      <Container>

        {Page === true ? (
          <>
            <HeaderPageOne onClickButton={onClickPage} />
            <ChoosePage />
          </>
          ) : (
          <>
              <HeaderPageTwo onClickButton={onClickPage} />
            <MatchPage />
          </>
        )}

      </Container>
    )
}

export default Main