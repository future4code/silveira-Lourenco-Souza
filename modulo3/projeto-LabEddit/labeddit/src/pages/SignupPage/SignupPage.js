import React from 'react'
import styled from 'styled-components'

const ContainerMain = styled.div`
  margin: auto;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
    div{
      display: flex;
      flex-direction: column;
    }
`

const SignupPage = () => {
  return (
    <ContainerMain>
      <p>Header</p>
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
  )
}

export default SignupPage