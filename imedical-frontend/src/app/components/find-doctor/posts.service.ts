import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  HOST = 'http://localhost:8000';
  private postsUpdated = new Subject<{ posts: Post[]; postCount: number }>();
  constructor(private http: HttpClient, private router: Router) {}

  getPosts(postsPerPage: number, currentPage: number) {
    this.http
      .get<any>(`${this.HOST}/api/question`)
      .pipe(
        map(postData => {
          return {
            posts: postData.map(post => {
              return {
                title: post.Title,
                description: atob(post.Description),
                id: post.id,
                creator: post.fk_pacientid
              };
            }),
            maxPosts: 10
          };
        })
      )
      .subscribe(transformedPostData => {
        this.posts = transformedPostData.posts;
        this.postsUpdated.next({
          posts: [...this.posts],
          postCount: transformedPostData.maxPosts
        });
      });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  getPost(id: string) {
    return this.http.get<any>(`${this.HOST}/api/question/${id}`);
  }

  addPost(title: string, content: string) {
    const postData = new FormData();
    const body = {
      Title: title,
      Description: btoa(content)
    };
    return this.http.post<{ message: string; post: Post }>(
      `${this.HOST}/api/question`,
      body
    );
  }

  updatePost(id: string, title: string, content: string) {
    const postData = {
      id: id,
      Title: title,
      Description: btoa(content),
      creator: null
    };
    return this.http.put(`${this.HOST}/api/question/${id}`, postData);
  }

  sendReply(id: string, reply: string) {
    const postData = {
      id: id,
      Reply: btoa(reply),
      creator: null
    };
    return this.http.put(`${this.HOST}/api/replyQuestion/${id}`, postData);
  }

  deletePost(postId: string) {
    return this.http.delete(`${this.HOST}/api/question/${postId}`);
  }
}
