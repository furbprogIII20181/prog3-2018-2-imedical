import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output
} from '@angular/core';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['user-login.component.scss']
})
export class UserLoginComponent {
  @Input()
  users: User[];
  onSubmit(user: User, valid: boolean) {}
}
