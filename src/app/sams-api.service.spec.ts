import { TestBed } from '@angular/core/testing';

import { SamsApiService } from './sams-api.service';

describe('SamsApiService', () => {
  let service: SamsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SamsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
