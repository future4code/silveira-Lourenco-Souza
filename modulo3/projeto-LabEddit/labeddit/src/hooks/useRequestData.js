import {useState, useEffect} from "react"
import axios from "axios"

import { BASE_HEADER } from "../constants/urls"

const useRequestData = (initialData, url) => {
  const [data, setData] = useState(initialData)

  useEffect(() => {

    axios
    .get(url, {
      headers : {
        ...BASE_HEADER,
        "Authorization": localStorage.getItem("token")
      }
    })
    .then((res) => {
      setData(res.data)
    })
    .catch((err) => {
      console.log(err);
      alert("Ocorreu um erro, tente novamente...")
    })
  }, [url])

  return (data)
}

export default useRequestData