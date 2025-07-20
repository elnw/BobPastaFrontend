import { TestBed } from '@angular/core/testing';

import { BobpastoService } from './bobpasto-service.service';

describe('BobpastoServiceService', () => {
  let service: BobpastoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BobpastoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
