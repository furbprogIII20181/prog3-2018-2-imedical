import { UserService } from './../containers/user/user.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: UserService, public router: Router) {}

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      console.log('not auth');
      this.router.navigate(['/login']);
      return false;
    }
    console.log('auth');
    return true;
  }

}
