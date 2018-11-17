import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';
import { HomeService } from 'src/app/containers/home/home.service';
import { NewsComponent } from './news.component';
import { NewsListComponent } from './news-master/news-list/news-list.component';
import { NewsCreateComponent } from './news-master/news-create/news-create.component';
import { NewsMasterComponent } from './news-master/news-master.component';
import { NewsViewComponent } from './news-view/news.view.component';
@NgModule({
  declarations: [
    NewsListComponent,
    NewsCreateComponent,
    NewsMasterComponent,
    NewsComponent,
    NewsViewComponent
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
  exports: [NewsComponent, NewsMasterComponent],
  providers: [HomeService]
})
export class NewsModule {}
