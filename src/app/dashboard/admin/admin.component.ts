import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  public months: string[] = [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
  ];
  public filteredMonths: any[];
  public selectedDate: Date = new Date(2019, 8);

  constructor() {
    this.filteredMonths = [];
    const index = this.months.indexOf(new Date(2019, 9).toLocaleDateString('de', { month: 'long' })) + 1;
    let help = this.months.splice(index, 3);
    for (let element of help) {
      this.filteredMonths.push({
        value: element,
        done: false
      });
    }
    if (index >= 10) {
      help = this.months.splice(0, index - 9);
      for (let element of help) {
        this.filteredMonths.push({
          value: element,
          done: true
        });
      }
    }
  }

  public getHeader(): string {
    return this.selectedDate.toLocaleDateString('de', { day: 'numeric', month: 'long', year: 'numeric' });
  }
}
