import React from 'react'

import { ContainerPage } from './LoginPage-styled'
import Logo from "../../assets/images/LabEddit-Logo.png"
import LoginForm from './LoginForm'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
// import Header from '../../components/Header/Header'


const LoginPage = () => {

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

      </ContainerPage>
    </div>
  )
}

export default LoginPage