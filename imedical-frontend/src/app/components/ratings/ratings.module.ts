import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from './ratings.component';
import { RatingsListComponent } from './ratings-list/ratings-list.component';
import { RatingsCreateComponent } from './ratings-create/ratings-create.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeService } from '../../containers/home/home.service';
import { PostsService } from '../find-doctor/posts.service';

@NgModule({
  declarations: [
    RatingsComponent,
    RatingsListComponent,
    RatingsCreateComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
  ],
  exports: [RatingsComponent],
  providers: [HomeService, PostsService]
})
export class RatingsModule {}
