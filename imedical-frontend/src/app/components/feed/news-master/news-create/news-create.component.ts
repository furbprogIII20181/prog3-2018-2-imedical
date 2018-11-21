import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { News } from 'src/app/models/news';
import { NewsService } from '../../news.service';

@Component({
  selector: 'app-news-create',
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.scss']
})
export class NewsCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  news: News;
  isLoading = false;
  form: FormGroup;
  private mode = 'create';
  private newsId: string;

  constructor(
    public newsService: NewsService,
    public router: Router,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      content: new FormControl(null, { validators: [Validators.required] })
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('newsId')) {
        this.mode = 'edit';
        this.newsId = paramMap.get('newsId');
        this.isLoading = true;
        this.newsService.getNew(this.newsId).subscribe(newsData => {
          if (!newsData) {
            this.router.navigate(['/home']);
            return;
          }
          this.isLoading = false;
          this.news = {
            id: newsData.id,
            Title: newsData.Title,
            Content: newsData.Content,
            likes: 0
          };
          this.form.setValue({
            title: this.news.Title,
            content: atob(this.news.Content)
          });
        });
      } else {
        this.mode = 'create';
        this.newsId = null;
      }
    });
  }

  onSaveNews() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.newsService
        .addNews(this.form.value.title, this.form.value.content)
        .subscribe(() => {
          this.isLoading = false;
          this.newsService.getMyNews(5, 1);
        });
    } else {
      this.newsService
        .updateNews(this.newsId, this.form.value.title, this.form.value.content)
        .subscribe(() => {
          this.isLoading = false;
          this.newsService.getMyNews(5, 1);
        });
    }

    this.form.reset();
    this.router.navigate(['/my-articles']);
  }
}
