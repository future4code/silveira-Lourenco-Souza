import { connection } from "./connection"


export async function selectAllUsers(): Promise<any> {
  const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula49_exercicio;
  `)

  return result[0]
}