const printHello = async (): Promise<string> => {

  const hello: any = setTimeout(() => {
    return "Olá!"

  }, 5000);

  console.log(hello);
  return await hello
  
}

console.log(printHello());
