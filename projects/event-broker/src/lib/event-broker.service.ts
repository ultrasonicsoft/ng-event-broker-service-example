import { Injectable, EventEmitter } from '@angular/core';
import { EventBrokerModule } from './event-broker.module';

@Injectable({
  providedIn: EventBrokerModule
})
export class EventBrokerService {
  private allEvents: { [id: string]: EventEmitter<any>; } = {};

  constructor() {
  }

  registerEvent(eventName: string) {
    if (!this.allEvents[eventName]) {
      this.allEvents[eventName] = new EventEmitter();
    }
  }

  publishEvent(eventName: string, payload: any = {}) {
    if (!this.allEvents[eventName]) {
      console.error(`${eventName} event not registered...`);
      return;
    }
    this.allEvents[eventName].next(payload);
  }

  subscribeEvent(eventName: string) {
    if (!this.allEvents[eventName]) {
      console.error(`${eventName} event not registered...`);
      return;
    }
    return this.allEvents[eventName];
  }

  clearEvents() {
    this.allEvents = {};
  }
}
