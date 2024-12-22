import express from 'express'
import routes from './routes'
import { IProductDataSource } from '@core/application/interfaces/repository/product-data-source'
import { ICustomerDataSource } from '@core/application/interfaces/repository/customer-data-source'
import { IOrderDataSource } from '@core/application/interfaces/repository/order-data-source'
import globalErrorHandler from './global-error-handling'

export class TechChallengeAPI {
  static start(
    productDataSource: IProductDataSource,
    customerDataSource: ICustomerDataSource,
    orderDataSource: IOrderDataSource,
  ) {
    const app = express()
    app.use(express.json())

    app.use((req, res, next) => {
      req.app.locals.productDataSource = productDataSource
      req.app.locals.customerDataSource = customerDataSource
      req.app.locals.orderDataSource = orderDataSource
      next()
    })

    app.use(routes)
    app.use(globalErrorHandler)

    app.listen(3333, () => {
      console.log('Server started ⚡')
    })
  }
}
