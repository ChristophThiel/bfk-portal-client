import { Component, ViewChild, HostListener } from '@angular/core';
import { DxSchedulerComponent } from 'devextreme-angular';
import { MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { AppointmentDialog } from '../dialogs/appointment/appointment.dialog';

const locale: string = 'de-AT';
const dayNameOption = { weekday: 'long' };
const monthOption = { month: 'long' };

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent {

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
      isSelected: true,
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
      isSelected: false,
      route: '/admin'
    }
  ];

  public currentDate: Date;
  public selectedDate: Date;
  public appointments: any[] = [
    {
      type: 'Dienst',
      text: "go go go!",
      startDate: new Date(2019, 7, 15, 9, 30),
      endDate: new Date(2019, 7, 16, 11, 30)
    },
    {
      type: 'Dienst',
      text: "Test 1",
      startDate: new Date(2019, 7, 15, 9, 30),
      endDate: new Date(2019, 7, 16, 11, 30)
    },
    {
      type: 'Dienst',
      text: "Test 1",
      startDate: new Date(2019, 7, 15, 9, 30),
      endDate: new Date(2019, 7, 16, 11, 30)
    },
    {
      type: 'Dienst',
      text: "Test 1",
      startDate: new Date(2019, 7, 15, 9, 30),
      endDate: new Date(2019, 7, 16, 11, 30)
    }
  ]

  private screenHeight: any;
  private screenWidth: any;
  private doubleClick = false;

  @HostListener('window:resize', ['$event'])
  private onResize() {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  constructor(public dialog: MatDialog) {
    this.currentDate = new Date();
    this.selectedDate = new Date();
    this.onResize();
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
    this.onResize();
    if (this.screenWidth > 600) {
      if (this.selectedDate.getTime() === event.cellData.startDate.getTime()) {
        this.doubleClick = true;
      }
      if (this.doubleClick) {
        this.doubleClick = false;
        this.createAppointment();
      }
    }
    event.cancel = true;
    this.selectedDate = event.cellData.startDate;
  }

  public createAppointment() {
    const dialogRef = this.dialog.open(AppointmentDialog, {
      maxWidth: '100vw',
      disableClose: false,
      panelClass: 'full-dialog-container',
      autoFocus: false,
      data: {
        from: this.selectedDate
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.appointments.push(result);
    });
  }
}
