import { TestBed } from '@angular/core/testing';

import { LabelregestrationService } from './labelregestration.service';

describe('LabelregestrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LabelregestrationService = TestBed.get(LabelregestrationService);
    expect(service).toBeTruthy();
  });
});
