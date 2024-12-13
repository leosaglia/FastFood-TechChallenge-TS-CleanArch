import { Customer } from '@core/enterprise/entities/customer'
import { Document } from '@core/enterprise/valueObjects/document'
import { CustomerGateway } from '@infra/gateway/customer-gateway'
import { CustomerNotFoundError } from '@core/enterprise/custom-exceptions/customer-not-found'

type IdentifyCustomerByDocumentUseCaseResponse = {
  customer: Customer
}

export class IdentifyCustomerByDocumentUseCase {
  constructor(private customerGateway: CustomerGateway) {}

  async execute(
    document: string,
  ): Promise<IdentifyCustomerByDocumentUseCaseResponse> {
    const documentValue = new Document(document).getValue()

    const customer = await this.customerGateway.findByDocument(documentValue)

    if (!customer) {
      throw new CustomerNotFoundError('Customer not created')
    }

    return { customer }
  }
}
