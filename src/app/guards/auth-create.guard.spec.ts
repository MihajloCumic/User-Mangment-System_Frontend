import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authCreateGuard } from './auth-create.guard';

describe('authCreateGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authCreateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
