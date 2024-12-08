/* eslint-disable @typescript-eslint/ban-types */
import { Router, Request, Response } from 'express'
import { IProductDataSource } from '@core/application/interfaces/repository/product-data-source'
import { ProductController } from '@infra/controllers/product-controller'

const productRouter = Router()

interface ProductQueryParams {
  category?: string
}

productRouter.get(
  '/',
  async (
    request: Request<{}, {}, {}, ProductQueryParams>,
    response: Response,
  ) => {
    const dataSource: IProductDataSource = request.app.locals.dataSource
    const productController = new ProductController(dataSource)

    const { category } = request.query

    const product = await productController.getAllProductsByCategory(category)

    if (product) {
      response.json(product)
    } else {
      response.status(404).send('Product not found')
    }
  },
)

export default productRouter
