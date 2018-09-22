import { UserComponent } from './containers/user/user.component';
import { UserRegisterComponent } from './components/user/user-register/user-register.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserModule } from './containers/user/user.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './components/user/user-login/user-login.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'register', component: UserRegisterComponent },
  { path: 'login', component: UserLoginComponent },
  { path: '**', component: UserComponent }
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
