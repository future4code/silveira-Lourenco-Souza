import express, {Request, Response} from "express";
import cors from "cors";

import { produto, dados } from "./data"

const app = express();

app.use(express.json());
app.use(cors());

//##########################################################################################################################

let carrinho: produto[] = dados

//------------------------------------------------------------------------------------------------

app.get("/test", (req: Request, res: Response) => {
  
  res.status(200).send({message: "Funcionando"})
})

//------------------------------------------------------------------------------------------------

app.post("/produto", (req: Request, res: Response) => {
  
  const novoProduto: produto = { id: Date.now().toString(), ...req.body}
  
  const output: produto[] = [...carrinho, novoProduto]
  carrinho = output

  res.status(200).send(carrinho)  

})

//------------------------------------------------------------------------------------------------


//##########################################################################################################################

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003")
});