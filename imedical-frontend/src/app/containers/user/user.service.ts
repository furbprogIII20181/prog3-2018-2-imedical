import { MatSnackBar } from '@angular/material';
import { User } from '../../models/user';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

const USER_API = 'http://localhost:4200/assets/users.json';
const HOST = 'http://localhost:8000';

@Injectable()
export class UserService {
  token: string;
  private isAuthenticated = false;
  private tokenTimer: any;
  private authStatusListener = new Subject<boolean>();
  private userId: number;
  private userType: string;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  getToken() {
    return this.token;
  }

  getIsAuthenticated() {
    return this.isAuthenticated;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getAllUsers() {
    return this.http.get<User[]>(`${HOST}/api/users`);
  }

  getAllUsersMock() {
    return this.http.get<any>(USER_API).pipe(map(data => data.users));
  }

  getById(id: number) {
    return this.http.get(`${HOST}/api/user/${id}`);
  }

  getByEmail(email: string) {
    return this.http.get(`${HOST}/api/user/${email}`);
  }

  register(user: any, type: string) {
    const newUser = {
      username: user.username,
      fullname: user.fullname,
      pwd: user.pwd,
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

  getUserId() {
    return this.userId;
  }

  getUserType() {
    return this.userType;
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
          if (this.token) {
            const expiresIn = res.expiresIn;
            this.setAuthTimer(expiresIn);
            const now = new Date();
            this.userId = res.userId;
            this.userType = res.type;
            localStorage.setItem('info', res.username);
            const exprirationDate = new Date(now.getTime() + expiresIn * 1000);
            this.saveAuthData(this.token, exprirationDate, this.userType);
            this.isAuthenticated = true;
            this.authStatusListener.next(true);
            this.router.navigate(['/home']);
          }
        },
        httpError => {
          this.snackBar.open(httpError.error.message, 'OK!', {duration: 3000});
        }
      );
  }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  autoAuthUser() {
    const authData = this.getAuthDate();
    if (!authData) return;
    const now = new Date();
    const expiresIn = authData.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authData.token;
      this.isAuthenticated = true;
      this.authStatusListener.next(true);
      this.setAuthTimer(expiresIn / 1000);
    }
  }

  private getAuthDate() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    if (!token && expirationDate) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate)
    };
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/login']);
  }

  private saveAuthData(token: string, expirationDate: Date, userType: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('userType', userType);
    localStorage.setItem('expiration', expirationDate.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userType');
  }
}
