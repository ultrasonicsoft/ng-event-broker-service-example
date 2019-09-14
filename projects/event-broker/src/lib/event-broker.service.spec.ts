import { TestBed } from '@angular/core/testing';

import { EventBrokerService } from './event-broker.service';

describe('EventBrokerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventBrokerService = TestBed.get(EventBrokerService);
    expect(service).toBeTruthy();
  });
});
