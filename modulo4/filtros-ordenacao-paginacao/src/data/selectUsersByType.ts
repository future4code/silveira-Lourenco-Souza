import { connection } from "./connection";

export const selectUsersByType = async (type: string): Promise<any> => {

  const result = await connection("aula49_exercicio")
    .where({type: type})

  return result
}