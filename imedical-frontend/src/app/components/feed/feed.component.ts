import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/containers/home/home.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  mArticles: Array<any>;

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    //load articles
    this.homeService
      .initArticles()
      .subscribe(data => (this.mArticles = data['articles']));
    //load news sources
  }

  // searchArticles(source) {
  //   console.log('selected source is: ' + source);
  //   this.homeService
  //     .getArticlesByID(source)
  //     .subscribe(data => (this.mArticles = data['articles']));
  // }
}
