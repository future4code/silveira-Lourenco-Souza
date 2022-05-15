import React from 'react'

import { goToSignupPage } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'

const LoginForm = () => {

  const [form, onChange, clear] = useForm({ email: "", password: "" })

  const onSubmitForm = (event) => {
    event.preventDefault()
  }

  const navigate = useNavigate()

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
      
      <div>
        <button type='submit' >Fazer Login</button>
        <button onClick={() => goToSignupPage(navigate)} >Crie uma conta!</button>
      </div>
    </form>
  )
}

export default LoginForm