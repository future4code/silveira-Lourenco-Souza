import React from 'react'

import { ContainerMain } from './SignupPage-styled'

import Header from '../../components/Header/Header'
import SingupForm from './SingupForm'

const SignupPage = () => {

  

  return (
    <div>
      <Header />
      <ContainerMain>
          <h1>Olá, boas vindas ao LabEddit ;)</h1>

          <SingupForm />

      </ContainerMain>
    </div>
  )
}

export default SignupPage