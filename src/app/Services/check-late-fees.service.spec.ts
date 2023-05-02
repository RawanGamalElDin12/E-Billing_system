import { TestBed } from '@angular/core/testing';

import { CheckLateFeesService } from './check-late-fees.service';

describe('CheckLateFeesService', () => {
  let service: CheckLateFeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckLateFeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
