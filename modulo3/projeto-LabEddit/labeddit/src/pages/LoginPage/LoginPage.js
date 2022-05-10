import React from 'react'

import { ContainerPage } from './LoginPage-styled'
import Logo from "../../assets/images/LabEddit-Logo.png"



const LoginPage = () => {
  return (
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
        <button>Continuar</button>
        <button>Crie uma conta!</button>
      </div>
    </ContainerPage>
  )
}

export default LoginPage