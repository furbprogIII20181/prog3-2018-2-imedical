import { EventEmitter } from '@angular/core';
import { User } from '../../../models/user';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserValidators } from './doctor.validators';
import { UserService } from '../../../containers/user/user.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

export interface Spec {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.scss']
})
export class DoctorRegisterComponent implements OnInit {
  form = this.fb.group({
    doctor: this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      username: this.fb.control('', [Validators.required]),
      fullname: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
      birthdate: this.fb.control('', [Validators.required]),
      phoneNumber: this.fb.control('', [Validators.required]),
      docID: this.fb.control('', [Validators.required]),
      specialization: this.fb.control('', [Validators.required])
    })
  });

  hide = true;

  specs: Spec[] = [
    { value: 'psychology', viewValue: 'Psychology' },
    { value: 'orthopaedist', viewValue: 'Orthopaedist' },
    { value: 'dentist', viewValue: 'Dentist' }
  ];

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}

  @Output()
  update: EventEmitter<User> = new EventEmitter();

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
          alert('Registrado com sucesso');
          this.router.navigate(['/login']);
        },
        error => {
          console.error(err);
        }
      );
  }
}
