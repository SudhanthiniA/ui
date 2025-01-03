import { TestBed } from '@angular/core/testing';

import { TankMaintananceService } from './tank-maintanance.service';

describe('TankMaintananceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TankMaintananceService = TestBed.get(TankMaintananceService);
    expect(service).toBeTruthy();
  });
});
