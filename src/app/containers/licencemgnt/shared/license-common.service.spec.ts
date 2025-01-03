import { TestBed } from '@angular/core/testing';

import { LicenseCommonService } from './license-common.service';

describe('LicenseCommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LicenseCommonService = TestBed.get(LicenseCommonService);
    expect(service).toBeTruthy();
  });
});
