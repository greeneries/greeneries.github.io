import { TestBed } from '@angular/core/testing';

import { CounterBridgeService } from './counter-bridge.service';

describe('CounterBridgeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CounterBridgeService = TestBed.get(CounterBridgeService);
    expect(service).toBeTruthy();
  });
});
