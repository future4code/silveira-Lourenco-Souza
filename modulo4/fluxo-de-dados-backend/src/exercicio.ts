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

app.get("/produtos", (req: Request, res: Response) => {
  
  res.status(200).send(carrinho)  
})

//------------------------------------------------------------------------------------------------

app.put("/produto", (req: Request, res: Response) => {
  
  const input: {id: string, price: number} = req.body
  
  const modifyPrice: produto[] = carrinho.filter((produto) => {
    if(produto.id === input.id){
      produto.price = input.price
    }
    return produto
  })

  carrinho = modifyPrice

  res.status(200).send(carrinho)
})

//------------------------------------------------------------------------------------------------

app.delete("/produto", (req: Request, res: Response) => {
  
  const input: {id: string} = req.body

  const novoCarrinho: produto[] = carrinho.filter((produto) => {
    return produto.id !== input.id
  })
  
  carrinho = novoCarrinho

  res.status(200).send(carrinho)
  
})

//##########################################################################################################################

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003")
});