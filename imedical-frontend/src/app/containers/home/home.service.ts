import { Diagnosis } from './../../models/diagnosis';
import { Symptom } from './../../models/symptom';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const USER_API = '/assets/db.json';

@Injectable()
export class HomeService {
  token: any;
  symptoms: any;

  API_URL_AUTH = 'https://sandbox-authservice.priaid.ch';
  API_URL_HEALT = 'https://sandbox-healthservice.priaid.ch';

  constructor(private http: HttpClient) {
    this.token = this.getToken();
  }

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

  getToken() {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append(
      'Authorization',
      'Bearer merinigames@hotmail.com:SV3+R2c0tD0+E12r51HVIg=='
    );
    return this.http
      .post(this.API_URL_AUTH + '/login', null, { headers })
      .pipe(map((res: string) => (this.token = res)));
  }

  getSymptoms(): Observable<Symptom[]> {
    return this.http
      .get(
        this.API_URL_HEALT + '/symptoms?token=' + this.token + '&language=en-gb'
      )
      .pipe(map((res: any) => res));
  }

  getDiagnosis(): Observable<Diagnosis[]> {
    return this.http
      .get(
        this.API_URL_HEALT +
          '/diagnosis?token=' +
          this.token +
          '&symptoms=' +
          this.symptoms +
          '&language=en-gb'
      )
      .pipe(map((res: any) => res));
  }
}
