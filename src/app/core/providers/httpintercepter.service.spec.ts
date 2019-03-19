import { TestBed } from '@angular/core/testing';

import { HTTPintercepterService } from './httpintercepter.service';

describe('HTTPintercepterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HTTPintercepterService = TestBed.get(HTTPintercepterService);
    expect(service).toBeTruthy();
  });
});
