export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  privileges: Privilege[];
}

export interface Privilege {
  name: string;
}
