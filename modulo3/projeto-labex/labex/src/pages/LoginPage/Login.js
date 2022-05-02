import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../constants/URL'


const Login = () => {

  // ----------------------------------------------------------------------------
  // Funções de navegação

  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate("/")
  }

  const goToAdminHome = () => {
    navigate("/admin/trips/list")
  }

  // ----------------------------------------------------------------------------

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  // ----------------------------------------------------------------------------


  const inputEmail = (e) => {
    setEmail(e.target.value)
  }

  const inputSenha = (e) => {
    setSenha(e.target.value)
  }

  const sendLogin = () => {

    const headers = {
      "Content-Type": "application/json"
    }

    const body = {
      email: email, 
      password: senha
    }

    axios
    .post(`${BASE_URL}/login`, body, headers)
    .then((res) => {
      console.log(res.data.token);
      localStorage.setItem('token', res.data.token)
      goToAdminHome()
    })
    .catch((err) => {
      console.log(err.response.data.message);
    })
  }

  // ----------------------------------------------------------------------------


  return (
    <div> <h1>Login</h1 >

      <input type="text" placeholder='E-mail' value={email} onChange={inputEmail} />
      <input type="text" placeholder='Senha' value={senha} onChange={inputSenha} />
      <button onClick={goToHomePage} >HomePage(Voltar)</button>
      <button onClick={sendLogin} >Entrar</button>

      <p>{email}</p>
      <p>{senha}</p>

    </div>
  )
}

export default Login