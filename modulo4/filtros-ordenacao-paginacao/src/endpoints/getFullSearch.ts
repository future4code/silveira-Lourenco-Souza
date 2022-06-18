import { Request, Response } from "express"
import { selectFullSearch } from "../data/selectFullSearch"

export const getFullSearch = async (req: Request, res: Response): Promise<void> => {
  
  try {

// --------------------------------------------------------------------------------

    let type: string = req.query.type as string || "%"
    let name: string = req.query.name as string || "%"
    
// --------------------------------------------------------------------------------

    let sort: string = req.query.sort as string || "name"
    let order: string = req.query.order as string || "DESC"
    
// --------------------------------------------------------------------------------

    const page: number = Number(req.query.page) && Number(req.query.page) > 0 ? Number(req.query.page) : 1
    const size: number = Number(req.query.size) && Number(req.query.size) > 0 ? Number(req.query.size) : 10

    const offset: number = size * (page - 1)

// --------------------------------------------------------------------------------


    const users = await selectFullSearch(
        type,
        name,
        sort,
        order,
        size,
        offset
      )
    res.status(200).send(users)

  } catch (error: any) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}