import React from 'react'

import { ContainerMain } from './SignupPage-styled'

import Header from '../../components/Header/Header'

const SignupPage = () => {
  return (
    <>
      <Header />
      <ContainerMain>
        <h1>Olá, boas vindas ao LabEddit ;)</h1>

        <div>
          <input type="text" placeholder=' Nome do usuário' />
          <input type="email" placeholder='E-mail' />
          <input type="password" placeholder='Senha' />
        </div>

        <div>
          <p>Ao continuar, você concorda com o nosso <span>Contrato de usuário</span> e nossa <span>Política de Privacidade</span></p>
          <div>
            <input type="checkbox" id='sendEmail' />
            <label htmlFor="sendEmail">Eu concordo em receber emails sobre coisas legais no LabEddit</label>
          </div>
          <button>Cadastrar</button>
        </div>
      </ContainerMain>
    </>
  )
}

export default SignupPage