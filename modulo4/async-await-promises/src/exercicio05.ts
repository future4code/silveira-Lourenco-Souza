import axios from "axios";
import { BASE_URL } from "./constants/url";
import { news, user } from "./constants/types";

const myNews: news = {
  title: "Mais frio vem por aí!",
  content: "Uma onda de frio está à caminho para deixar o clima ainda mais congelado.",
  date: Date.now()
}



const main = async (news: news): Promise<void> => {
  
  try{

    createNews(news)
    const subscribers = await getAllSubscribers()
    const subscribersIds = getSubscribersIds(subscribers)
    await notifyAllsubscribers(subscribersIds)

  } catch (error: any){
    const resp = error.response?.data || error.message
    console.log(resp);
    
  }
}

main(myNews)