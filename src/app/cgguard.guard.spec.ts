import { TestBed } from '@angular/core/testing';

import { CgguardGuard } from './cgguard.guard';

describe('CgguardGuard', () => {
  let guard: CgguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CgguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
