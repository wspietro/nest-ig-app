export abstract class CacheRepository {
  // salvar uma informação no cache. banco não relacional (key: value)
  abstract set(key: string, value: string): Promise<void>

  // buscar no cache
  abstract get(key: string): Promise<void>

  // deletar no cache (invalidar dados)
  abstract delete(key: string): Promise<void>
}
