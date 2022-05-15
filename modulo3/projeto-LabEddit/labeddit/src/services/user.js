import axios from 'axios'

import { BASE_URL, BASE_HEADER } from '../constants/urls'
import { goToFeedPage } from '../routes/coordinator'

export const login = (body, clear, setErrorMessage, navigate) => {
  axios
    .post(`${BASE_URL}/users/login`, body, BASE_HEADER)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      clear()
      setErrorMessage("")
      goToFeedPage(navigate)
    })
    .catch((err) => {
      setErrorMessage(err.response.data)
      if (err.response.data.message.length > 0) {
        setErrorMessage("Senha deve possuir no mínimo 8 e no máximo 30 caracteres")
      }
    })
}

export const signup = (body, clear, setErrorMessage, navigate) => {
  axios
  .post(`${BASE_URL}/users/signup`, body, BASE_HEADER)
  .then((res) => {
    localStorage.setItem("token", res.data.token)
    clear()
    setErrorMessage("")
    goToFeedPage(navigate)
  })
  .catch((err) => {
    if (err.response.data.message.length > 0) {
      setErrorMessage("Senha deve possuir no mínimo 8 e no máximo 30 caracteres")
    }
  })
}