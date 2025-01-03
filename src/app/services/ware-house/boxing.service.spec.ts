import { TestBed } from '@angular/core/testing';

import { BoxingService } from './boxing.service';

describe('BoxingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoxingService = TestBed.get(BoxingService);
    expect(service).toBeTruthy();
  });
});
