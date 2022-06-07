import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { goToHomePage } from "../routes/coordinator";

export const useProtectedPage = () => {

  const navigate = useNavigate()
  
  useEffect(() => {
    const token = localStorage.getItem("token")
    if(!token){
      goToHomePage(navigate)
    }
  }, [navigate])
}

export default useProtectedPage
