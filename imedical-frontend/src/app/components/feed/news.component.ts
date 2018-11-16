import { NewsService } from './news.service';
import { UserService } from './../../containers/user/user.service';
import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/containers/home/home.service';

@Component({
  selector: 'app-feed',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  mArticles: Array<any>;
  userType: string;

  constructor(
    private homeService: HomeService,
    private userService: UserService,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.userType = this.userService.getUserType();
    this.homeService
      .initArticles()
      .subscribe(data => (this.mArticles = data['articles']));
    //load news sources
  }
}
