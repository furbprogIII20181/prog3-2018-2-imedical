import { FindDoctorComponent } from '../../components/find-doctor/find-doctor.component';
import { DiagnosisComponent } from './../../components/diagnosis/diagnosis.component';
import { SymptomsComponent } from './../../components/symptoms/symptoms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeService } from './home.service';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { SymptomFilterPipe } from '../../components/pipe/filter.pipe';
import { AboutComponent } from 'src/app/components/about/about.component';
import { HelpComponent } from 'src/app/components/help/help.component';
import { MyDiagnosisComponent } from 'src/app/components/my-diagnosis/my-diagnosis.component';
import { FindDoctorModule } from 'src/app/components/find-doctor/find-doctor.module';
import { AddUserComponent } from 'src/app/components/user/crudl/add-user/add-user.component';
import { EditUserComponent } from 'src/app/components/user/crudl/edit-user/edit-user.component';
import { ListUserComponent } from 'src/app/components/user/crudl/list-user/list-user.component';
import { FeedComponent } from 'src/app/components/feed/feed.component';

@NgModule({
  declarations: [
    HomeComponent,
    SymptomsComponent,
    DiagnosisComponent,
    AboutComponent,
    HelpComponent,
    MyDiagnosisComponent,
    SymptomFilterPipe,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    FeedComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FindDoctorModule,
    MaterialModule,
    RouterModule
  ],
  exports: [HomeComponent],
  providers: [HomeService, SymptomFilterPipe]
})
export class HomeModule {}
