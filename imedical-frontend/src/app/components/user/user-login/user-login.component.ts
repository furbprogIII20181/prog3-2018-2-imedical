import { UserService } from './../../../containers/user/user.service';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output
} from '@angular/core';
import { User } from '../../../models/user';
import { EventEmitter } from 'events';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['user-login.component.scss']
})
export class UserLoginComponent {
  hide = true;

  form = this.fb.group({
    user: this.fb.group({
      // email: this.fb.control('', [Validators.required, Validators.email]),
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required])
    })
  });

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  handleLogin() {
    if (this.form.valid) {
      console.log('valido');
      this.userService
        .login(this.form.value.user.username, this.form.value.user.password)
        .pipe(first())
        .subscribe(
          data => {
            console.log(data);
            this.router.navigate(['/home']);
          },
          error => {
            alert('Erro no Login');
          }
        );
    }
  }

  getRequiredMessage(name: string) {
    // #TO DO implement a/an to the NAME
    return `You have to type a ${name}`;
  }
}
