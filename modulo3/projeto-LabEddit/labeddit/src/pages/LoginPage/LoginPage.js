import React from 'react'

import { ContainerPage } from './LoginPage-styled'
import Logo from "../../assets/images/LabEddit-Logo.png"
import LoginForm from './LoginForm'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

import { goToSignupPage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'





const LoginPage = () => {

  const navigate = useNavigate()


  useUnprotectedPage()

  return (
      <div>
      <ContainerPage>
        <div>
          <img src={Logo} alt="Logo LabEddit" />
          <h1>LabEddit</h1>
          <p>O projeto de rede social da Labenu</p>
        </div>

        <LoginForm />

        <button onClick={() => goToSignupPage(navigate)} >Crie uma conta!</button>

      </ContainerPage>
    </div>
  )
}

export default LoginPage