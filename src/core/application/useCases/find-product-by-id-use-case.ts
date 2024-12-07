import { Product } from '@core/enterprise/entities/product'
import { ProductGateway } from '@core/application/interfaces/gateway/product-gateway'
import { ProductNotFoundError } from '@core/enterprise/custom-exceptions/product-not-found'

type FindProductByIdUseCaseResponse = {
  product: Product
}

export class FindProductByIdUseCase {
  constructor(private productGateway: ProductGateway) {}

  async execute(productId: string): Promise<FindProductByIdUseCaseResponse> {
    const product = await this.productGateway.findById(productId)

    if (!product) {
      throw new ProductNotFoundError(`Product with id ${productId} not found.`)
    }

    return { product }
  }
}
