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

const routes: Routes = [
  { path: '', component: UserLoginComponent },
  {
    path: 'find-doctor',
    component: FindDoctorComponent
  },
  {
    path: 'my-diagnostics',
    component: MyDiagnosisComponent
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
    component: HomeComponent,
    canActivate: [AuthGuardService]
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
    component: AboutComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'help',
    component: HelpComponent
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
