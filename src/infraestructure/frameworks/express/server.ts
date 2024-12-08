import express from 'express'
import routes from './routes'
import { IProductDataSource } from '@core/application/interfaces/repository/product-data-source'
import globalErrorHandler from './global-error-handling'

export class TechChallengeAPI {
  static start(dataSource: IProductDataSource) {
    const app = express()
    app.use(express.json())

    app.use((req, res, next) => {
      req.app.locals.dataSource = dataSource
      next()
    })

    app.use(routes)
    app.use(globalErrorHandler)

    app.listen(3333, () => {
      console.log('Server started ⚡')
    })
  }
}
