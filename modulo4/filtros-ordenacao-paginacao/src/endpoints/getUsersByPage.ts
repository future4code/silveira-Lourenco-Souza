import { Request, Response } from "express";
import { selectUsersByPage } from "../data/selectUsersByPage";

export const getUsersByPage = async (req: Request, res: Response): Promise<void> => {
  
  try {

    const page: number = Number(req.query.page) && Number(req.query.page) > 0 ? Number(req.query.page) : 1
    const size: number = Number(req.query.size) && Number(req.query.size) > 0 ? Number(req.query.size) : 5

    const offset: number = size * (page - 1)

    const users = await selectUsersByPage(size, offset)
    res.status(200).send(users)

  } catch (error: any) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
} 