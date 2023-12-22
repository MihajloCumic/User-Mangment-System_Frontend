import { CanActivateFn } from '@angular/router';

export const authUpdateGuard: CanActivateFn = (route, state) => {
  const canRead = localStorage
    .getItem('authorization')
    ?.includes('can_update_users');
  if (canRead) return true;
  else {
    alert('Unauthorized.');
    return false;
  }
};
