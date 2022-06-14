import axios from "axios";
import { BASE_URL } from "./constants/url";

// a) https://labenews.herokuapp.com/subscribers
// b) ?

async function getSuscribes(): Promise<any[]>{
  
  const result = await axios.get(`${BASE_URL}/subscribers`)
  return result.data
}

getSuscribes()
  .then(console.log)