import express from 'express';
import cors from 'cors';

import { authRouter } from './routes/auth';
import { orderRouter } from './routes/order';
import { productRouter } from './routes/product';

const app = express();

app.use(cors())
app.use(express.json())

app.use('/authenticate', authRouter)
app.use('/order', orderRouter)
app.use('/product', productRouter)

app.listen(3333, () => {
  console.log('Server is on! 🚀')
})
