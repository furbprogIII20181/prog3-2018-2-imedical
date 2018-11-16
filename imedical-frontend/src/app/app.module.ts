import { NewsCreateComponent } from './components/feed/news-master/news-create/news-create.component';
import { PostCreateComponent } from './components/find-doctor/post-create/post-create.component';
import { AuthGuardService } from './guard/auth-guard.service';
import { SymptomsComponent } from './components/symptoms/symptoms.component';
import { HomeComponent } from './containers/home/home.component';
import { HomeModule } from './containers/home/home.module';
import { UserComponent } from './containers/user/user.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { DoctorRegisterComponent } from './components/user/doctor-register/doctor-register.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserModule } from './containers/user/user.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { DiagnosisComponent } from './components/diagnosis/diagnosis.component';
import { AboutComponent } from './components/about/about.component';
import { HelpComponent } from './components/help/help.component';
import { MaterialModule } from './material.module';
import { MyDiagnosisComponent } from './components/my-diagnosis/my-diagnosis.component';
import { FindDoctorComponent } from './components/find-doctor/find-doctor.component';
import { AddUserComponent } from './components/user/crudl/add-user/add-user.component';
import { EditUserComponent } from './components/user/crudl/edit-user/edit-user.component';
import { ListUserComponent } from './components/user/crudl/list-user/list-user.component';
import { NewsComponent } from './components/feed/news.component';
import { NewsMasterComponent } from './components/feed/news-master/news-master.component';

const routes: Routes = [
  { path: '', component: UserLoginComponent },
  {
    path: 'feed',
    component: NewsComponent
  },
  {
    path: 'my-articles',
    component: NewsMasterComponent
  },

  {
    path: 'find-doctor',
    component: FindDoctorComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'edit-news/:newsId',
    component: NewsCreateComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'edit/:postId',
    component: PostCreateComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'my-diagnostics',
    component: MyDiagnosisComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'user-register',
    component: UserRegisterComponent
  },
  {
    path: 'doctor-register',
    component: DoctorRegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'symptoms',
    component: SymptomsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'diagnosis',
    component: DiagnosisComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  {
    path: 'add-user',
    component: AddUserComponent
  },
  {
    path: 'edit-user',
    component: EditUserComponent
  },
  {
    path: 'list-user',
    component: ListUserComponent
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UserModule,
    RouterModule.forRoot(routes),
    HomeModule,
    MaterialModule
  ],
  exports: [RouterModule],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
