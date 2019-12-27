import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Errors } from '../core/errors';
import { AuthenticationService } from '../core/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public formGroup: FormGroup;
  public visible: boolean;

  constructor(private builder: FormBuilder, private router: Router, private authentication: AuthenticationService) {
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
    if (this.formGroup.invalid)
      return;

    this.authentication.login(this.formGroup.get('email').value, this.formGroup.get('password').value)
      .subscribe(response => {
        this.router.navigate(['/dashboard']);
      }, error => alert('ERROR'));
  }

  public reset(): void {
  }

  public toggleVisibility(): void {
    this.visible = !this.visible;
  }

}
