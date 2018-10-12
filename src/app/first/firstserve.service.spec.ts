import { TestBed } from '@angular/core/testing';

import { FirstserveService } from './firstserve.service';

describe('FirstserveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirstserveService = TestBed.get(FirstserveService);
    expect(service).toBeTruthy();
  });
});
