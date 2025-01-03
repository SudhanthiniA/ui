import { TestBed } from '@angular/core/testing';

import { TankRemovelService } from './tank-removel.service';

describe('TankRemovelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TankRemovelService = TestBed.get(TankRemovelService);
    expect(service).toBeTruthy();
  });
});
