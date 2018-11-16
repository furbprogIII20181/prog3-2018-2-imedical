import { News } from 'src/app/models/news';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Subscription } from 'rxjs';

import { UserService } from 'src/app/containers/user/user.service';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit, OnDestroy {
  news: News[] = [];
  isLoading = false;
  totalNews = 0;
  newsPerPage = 2;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  userIsAuthenticated = false;
  userId: number;
  private newsSub: Subscription;
  private authStatusSub: Subscription;

  constructor(
    public newsService: NewsService,
    private authService: UserService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.newsService.getNews(this.newsPerPage, this.currentPage);
    this.userId = this.authService.getUserId();
    this.newsSub = this.newsService
      .getNewsUpdateListener()
      .subscribe((newsData: { news: News[]; newCount: number }) => {
        this.isLoading = false;
        this.totalNews = newsData.newCount;
        this.news = newsData.news;
      });
    this.userIsAuthenticated = this.authService.getIsAuthenticated();
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
        this.userId = this.authService.getUserId();
      });
  }

  onChangedPage(pageData: PageEvent) {
    this.isLoading = true;
    this.currentPage = pageData.pageIndex + 1;
    this.newsPerPage = pageData.pageSize;
    this.newsService.getNews(this.newsPerPage, this.currentPage);
  }

  onDelete(newsId: string) {
    this.isLoading = true;
    this.newsService.deleteNews(newsId).subscribe(() => {
      this.newsService.getNews(this.newsPerPage, this.currentPage);
    });
  }

  ngOnDestroy() {
    this.newsSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }
}
