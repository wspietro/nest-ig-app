import { Module } from '@nestjs/common'
import { EnvModule } from '../env/env.module'
import { CacheRepository } from './cache-repository'
import { ReddisCacheRepository } from './redis/reddis-cache-repository'
import { RedisService } from './redis/redis.service'

@Module({
  imports: [EnvModule],
  providers: [
    RedisService,
    {
      provide: CacheRepository,
      useClass: ReddisCacheRepository,
    },
  ],
  exports: [CacheRepository],
})
export class CacheModule {}
