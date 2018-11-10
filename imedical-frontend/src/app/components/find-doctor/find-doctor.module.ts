import { PostListComponent } from './post-list/post-list.component';
import { NgModule } from '@angular/core';
import { PostCreateComponent } from './post-create/post-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { FindDoctorComponent } from './find-doctor.component';
import { HomeService } from 'src/app/containers/home/home.service';
@NgModule({
  declarations: [PostListComponent, PostCreateComponent, FindDoctorComponent],
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
  exports: [FindDoctorComponent],
  providers: [HomeService]
})
export class FindDoctorModule {}
