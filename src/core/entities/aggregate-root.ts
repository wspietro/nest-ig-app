import { DomainEvent } from '../events/domain-event'
import { DomainEvents } from '../events/domain-events'
import { Entity } from './entity'

export abstract class AggregateRoot<Props> extends Entity<Props> {
  private _domainEvent: DomainEvent[] = []

  get domainEvents(): DomainEvent[] {
    return this._domainEvent
  }

  protected addDomainEvent(domainEvent: DomainEvent): void {
    this._domainEvent.push(domainEvent)
    DomainEvents.markAggregateForDispatch(this)
  }

  public clearEvents() {
    this._domainEvent = []
  }
}
