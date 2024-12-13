import { Router } from 'express'
import productRouter from './product.routes'
import customerRouter from './customer.routes'

const routes = Router()

routes.use('/products', productRouter)
routes.use('/customers', customerRouter)

export default routes
