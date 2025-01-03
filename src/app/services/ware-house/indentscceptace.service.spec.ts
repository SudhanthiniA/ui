import { TestBed } from '@angular/core/testing';

import { IndentscceptaceService } from './indentscceptace.service';

describe('IndentscceptaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndentscceptaceService = TestBed.get(IndentscceptaceService);
    expect(service).toBeTruthy();
  });
});
