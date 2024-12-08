import express from 'express'
import routes from './routes'
import { IProductDataSource } from '@core/application/interfaces/repository/product-data-source'

export class TechChallengeAPI {
  static start(dataSource: IProductDataSource) {
    const app = express()
    app.use(express.json())

    app.use((req, res, next) => {
      req.app.locals.dataSource = dataSource
      next()
    })

    app.use(routes)

    app.listen(3333, () => {
      console.log('Server started ⚡')
    })
  }
}
