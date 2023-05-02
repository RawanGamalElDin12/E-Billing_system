import { TestBed } from '@angular/core/testing';

import { ServiceProvidersServiceService } from './service-providers-service.service';

describe('ServiceProvidersServiceService', () => {
  let service: ServiceProvidersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceProvidersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
