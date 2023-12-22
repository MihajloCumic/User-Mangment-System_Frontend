import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authUpdateGuard } from './auth-update.guard';

describe('authUpdateGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authUpdateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
