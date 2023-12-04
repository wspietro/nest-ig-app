import { Controller, Post, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

@Controller('/questions')
@UseGuards(JwtAuthGuard) // usar estratégia passport-jwt
export class CreateQuestionController {
  constructor() {}

  @Post()
  async handle() {
    return 'ok'
  }
}
