import { InMemoryProductRepository } from '@infra/database/in-memory/in-memory-product-repository'
import { TechChallengeAPI } from '@infra/frameworks/express/server'

const dataSource = new InMemoryProductRepository()
TechChallengeAPI.start(dataSource)
