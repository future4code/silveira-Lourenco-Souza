import React from 'react'

import { ContainerMain, Text, ContainerVotesAndComments, Container } from "./PostCard-styled"
import UpArrowOutlined from "../../assets/images/arrows/upArrowOutlined.svg"
import DownArrowOutlined from "../../assets/images/arrows/downArrowOutlined.svg"
import Comment from "../../assets/images/comment.svg"
import { useNavigate } from 'react-router-dom'
import { goToPostDetailsPage } from '../../routes/coordinator'



const PostCard = ({ post, clickable, username, body, voteSum, commentCount}) => {

  const navigate = useNavigate()

  return (
    <ContainerMain onClick={clickable ? () => goToPostDetailsPage(navigate, "id") : undefined } >
      <span>Enviado por: {username}</span>
      <Text>{body}</Text>
      <ContainerVotesAndComments>
        <Container>
          <img src={UpArrowOutlined} alt="/\" />
          <p>{voteSum === null && 0}{voteSum}</p> {/* Aqui vai as props de quantidade de likes */}
          <img src={DownArrowOutlined} alt="\/" />
        </Container>

        <Container hidden={post} >
          <img src={Comment} alt="comments"/>
          <p>{commentCount === null && 0}{commentCount}</p> {/* Aqui vai as props com a quantidade de comentários */}
        </Container>
      </ContainerVotesAndComments>
    </ContainerMain>
  )
}

export default PostCard