import { useNavigate } from 'react-router-dom'

export const GoToHomePage = () => {
  const navigate = useNavigate()
  navigate("/")
}

export const GoToLoginPage = () => {
  const navigate = useNavigate()
  navigate("/login")
}

export const GoToListTripsPage = () => {
  const navigate = useNavigate()
  navigate("/trips/list")
}
