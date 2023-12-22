import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authReadGuard } from './auth-read.guard';

describe('authReadGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authReadGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
