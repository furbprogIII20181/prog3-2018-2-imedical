import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RatingsService {
  HOST = 'http://localhost:8000';
  ratings: any[] = [];
  private ratingsUpdated = new Subject<any>();
  constructor(private http: HttpClient, private router: Router) {}

  getRatings(ratingsPerPage: number, currentPage: number) {
    this.http
      .get<any>(`${this.HOST}/api/ratings`)
      .pipe(
        map(ratingsData => {
          return {
            ratings: ratingsData.map(post => {
              return {
                title: post.Title,
                description: atob(post.Description),
                rating: post.Rating,
                id: post.id,
                creator: post.fk_userid
              };
            }),
            maxRatings: 10
          };
        })
      )
      .subscribe(transformedRatingData => {
        this.ratings = transformedRatingData.ratings;
        this.ratingsUpdated.next({
          ratings: [...this.ratings],
          count: 10
        });
      });
  }

  getRatingsUpdateListener() {
    return this.ratingsUpdated.asObservable();
  }

  getRating(id: string) {
    return this.http.get<any>(`${this.HOST}/api/question/${id}`);
  }

  addRating(title: string, content: string) {
    const ratingData = new FormData();
    const body = {
      Title: title,
      Description: btoa(content)
    };
    return this.http.post<any>(`${this.HOST}/api/ratings`, body);
  }

  updateRating(id: string, title: string, content: string, rating: number) {
    const ratingData = {
      id: id,
      Title: title,
      Description: btoa(content),
      Rating: rating,
      creator: null
    };
    return this.http.put(`${this.HOST}/api/ratings/${id}`, ratingData);
  }

  deleteRating(ratingId: string) {
    return this.http.delete(`${this.HOST}/api/ratings/${ratingId}`);
  }
}
