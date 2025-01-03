import { TestBed } from '@angular/core/testing';

import { WorkflowcofigService } from './workflowcofig.service';

describe('WorkflowcofigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkflowcofigService = TestBed.get(WorkflowcofigService);
    expect(service).toBeTruthy();
  });
});
