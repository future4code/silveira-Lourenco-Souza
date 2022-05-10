import React from 'react'

import { ContainerMain } from './TextBox-styled'

const TextBox = ({posting}) => {
  return (
    <ContainerMain>
      <textarea rows="10" placeholder={posting ? " Escreva seu post..." : " Adicionar comentário"}></textarea>
      <button>{posting ? "Postar" : "Responder"}</button>
    </ContainerMain>
  )
}

export default TextBox