import axios from "axios";
import { BASE_URL } from "./constants/url";

  // a) Somente muda a primeira linha.

const getSuscribes = async (): Promise<any[]> => {

  const result = await axios.get(`${BASE_URL}/subscribers`)
  return result.data
}

getSuscribes()
  .then(console.log)

