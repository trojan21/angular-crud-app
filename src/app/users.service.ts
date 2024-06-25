import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface User {
  name: string;
  designation: string;
  salary: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = new BehaviorSubject<User[]>([]);
  users$ = this.users.asObservable();

  addUser(user: User) {
    const currentUsers = this.users.getValue();
    this.users.next([...currentUsers, user]);
  }

  getUsers() {
    return this.users$;
  }

  deleteUser(index: number) {
    const currentUsers = this.users.getValue();
    currentUsers.splice(index, 1);
    this.users.next(currentUsers);
  }

  updateUser(index: number, user: User) {
    const currentUsers = this.users.getValue();
    currentUsers[index] = user;
    this.users.next(currentUsers);
  }
}
