import React from 'react'

import { ContainerMain, Text, ContainerVotesAndComments, Container } from "./PostCard-styled"
import UpArrowOutlined from "../../assets/images/arrows/upArrowOutlined.svg"
import DownArrowOutlined from "../../assets/images/arrows/downArrowOutlined.svg"
import Comment from "../../assets/images/comment.svg"
import { useNavigate } from 'react-router-dom'
import { goToPostDetailsPage } from '../../routes/coordinator'



const PostCard = ({post, clickable}) => {

  const navigate = useNavigate()

  // const isclickable = (clickable) => {
  //   const id = "asldkf"
  //   return clickable ? goToPostDetailsPage(navigate, id) : ""
  // }

  return (
    <ContainerMain onClick={clickable ? () => goToPostDetailsPage(navigate, "id") : undefined } >
      <span>Enviado por: username</span>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dignissimos reiciendis harum ratione temporibus cupiditate iusto quidem vitae itaque ex.</Text>
      <ContainerVotesAndComments>
        <Container>
          <img src={UpArrowOutlined} alt="/\" />
          <p>1.2K</p> {/* Aqui vai as props de quantidade de likes */}
          <img src={DownArrowOutlined} alt="\/" />
        </Container>

        <Container hidden={post} >
          <img src={Comment} alt="comments"/>
          <p>132</p> {/* Aqui vai as props com a quantidade de comentários */}
        </Container>
      </ContainerVotesAndComments>
    </ContainerMain>
  )
}

export default PostCard