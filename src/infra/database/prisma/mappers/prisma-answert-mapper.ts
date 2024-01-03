// pegar uma answer do prisma e converter para o formato do dominio
// é a mesma answer, porem cm formato diferente
// static pois não iremos instanciar a classe

import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Answer } from '@/domain/forum/enterprise/entities/answer'
import { Answer as PrismaAnswer, Prisma } from '@prisma/client'

export class PrismaAnswerMapper {
  static toDoamin(raw: PrismaAnswer): Answer {
    return Answer.create(
      {
        content: raw.content,
        questionId: new UniqueEntityId(raw.questionId),
        authorId: new UniqueEntityId(raw.authorId),
        createdAt: raw.createdAt,
        updatedAt: raw.updatedAt,
      },
      new UniqueEntityId(raw.id),
    )
  }

  static toPrisma(answer: Answer): Prisma.AnswerUncheckedCreateInput {
    return {
      id: answer.id.toString(),
      authorId: answer.authorId.toString(),
      questionId: answer.questionId.toString(),
      content: answer.content,
      createdAt: answer.createdAt,
      updatedAt: answer.updatedAt,
    }
  }
}

// undefined vs null
// undefined: valor nao existe
// null: valor não preenchido
