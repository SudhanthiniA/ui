import { TestBed } from '@angular/core/testing';

import { OutofupbrandService } from './outofupbrand.service';

describe('OutofupbrandService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutofupbrandService = TestBed.get(OutofupbrandService);
    expect(service).toBeTruthy();
  });
});
