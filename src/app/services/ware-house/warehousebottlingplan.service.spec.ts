import { TestBed } from '@angular/core/testing';

import { WarehousebottlingplanService } from './warehousebottlingplan.service';

describe('WarehousebottlingplanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WarehousebottlingplanService = TestBed.get(WarehousebottlingplanService);
    expect(service).toBeTruthy();
  });
});
