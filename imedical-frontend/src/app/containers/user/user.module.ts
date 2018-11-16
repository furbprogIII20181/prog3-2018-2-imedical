import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { UserLoginComponent } from '../../components/user/user-login/user-login.component';
import { UserRegisterComponent } from '../../components/user/user-register/user-register.component';
import { DoctorRegisterComponent } from '../../components/user/doctor-register/doctor-register.component';
import { AuthInterceptor } from './auth-interrceptor';

@NgModule({
  declarations: [
    UserLoginComponent,
    UserRegisterComponent,
    DoctorRegisterComponent,
    UserComponent
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
  exports: [UserComponent],
  providers: [
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ]
})
export class UserModule {}
