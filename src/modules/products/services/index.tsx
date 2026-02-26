import { prisma } from "@/lib/prisma"

export const getProducts = async() =>{
  const result = await  prisma.product.findMany({include:{Image: true}});
  console.log(result)
  return result ;
}