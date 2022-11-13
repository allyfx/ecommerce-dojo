import { Router, Request, Response } from 'express'
import { prisma } from '../lib/prisma'

export const orderRouter = Router()

orderRouter.post('/', async (req: Request, res: Response) => {
  return res.status(200).send({
    message: 'Pedido criado!'
  })
})
