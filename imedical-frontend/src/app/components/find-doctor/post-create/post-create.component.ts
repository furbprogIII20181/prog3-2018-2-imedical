import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HomeService } from 'src/app/containers/home/home.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';

  constructor(public homeService: HomeService) {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.homeService.addPost(form.value.title, form.value.content);
    form.resetForm();
  }
}
