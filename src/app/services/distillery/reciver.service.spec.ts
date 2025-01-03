import { TestBed } from '@angular/core/testing';

import { ReciverService } from './reciver.service';

describe('ReciverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReciverService = TestBed.get(ReciverService);
    expect(service).toBeTruthy();
  });
});
