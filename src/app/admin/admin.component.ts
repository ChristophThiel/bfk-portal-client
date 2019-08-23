import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  public items: any[] = [
    {
      content: 'Übersicht',
      icon: 'star',
      isSelected: false,
      route: '/overview'
    },
    {
      content: 'Kalendar',
      icon: 'perm_contact_calendar',
      isSelected: false,
      route: '/scheduler'
    },
    {
      content: 'Marktplatz',
      icon: 'store',
      isSelected: false,
      route: '/market'
    },
    /*{
      content: 'Dokumente',
      icon: 'folder',
      isSelected: false,
      route: 'documents'
    },*/
    {
      content: 'Administration',
      icon: 'settings',
      isSelected: true,
      route: '/admin'
    }
  ];
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
