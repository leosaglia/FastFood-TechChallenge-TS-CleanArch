import { Product } from '@core/enterprise/entities/product'
import { Category } from '@core/enterprise/valueObjects/category'
import { ProductGateway } from '@core/application/interfaces/gateway/product-gateway'

type FindAllProductsUseCaseResponse = {
  products: Product[]
}

export class FindAllProductsUseCase {
  constructor(private productGateway: ProductGateway) {}

  async execute(query: {
    category?: string
  }): Promise<FindAllProductsUseCaseResponse> {
    const { category } = query

    if (category) {
      query.category = new Category(category).getValue()
    }

    const products = (await this.productGateway.findMany(query)).filter(
      (product) => {
        if (category) {
          return product.getCategory() === query.category
        }
        return true
      },
    )

    return { products }
  }
}
