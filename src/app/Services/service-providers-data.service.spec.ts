import { TestBed } from '@angular/core/testing';

import { ServiceProvidersDataService } from './service-providers-data.service';

describe('ServiceProvidersDataService', () => {
  let service: ServiceProvidersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceProvidersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
