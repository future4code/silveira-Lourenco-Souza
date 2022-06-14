import axios from "axios";
import { BASE_URL } from "./constants/url";

type user = {
  id: string,
  name: string,
  email: string
}

// a) Não.
// b) É sempre melhor usar o any o menos possível

const getSuscribes = async (): Promise<user[]> => {

  const result = await axios.get(`${BASE_URL}/subscribers`)
  return result.data
}

getSuscribes()
  .then(console.log)