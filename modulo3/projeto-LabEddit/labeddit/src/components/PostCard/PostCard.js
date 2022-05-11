import React from 'react'

import { ContainerMain, Text, ContainerVotesAndComments, ContainerVotes, ContainerComments } from "./PostCard-styled"
import UpArrowOutlined from "../../assets/images/arrows/upArrowOutlined.svg"
import DownArrowOutlined from "../../assets/images/arrows/downArrowOutlined.svg"
import Comment from "../../assets/images/comment.svg"



const PostCard = ({username, post}) => {
  return (
    <ContainerMain>
      <span>Enviado por: {username}</span>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dignissimos reiciendis harum ratione temporibus cupiditate iusto quidem vitae itaque ex.</Text>
      <ContainerVotesAndComments>
        <ContainerVotes>
          <img src={UpArrowOutlined} alt="/\" />
          <p>1.2K</p> {/* Aqui vai as props de quantidade de likes */}
          <img src={DownArrowOutlined} alt="\/" />
        </ContainerVotes>

        <ContainerComments hidden={!post}>
          <img src={Comment} alt="comments" />
           <p>132</p> {/* Aqui vai as props com a quantidade de comentários */}
        </ContainerComments>
      </ContainerVotesAndComments>
    </ContainerMain>
  )
}

export default PostCard