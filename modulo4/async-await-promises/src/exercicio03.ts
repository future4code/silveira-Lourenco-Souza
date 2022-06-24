import axios from "axios";
import { BASE_URL } from "./constants/url";
import { user } from "./constants/types";

// a) Não.
// b) É sempre melhor usar o any o menos possível

const getSuscribes = async (): Promise<user[]> => {

  const response = await axios.get(`${BASE_URL}/subscribers`)
  return response.data.map((res: any) => {
    const {id, name, email} = res
    return {
      id,
      name,
      email
    }
  })
}

getSuscribes()
  .then(console.log)