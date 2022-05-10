import React from 'react'

const SignupPage = () => {
  return (
    <>
      <p>Header</p>
      <h1>Olá, boas vindas ao LabEddit ;)</h1>

      <div>
        <input type="text" placeholder=' Nome do usuário' />
        <input type="email" placeholder='E-mail' />
        <input type="password" placeholder='Senha' />
      </div>

      <div>
        <h2>Ao continuar, você concorda com o nosso <span>Contrato de usuário</span> e nossa <span>Política de Privacidade</span></h2>
        <div>
          <input type="checkbox" id='sendEmail' />
          <label htmlFor="sendEmail">Eu concordo em receber emails sobre coisas legais no LabEddit</label>
        </div>
        <button>Cadastrar</button>
      </div>
    </>
  )
}

export default SignupPage