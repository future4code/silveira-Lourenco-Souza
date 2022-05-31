type User = {
  id: number,
  name: string,
  phone: string,
  email: string,
  website: string
}

const userDatabase: User[] = [
  {
    id: 1,
    name: "Lourenço",
    phone: "(85) 986453287",
    email: "lourenco.h.colares@gmail.com",
    website: "www.dsouza.dev.br"
  },
  {
    id: 2,
    name: "Gabrielly",
    phone: "(45) 999994081",
    email: "gabi.antunes@gmail.com",
    website: "www.gabi.com.br"
  },
  {
    id: 3,
    name: "Linus",
    phone: "(44) 986917280",
    email: "gabi.antunes@gmail.com",
    website: "www.gabi.com.br"
  },
  {
    id: 4,
    name: "Phoenix",
    phone: "(44) 987006000",
    email: "lara.phoenix@gmail.com",
    website: "www.phoenix.com.br"
  }
] 

import express, { Request, Response } from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())


app.get("/users", (request: Request, response: Response) => {

  response.status(201).send(userDatabase)
})

app.listen(3003, () => {

  console.log("Server is running in http://localhost:3003")
})