import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Errors } from 'src/app/core/errors';

@Component({
  selector: 'user-dialog',
  templateUrl: 'user.dialog.html',
  styleUrls: ['user.dialog.scss']
})
export class UserDialog implements OnInit {

  public formGroup: FormGroup;

  constructor(private builder: FormBuilder,
    public dialogRef: MatDialogRef<UserDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  public ngOnInit(): void {
    this.formGroup = this.builder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }


  public close() {
    this.dialogRef.close();
  }

  public create() {
  }

  public getErrorMessage(formControlName: string): string {
    if (this.formGroup.get(formControlName).hasError('required')) {
      return Errors.required;
    } else if (this.formGroup.get(formControlName).hasError('email')) {
      return Errors.email;
    }
  }

}