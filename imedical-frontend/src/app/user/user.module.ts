import { MaterialModule } from './../material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { UserLoginComponent } from './user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserRegisterComponent } from './user-register/user-register.component';

@NgModule({
  declarations: [UserLoginComponent, UserRegisterComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ],
  exports: [UserLoginComponent, UserRegisterComponent],
  providers: [UserService]
})
export class UserModule {}
