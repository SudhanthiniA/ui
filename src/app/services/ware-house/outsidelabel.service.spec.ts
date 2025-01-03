import { TestBed } from '@angular/core/testing';

import { OutsidelabelService } from './outsidelabel.service';

describe('OutsidelabelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OutsidelabelService = TestBed.get(OutsidelabelService);
    expect(service).toBeTruthy();
  });
});
