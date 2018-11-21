import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { PostsService } from '../posts.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  post: Post;
  isLoading = false;
  form: FormGroup;
  private mode = 'create';
  private postId: string;

  constructor(
    public postsService: PostsService,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      content: new FormControl(null, { validators: [Validators.required] }),
      reply: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      })
    });
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paramMap.get('postId');
        this.isLoading = true;
        this.postsService.getPost(this.postId).subscribe(postData => {
          if (!postData) {
            this.router.navigate(['/home']);
            return;
          }
          this.isLoading = false;
          this.post = {
            id: postData._id,
            Title: postData.Title,
            Description: atob(postData.Description),
            Reply: postData.Reply ? atob(postData.Reply) : '',
            creator: postData.creator
          };
          this.form.setValue({
            title: this.post.Title,
            content: this.post.Description,
            reply: this.post.Reply
          });
        });
      } else {
        this.mode = 'create';
        this.postId = null;
      }
      this.form.get('reply').disable();
    });
  }

  onSavePost() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
      this.postsService
        .addPost(this.form.value.title, this.form.value.content)
        .subscribe(() => {
          this.isLoading = false;
          this.postsService.getPosts(5, 1);
        });
    } else {
      this.postsService
        .updatePost(this.postId, this.form.value.title, this.form.value.content)
        .subscribe(() => {
          this.isLoading = false;
          this.postsService.getPosts(5, 1);
        });
    }

    this.form.reset();
    this.router.navigate(['/find-doctor']);
  }
}
