import axios from "axios";
import { BASE_URL } from "./constants/url";

type news = {
  title:string,
  content: string,
  date: number
}

// a) A tipagem está aqui em cima

const body: news = {
  title: "Brasil é eliminado da copa do Qatar",
  content: "Por já ser campeão 5 vezes, a FIFA decidiu que o Brasil não precisa ir para a copa do mundo. O povo ficou feliz, para surpresa de outros países.",
  date: Date.now()
}

const createNews = async (body: news): Promise<void> => {
  
  try {
    await axios.put(`${BASE_URL}/news`, body)
    
  } catch (error) {
    console.log({message: "erro no envio da notícia"})
  }
}

createNews(body)