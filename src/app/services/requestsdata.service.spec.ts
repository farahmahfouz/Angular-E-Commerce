import { TestBed } from '@angular/core/testing';

import { RequestsdataService } from './requestsdata.service';

describe('RequestsdataService', () => {
  let service: RequestsdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestsdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
