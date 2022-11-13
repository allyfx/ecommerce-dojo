import { Request, Response, Router } from 'express'
import { prisma } from '../lib/prisma'

export const productRouter = Router()

productRouter.get('/', async (req: Request, res: Response) => {
  const products = await prisma.product.findMany();

  return res.status(200).send({
    products,
  })
})
