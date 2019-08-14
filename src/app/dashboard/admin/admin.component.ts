import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  public formGroup: FormGroup;
  public currentDate: Date;
  public filteredMonths: any[];
  public selectedDate: Date = new Date(2019, 8);

  constructor(private builder: FormBuilder) {
    this.formGroup = builder.group({});
    this.currentDate = new Date();
    this.filteredMonths = [];
  }

  public get navigatorText(): string {
    return this.currentDate.toLocaleDateString('de', { month: 'long', year: 'numeric' })
  }

  public cancelEvent(event: any) {
    event.cancel = true;
  }

  public changeMonth(value: number): void {
    const help = new Date(this.currentDate.getTime());
    help.setMonth(help.getMonth() + value);
    this.currentDate = new Date(help.getFullYear(), help.getMonth());
  }

  public cellClicked(event: any): void {
    event.cancel = true;
    this.selectedDate = event.cellData.startDate;
  }
}
