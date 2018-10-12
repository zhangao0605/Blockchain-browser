import { TestBed } from '@angular/core/testing';

import { SecondserveService } from './secondserve.service';

describe('SecondserveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecondserveService = TestBed.get(SecondserveService);
    expect(service).toBeTruthy();
  });
});
