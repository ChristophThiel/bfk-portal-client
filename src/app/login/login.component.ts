import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Errors } from '../core/errors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Output()
  public loggedIn = new EventEmitter<boolean>();

  @Output()
  public resetPassword = new EventEmitter<boolean>();

  public formGroup: FormGroup;
  public visible: boolean;

  constructor(private builder: FormBuilder) {
    this.visible = false;
    this.formGroup = builder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  public getErrorMessage(formControlName: string): string {
    if (this.formGroup.get(formControlName).hasError('required')) {
      return Errors.required;
    } else if (this.formGroup.get(formControlName).hasError('email')) {
      return Errors.email;
    }
  }

  public login(): void {
    this.loggedIn.emit(true);
  }

  public reset(): void {
    this.resetPassword.emit(true);
  }

  public toggleVisibility(): void {
    this.visible = !this.visible;
  }

}
