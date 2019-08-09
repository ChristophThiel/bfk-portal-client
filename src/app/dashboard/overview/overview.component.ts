import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

  public appointments: any[] = [
    {
      name: 'test'
    }
  ];
  public shifts: any[] = [
    {
      title: 'Nachmittagsdienst',
      from: '13. August 2019'
    },
    {
      title: 'Nachtdienst',
      from: '14. August 2019'
    }
  ]

  constructor() { }

  public offer(shift: any): void {
    shift.offered = true;
  }

  public offered(shift: any): string {
    if (shift.offered) {
      return '../../../assets/images/offered.svg';
    }
    return '';
  }

}
