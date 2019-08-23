import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Errors } from '../core/errors';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent {

  public formGroup: FormGroup;

  constructor(private builder: FormBuilder) {
    this.formGroup = this.builder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  public getErrorMessage(formControlName: string): string {
    if (this.formGroup.get(formControlName).hasError('required')) {
      return Errors.required;
    } else if (this.formGroup.get(formControlName).hasError('email')) {
      return Errors.email;
    }
  }

}
