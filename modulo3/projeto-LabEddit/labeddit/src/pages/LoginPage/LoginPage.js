import React from 'react'

import { ContainerPage } from './LoginPage-styled'
import Logo from "../../assets/images/LabEddit-Logo.png"
import { goToSignupPage, goToFeedPage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
// import Header from '../../components/Header/Header'


const LoginPage = () => {

  const [form, onChange, clear] = useForm({email: "", password: ""})

  const onSubmitForm = (event) => {
    event.preventDefault()
  }

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
          <form onSubmit={onSubmitForm}>
            <input required type="email" placeholder=' Nome' name={"email"} value={form.email} onChange={onChange} />
            <input required type="password" placeholder=' Senha' name={"password"} value={form.password} onChange={onChange} />
            <div>
              <button type='submit' >Fazer Login</button>
              <button onClick={() => goToSignupPage(navigate)} >Crie uma conta!</button>
            </div>
          </form>
        </div>

      </ContainerPage>
    </div>
  )
}

export default LoginPage