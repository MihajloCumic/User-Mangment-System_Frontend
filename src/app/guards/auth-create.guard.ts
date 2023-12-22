import { CanActivateFn } from '@angular/router';

export const authCreateGuard: CanActivateFn = (route, state) => {
  const canRead = localStorage
    .getItem('authorization')
    ?.includes('can_create_users');
  if (canRead) return true;
  else {
    alert('Unauthorized.');
    return false;
  }
};
