import { TestBed } from '@angular/core/testing';

import { BlockinformationserveService } from './blockinformationserve.service';

describe('BlockinformationserveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockinformationserveService = TestBed.get(BlockinformationserveService);
    expect(service).toBeTruthy();
  });
});
