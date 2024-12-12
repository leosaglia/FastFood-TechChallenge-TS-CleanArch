import express from 'express'
import routes from './routes'
import { IProductDataSource } from '@core/application/interfaces/repository/product-data-source'
import { ICustomerDataSource } from '@core/application/interfaces/repository/customer-data-source'
import globalErrorHandler from './global-error-handling'

export class TechChallengeAPI {
  static start(
    productDataSource: IProductDataSource,
    customerDataSource: ICustomerDataSource,
  ) {
    const app = express()
    app.use(express.json())

    app.use((req, res, next) => {
      req.app.locals.dataSource = productDataSource
      req.app.locals.customerDataSource = customerDataSource
      next()
    })

    app.use(routes)
    app.use(globalErrorHandler)

    app.listen(3333, () => {
      console.log('Server started ⚡')
    })
  }
}
