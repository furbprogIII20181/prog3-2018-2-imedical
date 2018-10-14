import { Diagnosis } from './../../models/diagnosis';
import { Symptom } from './../../models/symptom';
import { User } from '../../models/user';
import { Observable, of } from 'rxjs';
import { map, timeout, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Issue } from '../../models/issue';

const USER_API = '/assets/db.json';

@Injectable()
export class HomeService {
  symptoms: Symptom[];
  currentUser = {};
  token: string;
  API_URL_AUTH = 'https://sandbox-authservice.priaid.ch';
  API_URL_HEALT = 'https://sandbox-healthservice.priaid.ch';

  constructor(private http: HttpClient) {
    this.getToken();
  }

  setSelectedSymptoms(symptoms: Symptom[]) {
    this.symptoms = symptoms;
  }

  getSelectedSymptoms(): Symptom[] {
    return this.symptoms;
  }

  getUsers(): Observable<User[]> {
    return this.http.get(USER_API).pipe(map((data: User[]) => data));
  }

  getUser(name): Observable<User> {
    return this.http.get(`${USER_API}/${name}`).pipe(map((data: User) => data));
  }

  addUser(user: User): Observable<User> {
    return this.http
      .post(`${USER_API}`, user)
      .pipe(map((response: User) => response));
  }

  getToken(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer merinigames@hotmail.com:SV3+R2c0tD0+E12r51HVIg=='
      })
    };

    return this.http
      .post(this.API_URL_AUTH + '/login', undefined, httpOptions)
      .pipe(
        map((res: any) => {
          this.token = res.Token;
          return this.token;
        })
      );
  }

  getSymptoms(token): Observable<Symptom[]> {
    this.token = token;
    return this.http
      .get(this.API_URL_HEALT + '/symptoms?token=' + token + '&language=en-gb')
      .pipe(map((res: any) => res));
  }

  // https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[9,10,11]&gender=male&year_of_birth=1983&token=&format=json&language=en-gb:
  getDiagnosis(token, symptoms): Observable<Diagnosis[]> {
    return this.http
      .get(
        this.API_URL_HEALT +
          '/diagnosis?token=' +
          token +
          '&symptoms=' +
          '[' +
          symptoms +
          ']' +
          '&gender=male' +
          '&year_of_birth=1983' +
          '&language=en-gb'
      )
      .pipe(
        map((res: any) => res),
        timeout(5000)
      );
  }
  //https://sandbox-healthservice.priaid.ch/issues/11/info?token=&format=json&language=en-gb
  getIssue(token, id): Observable<Issue> {
    return this.http
      .get(
        this.API_URL_HEALT +
          '/issues/' +
          id +
          '/info?token=' +
          token +
          '&format=json&language=en-gb'
      )
      .pipe(map((res: any) => res));
  }
}
