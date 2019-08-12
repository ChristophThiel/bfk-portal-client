import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  public loggedIn: boolean = false;

  constructor() { }

  public onLogIn(event: boolean) {
    this.loggedIn = event;
  }

}
