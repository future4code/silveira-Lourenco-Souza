import express, {Request, Response} from "express";
import cors from "cors";

import { produto, dados } from "./data"

const app = express();

app.use(express.json());
app.use(cors());

//##########################################################################################################################

const carrinho: produto[] = dados

//------------------------------------------------------------------------------------------------

app.get("/test", (req: Request, res: Response) => {
  
  res.status(200).send({message: "Funcionando"})
})

//------------------------------------------------------------------------------------------------





//##########################################################################################################################

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003")
});