import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent {

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
