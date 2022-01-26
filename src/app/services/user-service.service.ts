import { Injectable } from '@angular/core';

export class User {
  id!: number;
  name!: string;
}


@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn!: boolean;
  user!: User

  constructor() {
    this.isLoggedIn = true;
    this.user = new User();
    this.user.name = 'UserName'
  }
}
