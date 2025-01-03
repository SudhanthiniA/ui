import { TestBed } from '@angular/core/testing';

import { WarehouseNewbrandService } from './warehouse-newbrand.service';

describe('WarehouseNewbrandService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WarehouseNewbrandService = TestBed.get(WarehouseNewbrandService);
    expect(service).toBeTruthy();
  });
});
