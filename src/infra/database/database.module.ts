import { Module } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // todo módulo que importar o DatabaseModule também vai ter acesso ao PrismaService
})
export class DatabaseModule {}
