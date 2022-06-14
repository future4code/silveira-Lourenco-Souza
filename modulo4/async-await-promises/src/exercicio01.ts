import axios from "axios";
import { BASE_URL } from "./constants/url";

// ###########################################################################################
// Exercício 1

// a) https://labenews.herokuapp.com/subscribers
// b) ?

const getSuscribes = async (): Promise<any[]>=> {
  
  const result = await axios.get(`${BASE_URL}/subscribers`)
  return result.data
}

getSuscribes()
  .then(console.log)