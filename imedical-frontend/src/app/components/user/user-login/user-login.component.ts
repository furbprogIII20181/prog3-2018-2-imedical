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

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['user-login.component.scss']
})
export class UserLoginComponent {
  @Input()
  users: User[];

  constructor() {}
  onSubmit(user: User, valid: boolean) {
    if (valid) {
      //this.update.emit(JSON.stringify(user));
    }
  }
}
