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

      await createActor(id, name, salary, new Date(dateOfBirth), gender)

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

  const updateSalary = async (
    id: string,
    salary: number
  ): Promise<any> => {
    await connection("Actor")
      .update({salary})
      .where({id})
  }

app.put("/user", async (req: Request, res: Response) => {

  const {id, salary} = req.body

  try {
    await updateSalary(id, salary)

    res.send({ id: id })

  } catch (err: any) {
    res.status(500).send({ message: err.message })
  }
})

  // ------------------

  const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
      .delete()
      .where({id})
  }

  app.delete("/actor/:id", async (req: Request, res: Response) => {
    try{
      await deleteActor(req.params.id)

      res.send({message: "deletado com sucesso"})

    } catch (err: any) {
      res.status(500).send({ message: err.message })
    }
  })

  // ------------------

  const avgSalaryByGender = async (gender:string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({gender})

      return result[0].average
  }

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

// const getActorByGender = async (gender: string): Promise<any> => {
//   const result = await connection("Actor")
//     .where({ gender })

//   return result[0]
// }

app.get("/actor?gender=", async (req: Request, res: Response) => {
  try {
    const gender = req.query.gender as string
    const actor = await avgSalaryByGender(gender)

    res.send({ gender: actor })
    
  } catch (err: any) {
    res.status(500).send({ message: err.message })
  }
})

// ---------------------------------------------------------------------------------

const createMovie = async (
  id: string,
  title: string,
  synopsis: string,
  releaseDate: Date,
  playingLimitDate: Date,
  rating: number
): Promise<void> => {
  await connection
    .insert({
      id,
      title,
      synopsis,
      release_Date: releaseDate,
      playing_limit_date: playingLimitDate,
      rating
    })
    .into("Movies")
}

app.post("/movie", async (req: Request, res: Response) => {

  try {
    const { id, title, synopsis, releaseDate, playingLimitDate, rating } = req.body

    await createMovie(id, title, synopsis, releaseDate, playingLimitDate, rating)

    res.send({message: "Filme criado!"})

  } catch (err: any) {
    res.status(500).send({ message: err.message })
  }
})

// ---------------------------------------------------------------------------------

const getAllMovies = async (): Promise <any> => {
  const result = await connection.raw(`
    SELECT * FROM Movies LIMIT 15
  `)
  
  return result[0]
}

app.get("/movie/all", async (req: Request, res: Response) => {
  
  try {

    const result = await getAllMovies()

    res.send({message: result})

  } catch (err: any) {
    res.status(500).send({ message: err.message })
  }
})

// ---------------------------------------------------------------------------------

const searchMovies = async (search: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Movies
    WHERE title LIKE "%${search}%" OR synopsis LIKE "%${search}%"
  `)

  return result[0]
}

app.get("/movie", async (req: Request, res: Response) => {

  try {

    const result = await searchMovies(req.query.search as string)

    res.send({ message: result })

  } catch (err: any) {
    res.status(500).send({ message: err.message })
  }
})

//################################################################################################

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});