import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from './../../post.model';
import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../posts.service';
@Component({
  selector: 'app-doctor-reply-view',
  templateUrl: './doctor-reply-view.component.html',
  styleUrls: ['./doctor-reply-view.component.scss']
})
export class DoctorReplyViewComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';
  post: Post;
  isLoading = false;
  form: FormGroup;
  private mode = 'create';
  private postId: string;

  constructor(
    public postsService: PostsService,
    public route: ActivatedRoute
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
          console.log(postData, !!postData.reply, postData.Description);
          this.post = {
            id: postData._id,
            Title: postData.Title,
            Description: atob(postData.Description),
            Reply: postData.Reply,
            creator: postData.creator
          };
          this.form.get('title').disable();
          this.form.get('content').disable();
          this.isLoading = false;
        });
      }
    });
  }

  onSavePost() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;

    this.postsService
      .sendReply(this.postId, this.form.value.reply)
      .subscribe(() => {
        this.isLoading = false;
        this.postsService.getPosts(5, 1);
      });

    this.form.reset();
  }
}
