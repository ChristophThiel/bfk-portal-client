import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public items: any[] = [
    {
      content: 'Übersicht',
      icon: 'star',
      isSelected: true
    },
    {
      content: 'Kalendar',
      icon: 'perm_contact_calendar',
      isSelected: false
    },
    {
      content: 'Marktplatz',
      icon: 'store',
      isSelected: false
    },
    {
      content: 'Dokumente',
      icon: 'folder',
      isSelected: false
    },
    {
      content: 'Administration',
      icon: 'settings',
      isSelected: false
    }
  ];

  constructor() { }

  public selectItem(select: any): void {
    this.items.forEach(item => item.isSelected = false);
    const selected = this.items.filter(item => item.content === select.content);
    selected[0].isSelected = true;
  }

}
