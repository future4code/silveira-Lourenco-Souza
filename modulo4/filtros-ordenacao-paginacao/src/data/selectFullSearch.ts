import { connection } from "./connection";

export const selectFullSearch = async (
  type: string,
  name: string,
  sort: string,
  order: string,
  size: number, 
  offset: number
): Promise<any> => {
  
  const result = await connection("aula49_exercicio")
    .where("name", "LIKE", `%${name}%`)
    .andWhere("type", "LIKE", `%${type}%`)
    .orderBy(sort, order)
    .limit(size)
    .offset(offset)

    return result
}