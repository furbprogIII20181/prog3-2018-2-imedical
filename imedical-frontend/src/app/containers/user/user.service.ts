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

  getAll() {
    return this.http.get<User[]>(`/users`);
  }

  getById(id: number) {
      return this.http.get(`/users/` + id);
  }

  register(user: User) {
      return this.http.post(`/users/register`, user);
  }

  update(user: User) {
      return this.http.put(`/users/` + user.username, user);
  }

  delete(id: number) {
      return this.http.delete(`/users/` + id);
  }

  getUser(name): Observable<User> {
    return this.http.get(`${USER_API}/${name}`).pipe(map((data: User) => data));
  }

  addUser(user: User) {
    return this.http
      .post(`${USER_API}`, user)
      .pipe(map((response: Response) => response));
  }

  login(username: string, password: string) {
    alert(username + ':' + password);
    return this.http.post<any>('/users/authenticate', { username: username, password: password })
        .pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }

            return user;
      }));
    }

    logout() {
        // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
    }  
}
