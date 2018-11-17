import { News } from './../../models/news';
import { NewsService } from './news.service';
import { UserService } from './../../containers/user/user.service';
import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/containers/home/home.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  news: any[];
  userType: string;
  isLoading = false;
  userId: number;
  totalPosts: number;
  isAuth = false;

  private postsSub: Subscription;
  private authStatusSub: Subscription;

  constructor(
    private authService: UserService,
    private router: Router,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.newsService.getNews(10, 1);
    this.userId = this.authService.getUserId();
    this.postsSub = this.newsService
      .getNewsUpdateListener()
      .subscribe((newsData: { news: News[]; postCount: number }) => {
        this.isLoading = false;
        this.totalPosts = 10;
        this.news = newsData.news;
      });
    this.isAuth = this.authService.getIsAuthenticated();
    this.userType = localStorage.getItem('userType');
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.isAuth = isAuthenticated;
        this.userId = this.authService.getUserId();
      });
  }

  onViewClick(article: News) {
    this.router.navigate([`/news/${article.id}`]);
  }
}
