import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/containers/user/user.service';
import { NewsService } from '../news.service';
import { News } from 'src/app/models/news';

@Component({
  selector: 'app-new-view',
  templateUrl: './news.view.component.html',
  styleUrls: ['./news.view.component.scss']
})
export class NewsViewComponent implements OnInit {
  news: News[];
  article: News;
  userType: string;
  isLoading = false;
  userId: number;
  totalPosts: number;
  isAuth = false;
  newsId: string;

  private postsSub: Subscription;
  private authStatusSub: Subscription;

  constructor(
    private authService: UserService,
    private route: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('newsId')) {
        this.newsId = paramMap.get('newsId');
        this.isLoading = true;
        this.newsService.getNew(this.newsId).subscribe(newsData => {
          console.log(newsData);
          this.article = {
            id: newsData.id,
            Title: newsData.Title,
            Content: newsData.Content,
            likes: 12
          };
          console.log(this.article);
          this.isLoading = false;
        });
      }
    });
  }
}
