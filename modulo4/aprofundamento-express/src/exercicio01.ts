import express, { Request, Response } from "express";
import cors from "cors";
import { todoDatabase } from "./todoDatabase";

const app = express();

app.use(express.json());
app.use(cors());

//##################################################################################################################
// types

export type todo = {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

let allData: todo[] = todoDatabase

//##################################################################################################################
// endpoints

app.get("/ping", (req: Request, res: Response) => {
  
  res.send("Pong 🏓")  
})

//-------------------------------------------------------------------------------------------------------------------

app.get("/alldata", (req: Request, res: Response) => {

  res.status(200).send(allData)
})

//-------------------------------------------------------------------------------------------------------------------

app.get("/alldone", (req: Request, res: Response) => {

  const tasksDone: todo[] = allData.filter((task) => {
    return task.completed === true
  })

  res.status(200).send(tasksDone)
})

//-------------------------------------------------------------------------------------------------------------------

app.get("/allnotdone", (req: Request, res: Response) => {

  const tasksNotDone: todo[] = allData.filter((task) => {
    return task.completed === false
  })

  res.status(200).send(tasksNotDone)
})

//-------------------------------------------------------------------------------------------------------------------

app.post("/addtask", (req: Request, res: Response) => {

  const task: todo = req.body

  const verifyId: todo[] = allData.filter((value) => {
    return task.id === value.id
  })

      if(verifyId.length !== 0){

        res.status(200).send("tarefa já existe")
      } else {

        const output: todo[] = [...allData, task]
        allData = output

        res.status(200).send("tarefa adicionada")
      }
})

//-------------------------------------------------------------------------------------------------------------------

app.post("/changevalue/:id", (req: Request, res: Response) => {
  
  const task: number = +req.params.id

  const output: todo[] = allData.filter((id) => {
    return id.id === task
  })

  output[0].completed = !output[0].completed
  
  res.status(200).send({message: "status changed", task: output[0]})

})

//##################################################################################################################

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003")
});