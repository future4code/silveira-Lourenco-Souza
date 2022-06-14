import axios from "axios";
import { BASE_URL } from "./constants/url";
import { news, user } from "./constants/types";

// -----------------------------------------------------------------------------------------

const getSuscribes = async (): Promise<user[]> => {

  const result = await axios.get(`${BASE_URL}/subscribers`)
  return result.data
}

const sendNotifications = async (users: user[], message: string): Promise<any> => {

  try {

    for (const user of users) {
      await axios.post(`${BASE_URL}/notifications`, {
        subscriberId: user.id,
        message
      })
      console.log(`Message sent to user ${user.id}`);

    }

    console.log("All notifications sent.");

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