import { Component } from '@angular/core';
import { OverviewComponent } from '../overview/overview.component';
import { SchedulerComponent } from '../scheduler/scheduler.component';
import { MarketComponent } from '../market/market.component';
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public currentItem: string = 'Übersicht';
  public items: any[] = [
    {
      content: 'Übersicht',
      icon: 'star',
      isSelected: true,
      route: 'overview'
    },
    {
      content: 'Kalendar',
      icon: 'perm_contact_calendar',
      isSelected: false,
      route: 'scheduler'
    },
    {
      content: 'Marktplatz',
      icon: 'store',
      isSelected: false,
      route: 'market'
    },
    {
      content: 'Administration',
      icon: 'settings',
      isSelected: false,
      route: 'admin'
    }
  ];

  constructor() { }

  public onRouterOutletActivate(event: any, sidenav: any) {
    this.items.forEach(item => item.isSelected = false);
    let index = 0;

    if (event instanceof OverviewComponent)
      index = 0;
    else if (event instanceof SchedulerComponent)
      index = 1;
    else if (event instanceof MarketComponent)
      index = 2;
    else if (event instanceof AdminComponent)
      index = 3;
    else
      index = 0;

    this.items[index].isSelected = true;
    this.currentItem = this.items[index].content;
    sidenav.close();
  }

}
