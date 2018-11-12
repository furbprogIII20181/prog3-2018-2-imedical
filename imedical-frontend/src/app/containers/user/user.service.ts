import { User } from '../../models/user';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

const USER_API = 'http://localhost:4200/assets/user.json';
const HOST = 'http://localhost:8000';

@Injectable()
export class UserService {
  token: string;
  private authStatusListener = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  getToken() {
    return this.token;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getAllUsers() {
    return this.http.get<User[]>(`${HOST}/api/users`);
  }

  getById(id: number) {
    return this.http.get(`${HOST}/api/user/${id}`);
  }

  register(user: any, type: string) {
    const newUser = {
      username: user.username,
      fullname: user.fullname,
      pwd: user.password,
      email: user.email,
      birthdate: user.birthDate,
      phone: user.phone,
      sex: 'M',
      specialization: user.specialization,
      docID: user.docID,
      type
    };

    return this.http.post(`${HOST}/api/signup`, newUser);
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

  login(username: string, password: string) {
    return this.http
      .post<any>(`${HOST}/api/login`, {
        username,
        password
      })
      .subscribe(
        res => {
          this.token = res.token;
          this.authStatusListener.next(true);
          this.router.navigate(['/home']);
        },
        error => {
          console.error('Login error ', error);
        }
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    // Check whether the token is expired and return
    // true or false
    return !!token;
  }
}
