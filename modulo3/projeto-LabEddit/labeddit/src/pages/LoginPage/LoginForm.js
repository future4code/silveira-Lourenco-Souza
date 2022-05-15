import React, { useState } from 'react'

import { login } from '../../services/user'

import { goToSignupPage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'

const LoginForm = () => {

  const [form, onChange, clear] = useForm({ email: "", password: "" })
  const [errorMessage, setErrorMessage] = useState("")

  const navigate = useNavigate()

  const onSubmitForm = (event) => {
    event.preventDefault()
    login(form, clear, setErrorMessage, navigate)
  }
  

  return (

    <form onSubmit={onSubmitForm}>
      <input 
        required 
        type="email" 
        placeholder=' Nome' 
        name={"email"} 
        value={form.email} 
        onChange={onChange} 
      />
      <input 
        required 
        type="password" 
        placeholder=' Senha' 
        name={"password"} 
        value={form.password} 
        onChange={onChange} 
      />

      <p>{errorMessage.length > 0 && errorMessage}</p>

      <div>
        <button type='submit' >Fazer Login</button>
        <button onClick={() => goToSignupPage(navigate)} >Crie uma conta!</button>
      </div>
    </form>
  )
}

export default LoginForm