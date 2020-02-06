import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<any>;
  currentUser;

  constructor() { }


  addUser(user: any) {
    if(this.users) {
      this.users.push(user)
    } else {
      this.users = [ user ];
    }
    
  }
}
