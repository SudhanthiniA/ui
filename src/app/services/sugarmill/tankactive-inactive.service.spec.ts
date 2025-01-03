import { TestBed } from '@angular/core/testing';

import { TankactiveInactiveService } from './tankactive-inactive.service';

describe('TankactiveInactiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TankactiveInactiveService = TestBed.get(TankactiveInactiveService);
    expect(service).toBeTruthy();
  });
});
