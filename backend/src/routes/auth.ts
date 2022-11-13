import { Request, Response, Router } from 'express'
import { prisma } from '../lib/prisma'
import { sign } from 'jsonwebtoken';

export const authRouter = Router()

authRouter.post('/', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await prisma.user.findFirst({
    where: {
      email,
      password
    }
  })

  if (!user) {
    return res.status(404).send({
      message: 'E-mail e/ou senha incorretos'
    })
  }

  const token = sign({}, process.env.JTW_SECRET!, {
    subject: user.id,
    expiresIn: '7d',
  });

  return res.status(203).send({
    user,
    token
  })
})
