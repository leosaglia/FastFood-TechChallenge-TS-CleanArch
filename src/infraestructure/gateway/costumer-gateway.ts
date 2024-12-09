import { ICustomerGateway } from '@core/application/interfaces/gateway/customer-gateway-interface'
import { Customer } from '@core/enterprise/entities/customer'

export class CustomerGateway implements ICustomerGateway {
  create(customer: Customer): Promise<void> {
    throw new Error('Method not implemented.')
  }

  findByDocument(document: string): Promise<Customer | null> {
    throw new Error('Method not implemented.')
  }

  findById(customerId: string): Promise<Customer | null> {
    throw new Error('Method not implemented.')
  }
}
