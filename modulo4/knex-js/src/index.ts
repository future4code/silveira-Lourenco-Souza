import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

//################################################################################################

const getActorById = async (id: string): Promise<any> => {
  
  const result = await connection.raw(`
    SELECT * FROM Actor
    WHERE id = '${id}'
  `)
  return result[0][0]
}

const getActorByName = async (name: string): Promise<any> => {
  
  const result = await connection.raw(`
    SELECT * FROM Actor
    WHERE name = '${name}'
  `)
  return result
}

const getGenderQuant = async (gender: string): Promise<any> => {
  
  const result = await connection.raw(`
    SELECT gender, COUNT(*) AS count FROM Actor
    WHERE gender = '${gender}'
  `)
  return result[0][0]
}

// getGenderQuant("female")
// .then((res) => {
//   console.table(res);  
// })
// .catch((err) => {
//   console.log(err);
// })

app.get("/users/:id", async (req: Request, res: Response) => {
  try{

    const id = req.params.id
    res.send(await getActorById(id))

  } catch(err: any) {
    res.status(500).send({message: err.message})
  }
})


// a) A resposta do banco de dados usando um raw vem no formato de um array dentro de outro array.

// ---------------------------------------------------------------------------------

  const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
  ) : Promise <void> => {
    await connection
      .insert({
        id,
        name,
        salary,
        birth_date: dateOfBirth,
        gender
      })
        .into("Actor")
  }

  app.post("/user", async (req: Request, res: Response) => {

    try{

      const { id, name, salary, dateOfBirth, gender } = req.body

      await createActor(id, name, salary, dateOfBirth, gender)

      res.send({message: "usuário criado"})

    } catch (err: any) {
      res.status(500).send({ message: err.message })
    }

  })

  // ------------------

// const getActors = async (): Promise <void> => {
//   await connection("Actor")
//   }  

app.get("/users", async (req: Request, res: Response) => {
  try {

    const resultado = await connection("Actor")

    res.send({ message: resultado})

  } catch (err: any) {
    res.status(500).send({ message: err.message })
  }

})

  // ------------------

app.put("/user", async (req: Request, res: Response) => {

  const {id, salary} = req.body

  try {
    await connection("Actor")
      .update({
        salary
      })
      .where({id})

    res.send({ id: id })

  } catch (err: any) {
    res.status(500).send({ message: err.message })
  }
})

  // ------------------



  // ------------------

app.get("/users/:gender/salary", async (req: Request, res: Response) => {

  const gender = req.params.gender

  try {
    await connection("Actor")
      .count()
      .where({ gender })

    res.send({ gender: gender })

  } catch (err: any) {
    res.status(500).send({ message: err.message })
  }
})

// ---------------------------------------------------------------------------------

//################################################################################################

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});