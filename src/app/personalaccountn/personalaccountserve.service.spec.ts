import { TestBed } from '@angular/core/testing';

import { PersonalaccountserveService } from './personalaccountserve.service';

describe('PersonalaccountserveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonalaccountserveService = TestBed.get(PersonalaccountserveService);
    expect(service).toBeTruthy();
  });
});
