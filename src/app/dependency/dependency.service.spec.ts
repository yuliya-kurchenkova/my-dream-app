import { TestBed } from '@angular/core/testing';

import { DependencyService } from './dependency.service';

fdescribe('DependencyService', () => {
  let service: DependencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DependencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
