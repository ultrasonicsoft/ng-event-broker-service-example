import { Injectable } from '@angular/core';
import { EventBrokerModule } from './event-broker.module';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: EventBrokerModule
})
export class EventBrokerService {
  private allEvents: { [id: string]: EventEmitter<any>; } = {};

  constructor() {
    console.debug('EventBrokerService initialized...');
  }

  registerEvent(eventName: string) {
    if (!this.allEvents[eventName]) {
      this.allEvents[eventName] = new EventEmitter();
      console.debug(`${eventName} event registered...`);
    }
  }

  publishEvent(eventName: string, payload: any = {}) {
    if (!this.allEvents[eventName]) {
      console.error(`${eventName} event not registered...`);
      return;
    }
    console.debug(`${eventName} event published.`);
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
