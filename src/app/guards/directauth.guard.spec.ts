import { TestBed } from '@angular/core/testing';

import { DirectauthGuard } from './directauth.guard';

describe('DirectauthGuard', () => {
  let guard: DirectauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DirectauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
