import { prisma } from "@/lib/prisma"

export const getProducts = async() =>{
  const result = await  prisma.product.findMany();
  console.log(result)
  return result ;
}