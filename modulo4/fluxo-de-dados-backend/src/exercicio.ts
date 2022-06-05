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
  

  try{

    if(!req.body.name && !req.body.price){
      res.statusCode = 400
      throw new Error("Nenhum valor inserido")
    }
    if(!req.body.name){
      res.statusCode = 400
      throw new Error("O valor nome do produto está faltando. Insira um valor válido.")
    }
    if (!req.body.price){
      res.statusCode = 400
      throw new Error("O valor preço do produto está faltando. Insira um valor válido.")
    }
    if (req.body.name && typeof req.body.name !== "string"){
      res.statusCode = 400
      throw new Error("Insira um valor de nome válido.")
    }
    if (req.body.price && typeof req.body.price !== "number"){
      res.statusCode = 400
      throw new Error("Insira um valor de preço válido.")
    }
    if (req.body.price && req.body.price < 0){
      res.statusCode = 400
      throw new Error("Valor de preço não pode ser zero ou menor")
    }

    const novoProduto: produto = { id: Date.now().toString(), ...req.body }

    const output: produto[] = [...carrinho, novoProduto]
    carrinho = output

    res.status(200).send(carrinho)  

  } catch(err: any) {
    if(res.statusCode === 200){
      res.status(500).send("Erro inesperado")
    } else {
      res.send(err.message)
    }
  }  
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