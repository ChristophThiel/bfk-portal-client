import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Errors } from 'src/app/core/errors';

@Component({
  selector: 'swap-dialog',
  templateUrl: 'swap.dialog.html',
  styleUrls: ['swap.dialog.scss']
})
export class SwapDialog implements OnInit {

  public formGroup: FormGroup;

  constructor(private builder: FormBuilder,
    public dialogRef: MatDialogRef<SwapDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  public ngOnInit(): void {
    this.formGroup = this.builder.group({
      other: ['', Validators.required]
    });
  }

  public close() {
    this.dialogRef.close();
  }

  public send() {
    if (this.formGroup.valid) {
      this.dialogRef.close();
    }
  }

  public getErrorMessage(formControlName: string): string {
    if (this.formGroup.get(formControlName).hasError('required')) {
      return Errors.required;
    }
  }

}