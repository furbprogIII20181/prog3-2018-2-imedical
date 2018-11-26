import { RatingsService } from './../ratings.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Subscription } from 'rxjs';

import { UserService } from 'src/app/containers/user/user.service';

@Component({
  selector: 'app-ratings-list',
  templateUrl: './ratings-list.component.html',
  styleUrls: ['./ratings-list.component.css']
})
export class RatingsListComponent implements OnInit, OnDestroy {
  isLoading = false;
  totalRatings = 0;
  ratingsPerPage = 2;
  currentPage = 1;
  pageSizeOptions = [1, 2, 5, 10];
  userIsAuthenticated = false;
  ratings: any = [];
  userId: number;
  private ratingsSub: Subscription;
  private authStatusSub: Subscription;

  constructor(
    public ratingsService: RatingsService,
    private authService: UserService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.ratingsService.getRatings(10, this.currentPage);
    this.userId = this.authService.getUserId();
    this.ratingsSub = this.ratingsService
      .getRatingsUpdateListener()
      .subscribe((postData: { ratings: any[]; postCount: number }) => {
        this.isLoading = false;
        this.ratings = postData.ratings;
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
    this.ratingsService.getRatings(10, this.currentPage);
  }

  onDelete(ratingId: string) {
    this.isLoading = true;
    this.ratingsService.deleteRating(ratingId).subscribe(() => {
      this.ratingsService.getRatings(10, this.currentPage);
    });
  }

  ngOnDestroy() {
    this.ratingsSub.unsubscribe();
    this.authStatusSub.unsubscribe();
  }
}
