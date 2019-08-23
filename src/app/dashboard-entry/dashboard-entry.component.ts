import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-entry',
  templateUrl: './dashboard-entry.component.html',
  styleUrls: ['./dashboard-entry.component.scss']
})
export class DashboardEntryComponent {

  @Input()
  public color: string;

  @Input()
  public content: string;

  @Input()
  public icon: string;

  @Input()
  public route: string;

  constructor() { }
}
