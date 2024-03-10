import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super({
      log: ['query', 'warn', 'error'],
    })
  }

  onModuleInit() {
    return this.$connect()
  }

  // função chamada automaticamente pelo nest quando a aplicação for derrubada
  onModuleDestroy() {
    return this.$disconnect()
  }
}
