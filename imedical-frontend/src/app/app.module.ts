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
import { HelpComponent } from './components/help/help.component';

const routes: Routes = [
  { path: '', component: UserLoginComponent },
  {
    path: 'user-register',
    component: UserRegisterComponent
  },
  {
    path: 'doctor-register',
    component: DoctorRegisterComponent
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
    path: 'help',
    component: HelpComponent
  },
  { path: '**', component: UserLoginComponent }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UserModule,
    RouterModule.forRoot(routes),
    HomeModule
  ],
  exports: [RouterModule],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
