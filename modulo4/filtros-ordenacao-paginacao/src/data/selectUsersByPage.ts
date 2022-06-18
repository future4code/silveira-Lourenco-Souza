import { connection } from "./connection"

export const selectUsersByPage = async (size: number, offset: number): Promise<any> => {
  const result = await connection("aula49_exercicio")
    .limit(size)
    .offset(offset)

    return result
}