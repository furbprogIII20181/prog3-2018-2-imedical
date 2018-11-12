import { MatSnackBar } from '@angular/material';
import { EventEmitter } from '@angular/core';
import { User } from '../../../../models/user';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserValidators } from './user.validators';
import { UserService } from '../../../../containers/user/user.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  form = this.fb.group({
    user: this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      username: this.fb.control('', [Validators.required]),
      fullname: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
      birthdate: this.fb.control('', [Validators.required]),
      phoneNumber: this.fb.control('', [Validators.required])
    })
  });

  hide = true;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  getRequiredMessage(name: string) {
    // #TO DO implement a/an to the NAME
    return `You have to type a ${name}`;
  }

  handleRegister() {
    this.userService
      .register(this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(this.form.value);
          this.snackBar.open('User successfully registered ', 'Awesome!');
          this.router.navigate(['/login']);
        },
        error => {
          console.error('erro no register ' + error);
        }
      );
  }
}
