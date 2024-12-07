import { Product } from '@core/enterprise/entities/product'
import { Category } from '@core/enterprise/valueObjects/category'
import { FindProductByIdUseCase } from './find-product-by-id-use-case'
import { IProductGateway } from '@core/application/interfaces/gateway/product-gateway-interface'
import { EditProductUseCaseRequest } from '@core/application/dtos/edit-product-use-case-request'

type EditProductUseCaseResponse = {
  product: Product
}

export class EditProductUseCase {
  constructor(
    private productGateway: IProductGateway,
    private findProductByIdUseCase: FindProductByIdUseCase,
  ) {}

  async execute({
    id,
    name,
    price,
    description,
    category,
  }: EditProductUseCaseRequest): Promise<EditProductUseCaseResponse> {
    await this.findProductByIdUseCase.execute(id)

    const product = new Product(
      name,
      price,
      description,
      new Category(category),
      id,
    )

    this.productGateway.edit(product)

    return { product }
  }
}
