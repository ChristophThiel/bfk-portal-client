import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public currentComponent: string;
  public items: any[] = [
    {
      content: 'Übersicht',
      icon: 'star',
      isSelected: true,
      route: ''
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
      route: 'market'
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
      route: 'admin'
    }
  ];

  constructor() { }

  public onActivate(event: any): void {
    switch (event.constructor.name) {
      case 'OverviewComponent':
        this.currentComponent = 'Übersicht';
        break;
      case 'SchedulerComponent':
        this.currentComponent = 'Kalendar';
        break;
      case 'MarketComponent':
        this.currentComponent = 'Marktplatz';
        break;
      case 'DocumentsComponent':
        this.currentComponent = 'Dokumente';
        break;
      case 'AdminComponent':
        this.currentComponent = 'Administration';
        break;
    }
  }

  public selectItem(select: any, sidenav: any): void {
    this.items.forEach(item => item.isSelected = false);
    const selected = this.items.filter(item => item.content === select.content);
    selected[0].isSelected = true;
    sidenav.toggle();
  }

}
