import { News } from './../../models/news';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class NewsService {
  private news: News[] = [];
  HOST = 'http://localhost:8000';
  private newsUpdated = new Subject<{ news: News[] }>();
  constructor(private http: HttpClient, private router: Router) {}

  getNews(newsPerPage: number, currentPage: number) {
    this.http
      .get<any>(`${this.HOST}/api/allNews`)
      .pipe(
        map(newData => {
          return {
            news: newData.map(news => {
              return {
                title: news.Title,
                content: atob(news.Content),
                id: news.id,
                creator: news.fk_pacientid
              };
            }),
            maxnews: 10
          };
        })
      )
      .subscribe(transformednewData => {
        this.news = transformednewData.news;
        this.newsUpdated.next({
          news: [...this.news]
        });
      });
  }

  getMyNews(newsPerPage: number, currentPage: number) {
    this.http
      .get<any>(`${this.HOST}/api/myNews`)
      .pipe(
        map(newData => {
          return {
            news: newData.map(news => {
              return {
                title: news.Title,
                content: atob(news.Content),
                id: news.id,
                creator: news.fk_pacientid
              };
            }),
            maxnews: 10
          };
        })
      )
      .subscribe(transformednewData => {
        this.news = transformednewData.news;
        this.newsUpdated.next({
          news: [...this.news]
        });
      });
  }

  getNewsUpdateListener() {
    return this.newsUpdated.asObservable();
  }

  getNew(id: string) {
    return this.http.get<any>(`${this.HOST}/api/news/${id}`);
  }

  addNews(title: string, content: string) {
    const body = {
      Title: title,
      Content: btoa(content)
    };
    return this.http.post<{ message: string; news: News }>(
      `${this.HOST}/api/news`,
      body
    );
  }

  updateNews(id: string, title: string, content: string) {
    const newsData = {
      id: id,
      Title: title,
      Content: btoa(content)
    };
    return this.http.put(`${this.HOST}/api/news/${id}`, newsData);
  }

  deleteNews(newsId: string) {
    return this.http.delete(`${this.HOST}/api/news/${newsId}`);
  }
}
