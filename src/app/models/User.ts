export class UserClass {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public privileges: Privilege[]
  ) {}
}

export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  privileges: Privilege[];
}

export interface UserUpdate {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  privileges: string[];
}

export interface UserCreate {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
  privileges: string[];
}

export interface Privilege {
  name: string;
}
