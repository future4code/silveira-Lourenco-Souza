type user = {
  name: string,
  email: string,
  role: string
}

const userDatabase: user[] = [
  { name: "Rogério", email: "roger@email.com", role: "user" },
  { name: "Ademir", email: "ademir@email.com", role: "admin" },
  { name: "Aline", email: "aline@email.com", role: "user" },
  { name: "Jéssica", email: "jessica@email.com", role: "user" },
  { name: "Adilson", email: "adilson@email.com", role: "user" },
  { name: "Carina", email: "carina@email.com", role: "admin" }
] 

const findAdminEmail = (data: user[]): string[] => {
  
  const output: string[] = data.filter((worker) => {
    return worker.role === "admin"
  }).map((worker) => {
    return worker.email
  })

  return output
}

console.log(findAdminEmail(userDatabase));
