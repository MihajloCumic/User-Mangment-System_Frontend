import { CanActivateFn } from '@angular/router';

export const authReadGuard: CanActivateFn = (route, state) => {
  const canRead = localStorage
    .getItem('authorization')
    ?.includes('can_read_users');
  if (canRead) return true;
  else {
    alert('Unauthorized.');
    return false;
  }
};
