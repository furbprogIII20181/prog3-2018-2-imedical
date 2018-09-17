import { UserService } from './user.service';
import { NgModule } from '@angular/core';
import { UserLoginComponent } from './user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UserLoginComponent],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [UserLoginComponent],
  providers: [UserService]
})
export class UserModule {}
