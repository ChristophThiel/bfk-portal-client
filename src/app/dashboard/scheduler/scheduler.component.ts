import { Component } from '@angular/core';

const locale: string = 'de-AT';
const dayNameOption = { weekday: 'long' };
const monthOption = { month: 'long' };

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.scss']
})
export class SchedulerComponent {

  /* public currentDate: Date;
  public dayNames: string[] = [
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
    'Sonntag'
  ];
  public appointments: any[] = [{
    title: 'Hilfe',
    from: '2019-08-02T09:00:00',
    to: '2019-08-15T14:00:00'
  }];

  public days: any[] = [];
  // public positionedAppointments: any[] = [];
  public overlayRows: any[] = []

  constructor() {
    this.currentDate = new Date();
    this.createPanel();
    for (let i = 0; i < 24; i++) {
      this.overlayRows.push({});
    }
  }

  public get currentMonth(): string {
    return `${this.currentDate.toLocaleDateString(locale, monthOption)} ${this.currentDate.getFullYear()}`;
  }

  public changeMonth(changeValue: number): void {
    this.currentDate.setMonth(this.currentDate.getMonth() + changeValue);
    //this.positionedAppointments = [];
    this.createPanel();
  }

  public isToday(value: number): boolean {
    const today = new Date();
    const other = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), value);
    return today.getFullYear() === other.getFullYear() && today.getMonth() === other.getMonth() && today.getDate() === other.getDate();
  }

  private createPanel(): void {
    this.days = [];
    const daysOfLastMonth = this.daysInMonth(this.currentDate.getMonth());
    const dayNameOfFirst = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    const position = this.dayNames.indexOf(dayNameOfFirst.toLocaleDateString(locale, dayNameOption));

    for (let i = 0; i < position; i++) {
      this.days.push({
        value: daysOfLastMonth - position + i + 1,
        isDisabled: true
      });
    }

    for (let i = 1; i <= this.daysInMonth(this.currentDate.getMonth() + 1); i++) {
      this.days.push({
        value: i,
        isDisabled: false
      });
    }

    const currentLength = this.days.length;
    for (let i = 1; i <= 42 - currentLength; i++) {
      this.days.push({
        value: i,
        isDisabled: true
      })
    }

    /*for (let appointment of this.appointments) {
      const from = new Date(appointment.from);
      const to = new Date(appointment.to);
      const span = Math.round((to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24)) + 1;
      let help = 0;
      let i = 0;
      for (i = position + from.getDate(); i <= span + position + from.getDate() - 1; i++) {
        help++;
        if (i % 7 === 0) {
          const pos = this.getPositionOfDate(position, new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), i - help - position + 1), help);
          this.positionedAppointments.push({
            appointment: appointment,
            row: pos.row,
            columnStart: pos.columnStart,
            columnEnd: pos.columnEnd
          });
          help = 0;
        }
      }
      if ((i - 1) % 7 !== 0) {
        const pos = this.getPositionOfDate(position, new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), i - help - position), help);
        this.positionedAppointments.push({
          appointment: appointment,
          row: pos.row,
          columnStart: pos.columnStart,
          columnEnd: pos.columnEnd
        });
      }
    }
  }

  private drawAppointments(): void {
    const panel: any[] = [42];

  }

  private daysInMonth(month): number {
    return new Date(this.currentDate.getFullYear(), month, 0).getDate();
  }

  /*private getPositionOfDate(position: number, date: Date, span = 1): any {
   if (span > 7) {
     return null;
   }
   let row = Math.ceil((position + date.getDate()) / 7) + 1;
   let column = position + date.getDate() - (+row - 2) * 7;

   return {
     row: row,
     columnStart: column,
     columnEnd: span + column
   };
 } */

}
