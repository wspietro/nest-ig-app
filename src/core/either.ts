/**
 * Classes são criadas para representar erro e sucess. Utilizaremos as keyowrds left (erro) e right (sucesso);
 * UI -> CTRL -> CASO DE USO -> ENTIDADE -> CASO DE USO -> REPOSITORIO -> BD (fluxo de sucesso sempre pra direita);
 * Result será representado por uma propriedade readonly (nunca será alterada após inicialização) nominada value;
 * Funções são criadas para automatizar o processo de criação de novas classes left/right. Funções no formado de constantes para facilitar tipagens posteriores;
 * Em nossos use-cases agora usamos o return com left() ou right(). A resposta do método então deixa de ter o formato de XxxXxxResponse (either left or right). Precisamos então trabalhar com typescript para conseguir representar essa situação de um OU outro;
 * Criamos tipagem Either (genérica) que pode retornar Left ou Right;
 * */

export class Left<L, R> {
  readonly value: L

  constructor(value: L) {
    this.value = value
  }

  isRight(): this is Right<L, R> {
    return false
  }

  isLeft(): this is Left<L, R> {
    return true
  }
}

export class Right<L, R> {
  readonly value: R

  constructor(value: R) {
    this.value = value
  }

  isRight(): this is Right<L, R> {
    return true
  }

  isLeft(): this is Left<L, R> {
    return false
  }
}

export type Either<L, R> = Left<L, R> | Right<L, R>

export const left = <L, R>(value: L): Either<L, R> => {
  return new Left(value)
}

export const right = <L, R>(value: R): Either<L, R> => {
  return new Right(value)
}

// https://chat.openai.com/share/ddeaca10-6894-44b7-afda-9c145959532a
// https://medium.com/inato/expressive-error-handling-in-typescript-and-benefits-for-domain-driven-design-70726e061c86

// https://khalilstemmler.com/articles/enterprise-typescript-nodejs/functional-error-handling/
// https://khalilstemmler.com/articles/enterprise-typescript-nodejs/handling-errors-result-class/
// https://khalilstemmler.com/articles/enterprise-typescript-nodejs/application-layer-use-cases/

// Arquivo antigo
// export class Left<L> {
//   readonly value: L

//   constructor(value: L) {
//     this.value = value
//   }
// }

// export class Right<R> {
//   readonly value: R

//   constructor(value: R) {
//     this.value = value
//   }
// }

// export type Either<L, R> = Left<L> | Right<R>

// export const left = <L, R>(value: L): Either<L, R> => {
//   return new Left(value)
// }

// export const right = <L, R>(value: R): Either<L, R> => {
//   return new Right(value)
// }
