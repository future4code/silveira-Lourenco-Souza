import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ContainerMain } from './Header-styled'
import Logo from "../../assets/images/LabEddit-Logo.png"
import { goToFeedPage, goToHomePage, goToLoginPage } from '../../routes/coordinator'



const Header = ({isLogged, postPage}) => {

  const navigate = useNavigate()

  return (
    <ContainerMain>
      <button hidden={!postPage} onClick={() => goToFeedPage(navigate)}>Voltar</button>
      <img src={Logo} alt="Logo LabEddit" />
      <button onClick={isLogged ? () => goToHomePage(navigate) : () => goToLoginPage(navigate)}>{isLogged ? "Logout" : "Login"}</button>
    </ContainerMain>
  )
}

export default Header