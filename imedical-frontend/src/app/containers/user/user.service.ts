import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const USER_API = '/assets/db.json';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  getUsers(): Observable<User[]> {
    return this.http.get(USER_API).pipe(map((data: User[]) => data));
  }

  getUser(name): Observable<User> {
    return this.http.get(`${USER_API}/${name}`).pipe(map((data: User) => data));
  }

  addUser(user: User) {
    return this.http
      .post(`${USER_API}`, user)
      .pipe(map((response: Response) => response));
  }
}
