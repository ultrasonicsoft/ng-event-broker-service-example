import { TestBed } from '@angular/core/testing';

import { EventBrokerService } from './event-broker.service';
import { EventBrokerModule } from './event-broker.module';

describe('EventBrokerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[EventBrokerModule]
  }));

  it('should be created', () => {
    const service: EventBrokerService = TestBed.get(EventBrokerService);
    expect(service).toBeTruthy();
  });
});
