import { TestBed } from '@angular/core/testing';

import { WaterBillInfoService } from './water-bill-info.service';

describe('WaterBillInfoService', () => {
  let service: WaterBillInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterBillInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
