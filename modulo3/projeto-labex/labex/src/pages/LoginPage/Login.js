import React from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {

  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate("/")
  }

  const goToAdminHome = () => {
    navigate("/admin/trips/list")
  }


  return (
    <div> <h1>Login</h1 >

      <input type="text" placeholder='E-mail' />
      <input type="text" placeholder='Senha' />
      <button onClick={goToHomePage} >HomePage(Voltar)</button>
      <button onClick={goToAdminHome} >Entrar</button>

    </div>
  )
}

export default Login