import express, { Request, Response } from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/", (request:Request, response: Response) => {

  response.status(201).send({message: "Hello World!"})
})

app.listen(3003, () => {

  console.log("Server is running in http://localhost:3003")
})

