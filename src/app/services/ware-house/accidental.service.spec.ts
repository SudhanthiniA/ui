import { TestBed } from '@angular/core/testing';

import { AccidentalService } from './accidental.service';

describe('AccidentalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccidentalService = TestBed.get(AccidentalService);
    expect(service).toBeTruthy();
  });
});
