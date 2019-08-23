import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent {

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
      isSelected: true,
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
  public shifts: any[] = [
    {
      title: 'Nachmittagsdienst',
      from: '13. August 2019',
      user: 'Roland Pöttinger-Kloimstein'
    },
    {
      title: 'Nachtdienst',
      from: '14. August 2019',
      user: 'Alexander Koblmüller'
    },
    {
      title: 'Freier Dienst',
      from: '24. Dezember 2019',
      user: ''
    }
  ]

  constructor() { }

}
