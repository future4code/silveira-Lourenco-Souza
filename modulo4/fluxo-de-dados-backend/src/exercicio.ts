import express, {Request, Response} from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

//##########################################################################################################################

app.get("/test", (req: Request, res: Response) => {
  
  res.status(200).send({message: "Funcionando"})
})







//##########################################################################################################################

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003")
});