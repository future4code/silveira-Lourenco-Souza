import React from 'react'

import { ContainerPage } from './LoginPage-styled'
import Logo from "../../assets/images/LabEddit-Logo.png"
import { goToSignupPage, goToFeedPage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
// import Header from '../../components/Header/Header'


const LoginPage = () => {

  const navigate = useNavigate()

  return (
      <div>
      <ContainerPage>
        <div>
          <img src={Logo} alt="Logo LabEddit" />
          <h1>LabEddit</h1>
          <p>O projeto de rede social da Labenu</p>
        </div>

        <div>
          <input type="text" placeholder=' Nome' />
          <input type="text" placeholder=' Senha' />
        </div>

        <div>
          <button onClick={() => goToFeedPage(navigate)} >Continuar</button>
          <button onClick={() => goToSignupPage(navigate)} >Crie uma conta!</button>
        </div>
      </ContainerPage>
    </div>
  )
}

export default LoginPage