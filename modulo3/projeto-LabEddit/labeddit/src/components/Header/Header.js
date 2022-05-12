import React from 'react'

import { ContainerMain } from './Header-styled'
import Logo from "../../assets/images/LabEddit-Logo.png"



const Header = ({isLogged, postPage}) => {
  return (
    <ContainerMain>
      <button hidden={!postPage}>Voltar</button>
      <img src={Logo} alt="Logo LabEddit" />
      <button>{isLogged ? "Logout" : "Login"}</button>
    </ContainerMain>
  )
}

export default Header