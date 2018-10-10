import { AbstractControl, FormControl, Validators } from '@angular/forms';

export class UserValidators implements Validators {
  static equals(control: AbstractControl) {
    return control.value === 'template@hotmail.com'
      ? { notEqualsEmail: false }
      : { notEqualsEmail: true };
  }
}
