import React from 'react'

import { ContainerMain } from './Header-styled'
import Logo from "../../assets/images/LabEddit-Logo.png"



const Header = ({isLogged, PostPage}) => {
  return (
    <ContainerMain>
      <button hidden={!PostPage}>Voltar</button>
      <img src={Logo} alt="Logo LabEddit" />
      <button>{isLogged ? "Logout" : "Login"}</button>
    </ContainerMain>
  )
}

export default Header