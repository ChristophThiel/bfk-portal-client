import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Errors } from 'src/app/core/errors';

@Component({
  selector: 'appointment-dialog',
  templateUrl: 'appointment.dialog.html',
  styleUrls: ['appointment.dialog.scss']
})
export class AppointmentDialog implements OnInit {

  public formGroup: FormGroup;

  constructor(private builder: FormBuilder,
    public dialogRef: MatDialogRef<AppointmentDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  public ngOnInit(): void {
    let from = this.data.from as Date;
    from = new Date(from.getFullYear(), from.getMonth(), from.getDate(), 2);
    const help = from.toISOString();
    this.formGroup = this.builder.group({
      type: ['Termin'],
      title: ['', Validators.required],
      from: [help.substring(0, help.length - 8), Validators.required],
      to: ['', Validators.required]
    });
  }


  public close() {
    this.dialogRef.close();
  }

  public create() {
    const help = {
      type: this.formGroup.get('type').value,
      text: this.formGroup.get('title').value,
      startDate: this.formGroup.get('from').value,
      endDate: this.formGroup.get('to').value,
    };
    if (this.formGroup.valid) {
      this.dialogRef.close(help);
    }
  }

  public getErrorMessage(formControlName: string): string {
    if (this.formGroup.get(formControlName).hasError('required')) {
      return Errors.required;
    }
  }

}