import { Router } from 'express'
import productRouter from './product.routes'
import customerRouter from './customer.routes'
import orderRouter from './order.routes'

const routes = Router()

routes.use('/products', productRouter)
routes.use('/customers', customerRouter)
routes.use('/orders', orderRouter)

export default routes
