import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  private components: any = [
    LoginComponent,
    DashboardComponent
  ];
  public currentComponent: any = null;

  constructor() {
    this.currentComponent = this.components[1];
  }


}
