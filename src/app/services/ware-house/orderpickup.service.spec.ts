import { TestBed } from '@angular/core/testing';

import { OrderpickupService } from './orderpickup.service';

describe('OrderpickupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderpickupService = TestBed.get(OrderpickupService);
    expect(service).toBeTruthy();
  });
});
