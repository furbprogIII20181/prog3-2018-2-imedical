import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { UserLoginComponent } from '../../components/user/user-login/user-login.component';
import { UserRegisterComponent } from '../../components/user/user-register/user-register.component';

@NgModule({
  declarations: [UserLoginComponent, UserRegisterComponent, UserComponent],
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
  providers: [UserService]
})
export class UserModule {}
