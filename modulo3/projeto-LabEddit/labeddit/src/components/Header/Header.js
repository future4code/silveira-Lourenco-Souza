import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { ContainerMain } from './Header-styled'
import Logo from "../../assets/images/LabEddit-Logo.png"
import { goToFeedPage, goToHomePage, goToLoginPage } from '../../routes/coordinator'



const Header = ({postPage}) => {

  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

  const logout = () => {
    localStorage.removeItem("token")
  }

  const rightButtonAction = () => {
    if(token){
      logout()
      setRightButtonText("Login")
      goToLoginPage(navigate)
    } else {
      goToLoginPage(navigate)
    }
  }

  return (
    <ContainerMain>
      <button hidden={!postPage} onClick={() => goToFeedPage(navigate)}>Voltar</button>
      <img src={Logo} alt="Logo LabEddit" />
      <button onClick={rightButtonAction}>{rightButtonText}</button>
    </ContainerMain>
  )
}

export default Header