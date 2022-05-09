import React from 'react'
import Like from '../../assets/IMG/like.png'

import {Img} from './Loading-style'

const Loading = () => {
  return (
    <>
      <Img src={Like} alt="Carregando..." />
    </>
  )
}

export default Loading