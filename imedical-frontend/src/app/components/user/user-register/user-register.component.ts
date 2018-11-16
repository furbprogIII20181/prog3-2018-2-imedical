import { MatSnackBar } from '@angular/material';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../containers/user/user.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  form = this.fb.group({
    user: this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      username: this.fb.control('', [Validators.required]),
      fullname: this.fb.control('', [Validators.required]),
      pwd: this.fb.control('', [Validators.required]),
      birthdate: this.fb.control('', [Validators.required]),
      phone: this.fb.control('', [Validators.required])
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
      .register(this.form.value.user, 'user')
      .pipe(first())
      .subscribe(
        data => {
          this.snackBar.open(
            'Congrats! You are now registered in iMedical',
            'Awesome!'
          );
          this.router.navigate(['/login']);
        },
        error => {
          console.error('REGISTRATION ERROR ' + error);
          this.snackBar.open(
            'Awww :( an error occurred, please try again!',
            'OK!'
          );
        }
      );
  }
}
