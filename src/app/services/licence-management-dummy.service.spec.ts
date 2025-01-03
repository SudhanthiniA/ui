import { TestBed } from '@angular/core/testing';

import { LicenceManagementDummyService } from './licence-management-dummy.service';

describe('LicenceManagementDummyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LicenceManagementDummyService = TestBed.get(LicenceManagementDummyService);
    expect(service).toBeTruthy();
  });
});
