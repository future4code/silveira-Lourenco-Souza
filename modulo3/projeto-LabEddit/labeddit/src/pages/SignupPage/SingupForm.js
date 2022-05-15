import React from 'react'


import useForm from '../../hooks/useForm'

const SingupForm = () => {

  const [form, onChange, clear] = useForm({ username: "", email: "", password: "" })

  const onSubmitForm = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={onSubmitForm}>
      <input 
        required 
        type="text" 
        placeholder=' Nome do usuário' 
        name={"username"} 
        value={form.username} 
        onChange={onChange} 
      />
      <input 
        required 
        type="email" 
        placeholder='E-mail' 
        name={"email"} 
        value={form.email} 
        onChange={onChange} 
      />
      <input 
        required 
        type="password" 
        placeholder='Senha' 
        name={"password"} 
        value={form.password} 
        onChange={onChange} 
      />


      <div>
        <p>Ao continuar, você concorda com o nosso <span>Contrato de usuário</span> e nossa <span>Política de Privacidade</span></p>
        <div>
          <input 
            type="checkbox" 
            id='sendEmail' 
          />
          <label htmlFor="sendEmail">Eu concordo em receber emails sobre coisas legais no LabEddit</label>
        </div>
        <button type='submit' >Cadastrar</button>
      </div>
    </form>
  )
}

export default SingupForm