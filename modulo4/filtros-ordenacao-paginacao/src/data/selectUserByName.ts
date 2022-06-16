import { connection } from "./connection";

export const selectUsersByName = async (name: string): Promise<any> => {
  
  const result = await connection("aula49_exercicio")
    .where("name", "LIKE", `%${name}%`)

    return result
}