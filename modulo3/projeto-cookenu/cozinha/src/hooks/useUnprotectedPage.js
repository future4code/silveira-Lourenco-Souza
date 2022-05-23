import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToRecipeListPage } from '../routes/coordinator'

const useUnprotectedPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      goToRecipeListPage(navigate)
    }
  }, [navigate])
}

export default useUnprotectedPage