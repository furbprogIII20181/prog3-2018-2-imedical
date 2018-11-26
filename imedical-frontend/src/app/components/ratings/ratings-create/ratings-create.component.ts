import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { RatingsService } from '../ratings.service';

@Component({
  selector: 'app-ratings-create',
  templateUrl: './ratings-create.component.html',
  styleUrls: ['./ratings-create.component.css']
})
export class RatingsCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  rating: any;
  isLoading = false;
  form: FormGroup;
  private mode = 'create';
  private ratingId: string;

  constructor(
    public ratingsService: RatingsService,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      description: new FormControl(null, { validators: [Validators.required] }),
      rating: new FormControl(null, {
        validators: [Validators.required, Validators.maxLength(2)]
      })
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('ratingId')) {
        this.mode = 'edit';
        this.ratingId = paramMap.get('ratingId');
        this.isLoading = true;
        this.ratingsService.getRating(this.ratingId).subscribe(postData => {
          if (!postData) {
            this.router.navigate(['/home']);
            return;
          }
          this.isLoading = false;
          this.rating = {
            id: postData._id,
            Title: postData.Title,
            Description: atob(postData.Description),
            Reply: postData.Reply ? atob(postData.Reply) : '',
            creator: postData.creator
          };
          this.form.setValue({
            title: this.rating.Title,
            content: this.rating.Description,
            reply: this.rating.Reply
          });
        });
      } else {
        this.mode = 'create';
        this.ratingId = null;
      }
    });
  }

  onSavePost() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.ratingsService
        .addRating(
          this.form.value.title,
          this.form.value.description,
          this.form.value.rating
        )
        .subscribe(() => {
          this.isLoading = false;
          this.ratingsService.getRatings(5, 1);
        });
    } else {
      this.ratingsService
        .updateRating(
          this.ratingId,
          this.form.value.title,
          this.form.value.description,
          this.form.value.rating
        )
        .subscribe(() => {
          this.isLoading = false;
          this.ratingsService.getRatings(5, 1);
        });
    }

    this.form.reset();
    this.router.navigate(['/ratings']);
  }
}
