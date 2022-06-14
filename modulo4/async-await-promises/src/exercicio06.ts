// a) Promise All faz com que os awaits sejam executados de forma assíncrona
// b) Em sistemas com banco de dados muito grandes, é uma forma de ter mais eficiência em enviar as mensagens

import axios from "axios";
import { BASE_URL } from "./constants/url";
import { user } from "./constants/types";

// -----------------------------------------------------------------------------------------

const getSuscribes = async (): Promise<user[]> => {

  const result = await axios.get(`${BASE_URL}/subscribers`)
  return result.data
}

const sendNotifications = async (users: user[], message: string): Promise<any> => {

  try {

    const promises = users.map((user) => {
      return axios.post(`${BASE_URL}/notifications`, {
        subscriberId: user.id,
        message
      })
    })
    await Promise.all(promises)
    console.log(`Notificações enviadas com sucesso`)
    
  } catch (error: any) {
    const resp = error.response?.data || error.message
    console.log(resp)
  }
}

// -----------------------------------------------------------------------------------------

const main = async (message: string): Promise<void> => {
  try {
    const subscribers = await getSuscribes()
    await sendNotifications(subscribers, message)

  } catch (error: any) {
    const resp = error.response?.data || error.message
    console.log(resp)
  }
}

const newMessage: string = "Olá a todos, Estou aqui!"
main(newMessage)