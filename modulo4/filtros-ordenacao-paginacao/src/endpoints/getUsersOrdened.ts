import { Request, Response } from "express";
import { selectUsersOrdened } from "../data/selectUsersOrdened";

export const getUsersOrdened = async (req: Request, res: Response): Promise<void> => {

  try {

    let sort: string = req.query.sort as string
    let order: string = req.query.order as string

    if(!sort && !order){
      res.statusCode = 422
      throw new Error(`Please enter a valid "sort or "order" values`)
    }

    sort = sort.toLowerCase() === "name" ? "name" : sort.toLowerCase() === "type" ? "type" : "email"
    order = order.toUpperCase() === "DESC" ? "DESC": "ASC"

    const users = await selectUsersOrdened(sort, order)
    res.status(200).send(users)

  } catch (error: any) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}