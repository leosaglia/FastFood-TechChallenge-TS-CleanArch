import { ProductGateway } from '../gateway/product-gateway'
import { IProductDataSource } from '@core/application/interfaces/repository/product-data-source'
import { FindAllProductsUseCase } from '@core/application/useCases/product/find-all-products-use-case'
import { ProductPresenter } from '@infra/presenters/ProductPresenter'

export class ProductController {
  constructor(private readonly productDataSource: IProductDataSource) {}
  async getAllProductsByCategory(
    category?: string,
  ): Promise<ProductPresenter[]> {
    const productGateway = new ProductGateway(this.productDataSource)
    const findAllProductsUseCase = new FindAllProductsUseCase(productGateway)

    const { products } = await findAllProductsUseCase.execute({
      category,
    })

    return products.map(ProductPresenter.present)
  }
}
